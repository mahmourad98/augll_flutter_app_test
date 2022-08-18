import 'package:augll_project/screens/intro_branch_details_view/view/sub_views/branch_details_middle_side_section.dart';
import 'package:augll_project/screens/intro_branch_details_view/view/sub_views/branch_details_upper_side_section.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:stacked/stacked.dart';
import '../../../helpers/ui_helpers/ui_general_helper.dart';
import '../../../models/branches_feature/branch_details_dto.dart';
import '../../../utils/app_level/pop_views_using_scroll_controller.dart';
import '../../intro_view/views/intro_view.dart';
import '../../intro_view/views/view_components/intro_content_widget.dart';
import '../view_model/intro_branch_details_view_model.dart';

class IntroBranchDetailsView extends HookWidget {
  final BranchDetailsDto branchDetailsDto;

  const IntroBranchDetailsView(this.branchDetailsDto, {Key? key})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    ///References
    final _popUsingControllerUtil = useRef<PopViewsUsingScrollControllerUtil>(
      PopViewsUsingScrollControllerUtil(),
    );

    ///Initiations
    useEffect(
      () {
        _popUsingControllerUtil.value.initialize();
        return (){};
      },
      const [],
    );

    ///
    return ViewModelBuilder<IntroBranchDetailsViewModel>.nonReactive(
      viewModelBuilder: () => IntroBranchDetailsViewModel(branchDetailsDto,),
      builder: (_, viewModel, __) => GeneralScaffoldNoAppbarWidget(
        backgroundColor: AppColors.transparentColor,
        safeArea: false,
        child: () => Container(
          decoration: BoxDecoration(color: AppColors.blackColor.withOpacity(0.2,),),
          child: ListView(
            controller: _popUsingControllerUtil.value.scrollController,
            physics: const BouncingScrollPhysics(),
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  IconButtonWidget(
                    onTap: viewModel.onClose,
                  ),
                ],
              ),

              ///The first and main widget, take's .6 form parent screen size
              const BranchDetailsUpperSideSection(),
              const BranchDetailsInfoBottomWidget(),
            ],
          ),
        ),
      ),
    );
  }
}

class IconButtonWidget extends StatelessWidget {
  final VoidCallback? onTap;
  final Widget? icon;
  final bool noBackground;

  const IconButtonWidget({
    Key? key,
    this.onTap,
    this.icon,
    this.noBackground = false,
  }) : super(key: key,);

  @override
  Widget build(BuildContext context,) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        margin: ReadyEdgeInsets.getH14(),
        width: 50,
        height: 50,
        decoration: (noBackground)
            ? null
            : BoxDecoration(
              borderRadius: BorderRadius.circular(15,),
              boxShadow: [
                BoxShadow(
                  color: AppColors.blackColor.withOpacity(0.3,),
                  spreadRadius: 1,
                  blurRadius: 16,
                ),
              ],
              color: AppColors.whiteColor,
            ),
        child: icon ?? const Icon(Icons.arrow_back,),
      ),
    );
  }
}

class CircularIconButtonWidget extends StatelessWidget {
  final VoidCallback? onTap;
  final Widget? icon;
  final Color? backgroundColor;
  final double? size;
  final BoxShadow? shadow;
  final String? text;

  const CircularIconButtonWidget({
    Key? key,
    this.onTap,
    this.icon,
    this.backgroundColor,
    this.size,
    this.shadow,
    this.text,
  }) : super(key: key,);

  @override
  Widget build(BuildContext context,) {
    final _iconSize = size ?? 50;
    return GestureDetector(
      onTap: onTap,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Container(
            margin: ReadyEdgeInsets.getH14(),
            width: _iconSize,
            height: _iconSize,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              boxShadow: [
                shadow ?? BoxShadow(
                  color: AppColors.blackColor.withOpacity(.3),
                  spreadRadius: 1,
                  blurRadius: 16,
                ),
              ],
                color: backgroundColor ?? AppColors.whiteColor,
            ),
            child: icon ?? const Icon(Icons.arrow_back,),
          ),
          verticalSpaceMedium,
          if (text != null) TextWidget(
            text: text ?? "",
            margin: EdgeInsets.zero,
            style: const TextStyle(
              fontWeight: FontWeight.bold,
            ),
          ),
        ],
      ),
    );
  }
}
