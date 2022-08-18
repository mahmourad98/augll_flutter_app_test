import 'package:augll_project/screens/intro_view/views/sub_views/view_components/branch_categories_list_wigdet.dart';
import 'package:augll_project/screens/intro_view/views/sub_views/view_components/branch_wigdet.dart';
import 'package:augll_project/screens/intro_view/views/sub_views/view_components/last_update_widget.dart';
import 'package:flutter/material.dart';
import 'package:stacked/stacked.dart';
import '../../../../helpers/ui_helpers/ui_general_helper.dart';
import '../../../../models/branches_feature/branch_dto.dart';
import '../../view_models/intro_view_model.dart';
import '../view_components/intro_content_widget.dart';

class IntroBranchesListSubView extends ViewModelWidget<IntroViewModel> {
  const IntroBranchesListSubView({Key? key,}) : super(key: key,);

  @override
  Widget build(BuildContext context, IntroViewModel viewModel,) {
    return RefreshIndicator(
      displacement: 120,
      color: AppColors.graspGreenColor.withOpacity(0.7,),
      onRefresh: () => viewModel.resetFromBeginning(),
      child: CustomScrollView(
        controller: viewModel.paginationBranches.scrollController,
        slivers: [
          SliverFixedExtentList(
            delegate: SliverChildListDelegate(
              [
                verticalSpaceMedium,
                BranchCategoriesWidget(
                  onTap: viewModel.onCategorySelected,
                  selectedItems: [
                    ...viewModel.branchesDelegation.selectedCategoriesAsList,
                  ],
                  categoryDtoList: [
                    ...viewModel.categoriesDelegation.branchesCategoriesDto.branchesCategories,
                  ],
                ),
              ],
            ),
            itemExtent: 128,
          ),
          SliverList(
            delegate: SliverChildBuilderDelegate(
              (context, index,){
                return BranchWidget(
                  onTap: (){
                    viewModel.branchDetailsDelegation.getBranchDetailsAndNavigateTo(
                      _getItem(viewModel, index,).id.toString(),
                      locationData: viewModel.locationData,
                    );
                  },
                  items: _getItem(viewModel, index,),
                );
              },
              childCount: _dataLength(viewModel,),
            ),
          ),
          if (_isNotEmptyBranches(viewModel,)) SliverFixedExtentList(
            delegate: SliverChildListDelegate(
              [
                ///Bottom to branches list fixed components
                LastUpdateWidget(
                  lastUpdate: viewModel.branchesDelegation.lastUpdate,
                ),
              ],
            ),
            itemExtent: 40,
          ),
          if (viewModel.paginationBranches.isLastPage) SliverFixedExtentList(
            delegate: SliverChildListDelegate(
              [
                ///Bottom to branches list fixed components
                NoExtraContentPlaceholderWidget(
                  message: _placeHolderMessage(viewModel,),
                ),
              ]
            ),
            itemExtent: _placeholderSize(viewModel,),
          ),
        ],
      ),
    );
  }

  String? _placeHolderMessage(IntroViewModel viewModel,) {
    return _isNotEmptyBranches(viewModel,) ? "No more results ..." : null;
  }

  double _placeholderSize(IntroViewModel viewModel,) => _isNotEmptyBranches(viewModel,) ? 120 : 300;

  bool _isNotEmptyBranches(IntroViewModel viewModel,) => viewModel.branchesDelegation.branches.isNotEmpty;

  int _dataLength(IntroViewModel viewModel,) => viewModel.branchesDelegation.branches.length;

  BranchItem _getItem(IntroViewModel viewModel, int index,) => viewModel.branchesDelegation.branchItem(index,);
}
