

import '../../../../app/service_locator.dart';
import '../../../../models/branches_feature/branch_category_dto.dart';
import '../../../../repos/branches/branches_repo.dart';

class IntroCategoriesDelegation {
  final _branchesRepo = locator<BranchesRepo>();

  ///
  BranchesCategoriesDto branchesCategoriesDto = BranchesCategoriesDto(branchesCategories: [],);

  ///

  Future getCategoriesOfBranches(void Function(dynamic,) setError,) async {
    final _result = await _branchesRepo.getCategoriesOfBranchesRequest();
    _result.fold((l,) => setError(l,), _successGetCategories,);
  }

  void _successGetCategories(BranchesCategoriesDto categoriesDto,) {
    branchesCategoriesDto = categoriesDto;
  }

  ///Categories filter : #84284
  Map<String, String> getSelectedCategoriesFromListToParamsMap(
    List<int> listOfSelectedCategories,
  ) {
    Map<String, String> selectedCategories = {};
    for (int element in listOfSelectedCategories) {
      selectedCategories.putIfAbsent(
        ParamsConstants.category, () => element.toString(),
      );
    }
    return selectedCategories;
  }
}
