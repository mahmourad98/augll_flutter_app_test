import 'package:flutter/material.dart';
import 'package:location/location.dart';

import '../../../../app/service_locator.dart';
import '../../../../models/branches_feature/branch_dto.dart';
import '../../../../repos/branches/branches_repo.dart';

class IntroBranchesPointDelegation {
  final _branchesRepo = locator<BranchesRepo>();

  ///Branches
  var branches = <BranchItem>[];

  ///Get a single branch Item by index
  BranchItem branchItem(int index,) => branches[index];

  ///Get branches points for AR camera view and map [getBranchesPoints]
  Future<dynamic> getBranchesPoints(
    LocationData locationData,
    VoidCallback notifyListeners,
    void Function(dynamic,) setErrorCallback,
  ) async{
    return await _branchesRepo.getBranchesPointRequest(
      locationData: locationData,
    ).then(
      (value,) => value.fold(
        (l,) {
          setErrorCallback(l,);
        },
        (r,) {
          branches = r.branchesPointInfo.items;
          notifyListeners();
        },
      ),
    );
  }
}
