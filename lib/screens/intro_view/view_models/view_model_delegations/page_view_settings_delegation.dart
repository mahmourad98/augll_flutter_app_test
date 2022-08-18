import 'package:flutter/material.dart';
import '../../views/view_components/intro_navbar_widget.dart';
import '../intro_view_model.dart';

class PageViewSettingsDelegation {
  //todo : Generic is required here
  final IntroViewModel _viewModel;

  PageViewSettingsDelegation(this._viewModel,) {
    _setInitialView();
  }

  PageController pageViewController = PageController();

  void changePageView(int pageViewIndex,) async{
    if(this._viewModel.currentIndex == IntroViewsEnum.cameraView.indexOfView){
      if (!(await this._viewModel.runBusyFuture(this._viewModel.wikitudePoiDelegation.canArGoBack,))) {
        await this._viewModel.runBusyFuture(
          this._viewModel.wikitudePoiDelegation.architectWidget.pause(),
          busyObject: this._viewModel.wikitudePoiDelegation,
        );
      }
    }

    ///change the page view content
    pageViewController.jumpToPage(pageViewIndex,);
    // pageViewController.animateToPage(
    //   pageViewIndex, duration: Duration.zero, curve: Curves.ease,
    // );

    if(pageViewIndex == IntroViewsEnum.cameraView.indexOfView){
      await this._viewModel.runBusyFuture(
        this._viewModel.wikitudePoiDelegation.architectWidget.resume(),
        busyObject: this._viewModel.wikitudePoiDelegation,
      );
    }

    ///Update index
    this._viewModel.setIndex(pageViewIndex,);
  }

  void listenToChangeViewEvents(int page,) => _viewModel.setIndex(page,);

  void _setInitialView() => _viewModel.setIndex(IntroViewsEnum.cameraView.indexOfView,);

  int get getInitialView => _viewModel.currentIndex;
}
