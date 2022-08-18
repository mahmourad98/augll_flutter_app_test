import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:stacked/stacked.dart';
import '../../../../helpers/ui_helpers/assets_paths_helper.dart';
import '../../../../helpers/ui_helpers/ui_general_helper.dart';
import '../../view_models/intro_view_model.dart';
import 'package:validators/validators.dart';
import 'package:cached_network_image/cached_network_image.dart';

class IntroAppbarViewModelWidget extends ViewModelWidget<IntroViewModel> {
  const IntroAppbarViewModelWidget({Key? key,}) : super(key: key,);

  @override
  Widget build(BuildContext context, IntroViewModel viewModel,) {
    return IntroAppbarWidget(
      ignoreSearch: true,
      onSearchTapped: (stringValue,){},
      onImageTapped: (){},
    );
  }
}

class IntroAppbarWidget extends StatelessWidget {
  final VoidCallback? onImageTapped;
  final VoidCallback? onFilterTapped;
  final void Function(String,)? onSearchTapped;
  final bool ignoreSearch;
  const IntroAppbarWidget({
    Key? key,
    this.onImageTapped,
    this.onFilterTapped,
    this.onSearchTapped,
    required this.ignoreSearch,
  }) : super(key: key,);

  @override
  Widget build(BuildContext context,) {
    return Container(
      decoration: BoxDecoration(color: AppColors.greyBackgroudColor.withOpacity(0.80,),),
      child: ClipRect(
        child: BackdropFilter(
          child: Container(
            height: 100,
            width: screenWidth(context,),
            margin: EdgeInsets.zero.copyWith(top: MediaQuery.of(context,).viewPadding.top),
            padding: ReadyEdgeInsets.getHR14(),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Expanded(
                  child: Container(
                    height: screenHeightPercentage(context, percentage: 0.06,),
                    margin: ReadyEdgeInsets.getH25V18().copyWith(right: 14,),
                    width: screenWidth(context,),
                    decoration: BoxDecoration(
                      color: AppColors.transparentColor,
                      border: Border.all(color: AppColors.greyColor,),
                      borderRadius: BorderRadius.circular(kcRadius_30,),
                    ),
                    alignment: Alignment.center,
                    child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Flexible(
                            flex: 4,
                            child: IgnorePointer(
                              ignoring: ignoreSearch,
                              child: Container(
                                alignment: Alignment.center,
                                padding: ReadyEdgeInsets.getHL14(),
                                child: TextField(
                                  textInputAction: TextInputAction.search,
                                  onSubmitted: onSearchTapped,
                                  decoration: const InputDecoration.collapsed(
                                    hintText: "Search ...",
                                    hintStyle: TextStyle(
                                      color: AppColors.blackShadowColor,
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          const Flexible(
                              flex: 1,
                              child: GenericSvgWidget(
                                path: "assets/svgs/search.svg",
                                color: AppColors.greyColor,
                              )),
                          Expanded(
                              flex: 1,
                              child: GestureDetector(
                                onTap: onFilterTapped,
                                child: Container(
                                  height: screenHeight(context),
                                  child: GenericSvgWidget(
                                    path: "assets/svgs/sort.svg",
                                    padding: ReadyEdgeInsets.getIconPadding(),
                                  ),
                                  decoration: BoxDecoration(
                                      color: AppColors.graspGreenColor,
                                      border: Border.all(
                                          width: 1,
                                          color: AppColors.graspGreenColor),
                                      borderRadius: const BorderRadius.only(
                                          topRight:
                                              Radius.circular(kcRadius_30),
                                          bottomRight:
                                              Radius.circular(kcRadius_30))),
                                ),
                              ))
                        ]),
                  ),
                ),
                GestureDetector(
                  onTap: onImageTapped,
                  child: Container(
                    padding: const EdgeInsets.all(2.5),
                    decoration: const BoxDecoration(
                      color: AppColors.whiteColor,
                      shape: BoxShape.circle,
                      boxShadow: [
                        BoxShadow(
                            color: AppColors.blackShadowColor,
                            spreadRadius: 2,
                            blurRadius: 18)
                      ],
                    ),
                    child: const CircularImageWidget(),
                  ),
                ),
              ],
            ),
          ),
          filter: ImageFilter.blur(sigmaX: 8, sigmaY: 8),
        ),
      ),
    );
  }
}

class CircularImageWidget extends StatelessWidget {
  final String? networkImage;
  final String? assetImage;
  final double size;

  const CircularImageWidget({
    Key? key,
    this.networkImage,
    this.assetImage,
    this.size = 65,
  }) : super(key: key,);

  @override
  Widget build(BuildContext context,) {
    return Container(
      width: size,
      height: size,
      alignment: Alignment.center,
      padding: ReadyEdgeInsets.getTinyPadding(),
      decoration: BoxDecoration(
        image: _getDecorationImage(),
        shape: BoxShape.circle,
        color: AppColors.whiteColor,
      ),
    );
  }

  DecorationImage _getDecorationImage() {
    ImageProvider _defaultImageProvider = const AssetImage(AssetsPathHelper.circularPlaceholder,);
    if (assetImage != null) {
      _defaultImageProvider = AssetImage(assetImage!,);
    } else if (networkImage != null) {
      _defaultImageProvider = CachedNetworkImageProvider(assetImage!,);
    }

    return DecorationImage(fit: BoxFit.cover, image: _defaultImageProvider);
  }
}

class GenericSvgWidget extends StatelessWidget {
  final String path;
  final VoidCallback? onTap;
  final String? semanticLabel;
  final Color? color;
  final EdgeInsets? padding;
  final EdgeInsets? margin;
  final double? size;

  const GenericSvgWidget({
    Key? key,
    required this.path,
    this.onTap,
    this.semanticLabel,
    this.color,
    this.padding,
    this.margin,
    this.size,
  }) : super(key: key,);

  @override
  Widget build(BuildContext context,) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(50,),
      child: Container(
        width: size,
        height: size,
        padding: padding,
        margin: margin,
        child: _getProperSvgWidget(),
      ),
    );
  }

  Widget _getProperSvgWidget(){
    return isURL(path,)
    ? SvgNetworkWidget(path: path, semanticLabel: semanticLabel, color: color,)
    : SvgAssetWidget(path: path, semanticLabel: semanticLabel, color: color,);
  }
}

class SvgAssetWidget extends StatelessWidget {
  const SvgAssetWidget({
    Key? key,
    required this.path,
    required this.semanticLabel,
    required this.color,
  }) : super(key: key,);

  final String path;
  final String? semanticLabel;
  final Color? color;

  @override
  Widget build(BuildContext context,) {
    return SvgPicture.asset(
      path,
      semanticsLabel: semanticLabel,
      color: color,
    );
  }
}

class SvgNetworkWidget extends StatelessWidget {
  const SvgNetworkWidget({
    Key? key,
    required this.path,
    required this.semanticLabel,
    required this.color,
  }) : super(key: key,);

  final String path;
  final String? semanticLabel;
  final Color? color;

  @override
  Widget build(BuildContext context,) {
    return SvgPicture.network(
      path,
      semanticsLabel: semanticLabel,
      color: color,
    );
  }
}
