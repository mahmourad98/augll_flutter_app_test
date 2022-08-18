import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:stacked/stacked.dart';
import '../models/branches_feature/branch_details_dto.dart';
import '../screens/intro_branch_details_view/view/intro_branch_details_view.dart';
import '../screens/intro_view/views/intro_view.dart';

class Routes {
  static const String introView = '/intro-view';
  static const String introBranchDetailsView = '/intro-branch-details-view';
  static const all = <String>{
    introView,
    introBranchDetailsView,
  };
}

class StackedRouter extends RouterBase {
  @override
  List<RouteDef> get routes => _routes;

  final _routes = <RouteDef>[
    RouteDef(Routes.introView, page: IntroView,),
    RouteDef(Routes.introBranchDetailsView, page: IntroBranchDetailsView,),
  ];

  @override
  Map<Type, StackedRouteFactory> get pagesMap => _pagesMap;
  final _pagesMap = <Type, StackedRouteFactory>{
    IntroView: (data,) {
      return MaterialPageRoute<dynamic>(
        builder: (context,) => const IntroView(),
        settings: data,
      );
    },
    IntroBranchDetailsView: (data,) {
      var args = data.getArgs<IntroBranchDetailsViewArguments>(nullOk: false);
      return PageRouteBuilder<dynamic>(
        pageBuilder: (context, animation, secondaryAnimation,) => IntroBranchDetailsView(
          args.branchDetailsDto,
          key: args.key,
        ),
        settings: data,
        opaque: false,
        transitionsBuilder: TransitionsBuilders.slideBottom,
      );
    },
  };
}

class IntroBranchDetailsViewArguments {
  final BranchDetailsDto branchDetailsDto;
  final Key? key;
  IntroBranchDetailsViewArguments({required this.branchDetailsDto, this.key,});
}

