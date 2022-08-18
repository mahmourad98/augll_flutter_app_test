import 'package:flutter/material.dart';
import 'package:stacked_services/stacked_services.dart';
import '../../app/service_locator.dart';

class PopViewsUsingScrollControllerUtil {
  late final ScrollController scrollController;

  PopViewsUsingScrollControllerUtil() : scrollController = ScrollController();

  ///Public procedures
  void initialize([VoidCallback? onTap,]) {
    scrollController.addListener(
      () {
        _popManipulationLogic(onTap,);
      },
    );
  }

  void _popManipulationLogic(VoidCallback? onTap,) {
    final _scrollPositionIsOutOfRange = scrollController.position.extentAfter > 450;
    if (_scrollPositionIsOutOfRange) {
      onTap ?? locator<NavigationService>().back();
    }
  }
}
