import 'package:augll_project/screens/intro_view/views/sub_views/view_components/branch_wigdet.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_svg/svg.dart';
import '../../../../../helpers/ui_helpers/ui_general_helper.dart';
import '../../../../../models/branches_feature/branch_category_dto.dart';

class CategoryItemWidget extends HookWidget {
  final BranchesCategory categoryDto;
  final void Function(int,) onTap;
  final List<int> selectedItems;
  const CategoryItemWidget({
    Key? key,
    required this.categoryDto,
    required this.onTap,
    required this.selectedItems,
  }) : super(key: key,);

  @override
  Widget build(BuildContext context,) {
    final isSelected = useState<bool>(selectedItems.contains(categoryDto.id,),);
    return GestureDetector(
      onTap: () {
        ///Send Selected id.
        onTap(categoryDto.id.protectWith(0,),);

        ///Update UI
        isSelected.value = !isSelected.value;
      },
      child: Container(
        child: _getProperIconWidget(isSelected,),
        margin: ReadyEdgeInsets.getHR14(),
        padding: ReadyEdgeInsets.getH25V18(),
        width: 75,
        height: 75,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          border: Border.all(color: _getProperColor(), width: 2,),
          color: isSelected.value
              ? _getProperColor()
              : AppColors.greyBackgroudColor,
        ),
      ),
    );
  }

  Widget _getProperIconWidget(
    ValueNotifier<bool> isSelected,
    {BoxFit fit = BoxFit.contain,}
  ){
    final _iconUrl = categoryDto.iconUrl.protectWith<String>("",);
    if (_iconUrl.endsWith("svg",)) {
      return SvgPicture.network(
        _iconUrl,
        fit: fit,
        color: isSelected.value ? AppColors.whiteColor : _getProperColor(),
      );
    }
    else {
      return Image.network(
        _iconUrl,
        fit: fit,
        color: isSelected.value ? AppColors.whiteColor : _getProperColor(),
      );
    }
  }

  Color _getProperColor() => categoryDto.fillColor.colorProtection().toColor();
}
