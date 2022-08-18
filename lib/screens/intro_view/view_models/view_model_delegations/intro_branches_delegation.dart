import 'package:flutter/material.dart';
import 'package:location/location.dart';
import '../../../../app/service_locator.dart';
import '../../../../models/branches_feature/branch_dto.dart';
import '../../../../repos/branches/branches_repo.dart';
import '../../../../utils/app_level/futures_utils.dart';

class IntroBranchesDelegation {
  final _branchesRepo = locator<BranchesRepo>();

  ///Branches
  var branches = <BranchItem>[];

  BranchItem branchItem(int index,) => branches[index];

  ///Get paginated data [GetPagingData]
  Future<List<BranchItem>> getPaginatedData(
    int pageIndex,
    int pageSize,
    bool firstTime,
    Future<List<BranchItem>> Function(Future<List<BranchItem>>,) runBusyFuture,
    void Function(dynamic,) setErrorCallback,
    {LocationData? locationData,}
  ) async{
    if(firstTime){
      return await runBusyFuture(
        _branchesRepo.paginatedBranchesRequest(
          pageIndex,
          pageSize,
          searchText,
          locationData: locationData,
          selectedCategories: selectedCategories,
        ).then(
          (value,) => value.fold(
            (l,) {
              setErrorCallback(l,);
              return <BranchItem>[];
            },
            (r,) => r,
          )
        ),
      );
    }
    else{
      return await FuturesUtils.runGenericBusyFutureAsFuture<List<BranchItem>>(
        () => _branchesRepo.paginatedBranchesRequest(
          pageIndex,
          pageSize,
          searchText,
          locationData: locationData,
          selectedCategories: selectedCategories,
        ).then(
          (value,) => value.fold(
            (l,) {
              setErrorCallback(l,);
              return <BranchItem>[];
            },
            (r,) => r,
          ),
        ),
      );
    }
  }

  void successGetBranches(
    List<BranchItem> items,
    VoidCallback notifyListeners,
    bool isFirstTime,
  ) {
    branches = items;
    if (!(isFirstTime)) notifyListeners();
  }

  ///Search Text
  String? searchText;
  void resetSearchText() => searchText = null;

  ///LastUpdate
  var lastUpdate = DateTime.now();

  void resetLastUpdate(VoidCallback notifyListeners,) {
    lastUpdate = DateTime.now();
    notifyListeners();
  }

  ///Selected categories
  Map<String, String> selectedCategories = {};
  List<int> get selectedCategoriesAsList =>
      selectedCategories.values.map((e,) => int.parse(e,),).toList();

  void resetSelectedCategories() => selectedCategories.clear();
}
