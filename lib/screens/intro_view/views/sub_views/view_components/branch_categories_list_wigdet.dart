import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import '../../../../../helpers/ui_helpers/ui_general_helper.dart';
import '../../../../../models/branches_feature/branch_category_dto.dart';
import 'category_item_widget.dart';

class BranchCategoriesWidget extends HookWidget {
  final Function(List<int>) onTap;
  final List<BranchesCategory> categoryDtoList;
  final List<int> selectedItems;
  const BranchCategoriesWidget({
    required this.onTap,
    required this.categoryDtoList,
    this.selectedItems = const [],
    Key? key,
  }) : super(key: key,);

  @override
  Widget build(BuildContext context,) {
    final _selectedItems = useState<List<int>>(selectedItems,);
    final _categoriesList = useRef<List<BranchesCategory>>(categoryDtoList,);

    return Container(
      alignment: Alignment.center,
      width: screenWidth(context),
      margin: ReadyEdgeInsets.getHL14(),
      child: SingleChildScrollView(
        scrollDirection: Axis.horizontal,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: _categoriesList.value.map(
            (category,) {
              return CategoryItemWidget(
                categoryDto: category,
                onTap: (selected,) {
                  ///Add or remove selected category item
                  if (_selectedItems.value.contains(selected,)) {
                    _selectedItems.value.remove(selected,);
                  }
                  else {
                    _selectedItems.value.add(selected,);
                  }
                    ///Call onTap with selected categories ids
                    onTap(_selectedItems.value,);
                  },
                  selectedItems: _selectedItems.value,
              );
            }
          ).toList(),
        ),
      ),
    );
  }
}
