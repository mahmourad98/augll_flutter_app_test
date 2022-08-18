import 'package:augll_project/screens/intro_view/views/view_components/intro_appbar_widget.dart';
import 'package:augll_project/screens/intro_view/views/view_components/intro_content_widget.dart';
import 'package:augll_project/screens/intro_view/views/view_components/intro_navbar_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:stacked/stacked.dart';
import '../../../../app/app.logger.dart';
import '../../../helpers/ui_helpers/ui_general_helper.dart';
import '../view_models/intro_view_model.dart';

class IntroView extends HookWidget {
  final String _className = "IntroView";
  const IntroView({Key? key,}) : super(key: key,);

  @override
  Widget build(BuildContext context,) {
    return ViewModelBuilder<IntroViewModel>.nonReactive(
      onModelReady: (viewModel,) => viewModel.onModelReady(),
      viewModelBuilder: () => IntroViewModel(),
      builder: (context, viewModel, child,) => GeneralScaffoldNoAppbarWidget(
        safeArea: true,
        child: () => Stack(
          children: const [
            IntroViewNavbarWidget(),
            IntroContentWidget(),
            IntroAppbarViewModelWidget(),
          ],
        ),
      ),
    );
  }
}

class GeneralScaffoldNoAppbarWidget extends HookWidget {
  final Widget Function() child;
  final bool? safeArea;
  final Color? backgroundColor;

  const GeneralScaffoldNoAppbarWidget({
    required this.child, this.backgroundColor, this.safeArea, Key? key,
  }) : super(key: key,);

  @override
  Widget build(BuildContext context,) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      backgroundColor: backgroundColor ?? AppColors.whiteColor,
      body: (safeArea ?? true) ? SafeArea(child: child(),) : child(),
    );
  }
}