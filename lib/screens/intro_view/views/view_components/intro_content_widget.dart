import 'dart:io';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:stacked/stacked.dart';
import '../../../../helpers/ui_helpers/ui_general_helper.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import '../../../../helpers/view_model_helpers/base_view_model_helper.dart';
import '../../view_models/intro_view_model.dart';
import '../sub_views/intro_augmented_view.dart';
import '../sub_views/intro_branches_list_view.dart';
import 'intro_appbar_widget.dart';

class IntroContentWidget extends ViewModelWidget<IntroViewModel> {
  const IntroContentWidget({Key? key,}) : super(key: key,);

  @override
  bool get reactive => true;

  @override
  Widget build(BuildContext context, IntroViewModel viewModel,) {
    return Container(
      width: screenWidth(context,),
      margin: const EdgeInsets.only(bottom: 100.0,),
      decoration: const BoxDecoration(
        boxShadow: [
          BoxShadow(
            color: AppColors.blackShadowColor_2,
            blurStyle: BlurStyle.normal,
            spreadRadius: 1.0,
            blurRadius: 0.0,
          ),
        ],
        color: AppColors.greyBackgroudColor,
        borderRadius: BorderRadius.only(
          bottomLeft: Radius.circular(kcRadius_40,),
          bottomRight: Radius.circular(kcRadius_40,),
        ),
      ),
      child: LoadingAndErrorPronViewModelWidget<IntroViewModel>(
        background: false,
        payloadWidget: PageViewComponent(
          pageViewSettings: PageViewSettings(
            initialPage: viewModel.pageViewSettingsDelegation.getInitialView,
          ),
          children: const [
            SizedBox(child: Center(child: Text('Map Implementation',),),),
            IntroWikitudeAugmentedSubView(),
            SizedBox(child: Center(child: Text('List Implementation',),),),
          ],
          onPageViewComponentCreated: (pageController,) => viewModel.pageViewSettingsDelegation.pageViewController = pageController,
          onPageViewIsChanged: viewModel.pageViewSettingsDelegation.listenToChangeViewEvents,
        ),
      ),
    );
  }
}

class PageViewSettings {
  final int initialPage;
  final bool keepPage;
  final double viewportFraction;
  final List<Object?>? keys;

  PageViewSettings({
    this.initialPage = 0,
    this.keepPage = true,
    this.viewportFraction = 1.0,
    this.keys,
  });
}

class PageViewComponent extends HookWidget with WidgetsBindingObserver{
  final PageViewSettings pageViewSettings;
  final List<Widget> children;
  final void Function(PageController,) onPageViewComponentCreated;
  final Axis scrollDirection;
  final void Function(int,)? onPageViewIsChanged;

  const PageViewComponent({
    required this.pageViewSettings, required this.children,
    required this.onPageViewComponentCreated, this.scrollDirection = Axis.horizontal,
    this.onPageViewIsChanged, Key? key,
  }) : super(key: key,);

  @override
  Widget build(BuildContext context,) {
    final PageController pageController = usePageController(
      initialPage: pageViewSettings.initialPage,
      keepPage: pageViewSettings.keepPage,
      viewportFraction: pageViewSettings.viewportFraction,
      keys: pageViewSettings.keys,
    );

    useEffect(
      (){
        onPageViewComponentCreated(pageController,);
        WidgetsBinding.instance.addObserver(this,);
        return (){
          WidgetsBinding.instance.removeObserver(this,);
        };
      },
      const [],
    );

    useOnAppLifecycleStateChange(
      (previous, current,){
        switch (current) {
          case AppLifecycleState.paused:
            break;
          case AppLifecycleState.resumed:
            break;
          case AppLifecycleState.inactive:
            break;
          case AppLifecycleState.detached:
            break;
          default:
            break;
        }
      },
    );

    return PageView(
      controller: pageController,
      scrollDirection: scrollDirection,
      physics: const NeverScrollableScrollPhysics(),
      onPageChanged: onPageViewIsChanged,
      children: children,
    );
  }
}

class LoadingAndErrorPronViewModelWidget<T extends BaseViewModelHelper> extends ViewModelWidget<T>{
  final Widget payloadWidget;
  final bool background;

  const LoadingAndErrorPronViewModelWidget({
    required this.payloadWidget, required this.background, Key? key,
  }) : super(key: key,);

  @override
  Widget build(BuildContext context, T viewModel,) {
    if(background){
      return Stack(
        children: [
          payloadWidget,
          if(viewModel.isBusy && !viewModel.hasError) const Center(child: CustomLoader(),),
          if(viewModel.hasError) _errorWidget(viewModel.error(viewModel,), viewModel.onRetry,)
        ],
      );
    }
    else{
      return Container(
        child: (viewModel.isBusy)
          ? const Center(
            child: CustomLoader(),
          )
          : (viewModel.hasError)
            ? _errorWidget(viewModel.error(viewModel,), viewModel.onRetry,)
            : payloadWidget,
      );
    }
  }

