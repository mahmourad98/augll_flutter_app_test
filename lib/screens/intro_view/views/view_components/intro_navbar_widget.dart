import 'package:flutter/material.dart';
import 'package:stacked/stacked.dart';
import '../../../../helpers/ui_helpers/ui_general_helper.dart';
import '../../view_models/intro_view_model.dart';
import 'intro_appbar_widget.dart';

class IntroViewNavbarWidget extends ViewModelWidget<IntroViewModel> {
  const IntroViewNavbarWidget({Key? key,}) : super(key: key,);

  @override
  Widget build(BuildContext context, IntroViewModel viewModel,) {
    return Container(
      decoration: const BoxDecoration(color: AppColors.whiteColor,),
      height: screenHeight(context,),
      width: screenWidth(context,),
      child: Column(
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          const Spacer(),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [
              GenericSvgWidget(
                onTap: () => viewModel.pageViewSettingsDelegation.changePageView(
                  IntroViewsEnum.mapView.indexOfView,
                ),
                path: "assets/svgs/map.svg",
                padding: ReadyEdgeInsets.getH14V10(),
                color: _isSelectedButton(viewModel, IntroViewsEnum.mapView.indexOfView,),
              ),
              GenericSvgWidget(
                onTap: () => viewModel.pageViewSettingsDelegation.changePageView(
                  IntroViewsEnum.cameraView.indexOfView,
                ),
                path: "assets/svgs/camera.svg",
                padding: ReadyEdgeInsets.getH14V10(),
                color: _isSelectedButton(viewModel, IntroViewsEnum.cameraView.indexOfView,),
              ),
              GenericSvgWidget(
                onTap: () => viewModel.pageViewSettingsDelegation.changePageView(
                  IntroViewsEnum.listView.indexOfView,
                ),
                path: "assets/svgs/list.svg",
                padding: ReadyEdgeInsets.getH14V10(),
                color: _isSelectedButton(viewModel, IntroViewsEnum.listView.indexOfView,),
              ),
            ],
          ),
          verticalSpaceMedium,
        ],
      ),
    );
  }

  Color? _isSelectedButton(IntroViewModel viewModel, int index,) {
    return (viewModel.isIndexSelected(index,))
        ? AppColors.graspGreenColor
        : AppColors.grey200Color;
  }
}

enum IntroViewsEnum {
  mapView(0,),
  cameraView(1,),
  listView(2,);

  final int indexOfView;
  const IntroViewsEnum(this.indexOfView,);
}