  Widget _errorWidget(dynamic err, VoidCallback onRetry,) {
    Widget _placeHolderWidget = const NoExtraContentPlaceholderWidget();
    if (err is DioError) {
      if (err.error is SocketException) {
        _placeHolderWidget = ConnectionErrorWidget(
          onRetry: onRetry,
        );
      }
      else if (err.type == DioErrorType.connectTimeout) {
        _placeHolderWidget = const ConnectionTimedOutWidget();
      }
    }
    return _placeHolderWidget;
  }
}

class NoExtraContentPlaceholderWidget extends StatelessWidget {
  final String? message;
  const NoExtraContentPlaceholderWidget({
    Key? key,
    this.message,
  }) : super(key: key,);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: ReadyEdgeInsets.getV14(),
      alignment: Alignment.center,
      child: Stack(
        alignment: Alignment.center,
        children: [
          const GenericSvgWidget(
            path: "assets/svgs/no_extra_results.svg",
          ),
          if (message != null) SizedBox(
            height: screenHeightPercentage(context, percentage: 0.2,),
            child: Align(
              alignment: const Alignment(-.65, -2.5,),
              child: TextWidget(
                text: message ?? "",
                style: TextStyle(
                  fontSize: screenHeightPercentage(context, percentage: 0.015,),
                  fontWeight: FontWeight.w300,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class CustomLoader extends StatelessWidget {
  const CustomLoader({Key? key,}) : super(key: key,);

  @override
  Widget build(BuildContext context,) {
    return Container(
      decoration: BoxDecoration(borderRadius: BorderRadius.circular(10.0,),),
      child: Container(
        height: 75,
        width: 75,
        padding: const EdgeInsets.all(10.0,),
        alignment: Alignment.center,
        child: const LoaderWidget(),
        decoration: BoxDecoration(
          color: AppColors.blackColor.withOpacity(0.15,),
          borderRadius: BorderRadius.circular(10.0,),
        ),
      ),
    );
  }
}

class LoaderWidget extends StatelessWidget {
  final Color? loaderColor;

  const LoaderWidget({Key? key, this.loaderColor}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.center,
      width: 60,
      height: 60,
      child: SpinKitRing(
        color: loaderColor ?? AppColors.graspGreenColor,
        lineWidth: 8,
      ),
    );
  }
}

class RippleLoaderWidget extends StatelessWidget {
  const RippleLoaderWidget({Key? key,}) : super(key: key,);

  @override
  Widget build(BuildContext context,) {
    return Container(
      alignment: Alignment.center,
      width: 60,
      height: 60,
      child: const SpinKitRipple(color: AppColors.redColor_1,),
    );
  }
}

class ConnectionTimedOutWidget extends StatelessWidget {
  const ConnectionTimedOutWidget({Key? key,}) : super(key: key,);

  @override
  Widget build(BuildContext context,) {
    return Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: const [
          Icon(
            Icons.timer_outlined,
            size: 135,
            color: AppColors.grey100Color,
          ),
          TextWidget(
            text: "Connection timed out ....! Tap for retry",
            style: TextStyle(fontSize: 14, fontWeight: FontWeight.w300,),
          ),
        ],
      ),
    );
  }
}

class ConnectionErrorWidget extends StatelessWidget {
  final VoidCallback onRetry;
  const ConnectionErrorWidget({Key? key, required this.onRetry,}) : super(key: key,);

  @override
  Widget build(BuildContext context,) {
    return Center(
      child: InkWell(
        onTap: onRetry,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: const [
            Icon(
              Icons.signal_cellular_connected_no_internet_0_bar_outlined,
              size: 135,
              color: AppColors.grey100Color,
            ),
            TextWidget(
              text: "No connection, please try again ....! Tap for retry",
              style: TextStyle(fontSize: 14, fontWeight: FontWeight.w300,),
            ),
          ],
        ),
      ),
    );
  }
}

class TextWidget extends StatelessWidget {
  final String text;
  final TextStyle? style;
  final TextAlign? textAlign;
  final EdgeInsets? margin;
  final int? maxLines;

  const TextWidget({
    Key? key,
      required this.text,
      this.style,
      this.textAlign,
      this.margin,
      this.maxLines,
  }) : super(key: key,);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: margin ?? ReadyEdgeInsets.getH25V18(),
      child: Text(
        text,
        style: getTextStyle(),
        textAlign: textAlign,
        maxLines: maxLines ?? 3,
        overflow: TextOverflow.ellipsis,
      ),
    );
  }

 TextStyle getTextStyle(){
    if(style != null){
      return style!.copyWith(fontFamily: FrutigerLTArabicFontClass.frutigerLTArabicFontName,);
    }
    return const TextStyle(
      fontSize: 12,
      fontWeight: FontWeight.w700,
      fontFamily: FrutigerLTArabicFontClass.frutigerLTArabicFontName,
    );
  }
}

class FrutigerLTArabicFontClass {
  static const frutigerLTArabicFontName = "FrutigerLTArabic";
}
