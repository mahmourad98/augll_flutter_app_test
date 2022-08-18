import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:stacked/stacked.dart';
import '../../../../helpers/ui_helpers/ui_general_helper.dart';
import '../../../../models/branches_feature/branch_category_dto.dart';
import '../../../intro_view/views/sub_views/view_components/branch_wigdet.dart';
import '../../../intro_view/views/view_components/intro_appbar_widget.dart';
import '../../../intro_view/views/view_components/intro_content_widget.dart';
import '../../view_model/intro_branch_details_view_model.dart';
import '../intro_branch_details_view.dart';

class BranchDetailsUpperSideSection extends StatelessWidget {
  const BranchDetailsUpperSideSection({
    Key? key,
  }) : super(key: key,);

  @override
  Widget build(BuildContext context,) {
    return SizedBox(
      height: screenHeight(context,),
      child: Stack(
        alignment: Alignment.center,
        children: const [
          BrandUpperSideContentWidget(),

          ///The businessLogoWidget will be in the center of width
          ///inherited from the default stack alignment
          ///but the space from bottom will be overridden by using [PositionedDirectional]
          PositionedDirectional(
            bottom: 480,

            ///The bottom is related to the [BranchDetailsUpperSideSection]
            ///bottom, so this high will be have fixed value even with
            ///different screen sizes
            child: BusinessLogoWidget(),
          )
        ],
      ),
    );
  }
}

class BrandUpperSideContentWidget extends ViewModelWidget<IntroBranchDetailsViewModel> {
  const BrandUpperSideContentWidget({
    Key? key,
  }) : super(key: key,);

  @override
  Widget build(BuildContext context, IntroBranchDetailsViewModel viewModel,) {
    return Column(
      mainAxisSize: MainAxisSize.max,
      children: [
        const Spacer(),
        Container(
          width: screenWidth(context,),
          decoration: const BoxDecoration(
            borderRadius: BorderRadius.only(
              topLeft: Radius.circular(42,),
              topRight: Radius.circular(42,),
            ),
            color: AppColors.whiteColor,
          ),
          child: Column(children: [
            verticalSpaceUpperLarge,
            const GenericSvgWidget(path: "assets/svgs/Group 1875.svg",),
            const IconButtonWidget(
              noBackground: true,
              icon: Icon(
                Icons.favorite,
                color: AppColors.transparentColor,
              ),
            ),
            TextWidget(
              text: _getFullBusinessName(viewModel,),
              maxLines: 1,
              style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold,),
            ),
            verticalSpaceRegular,
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                BranchCategoryNameWithIconWidget(
                  category: BranchesCategory.fromJson(viewModel.branchDetailsDto.category!.toJson(),),
                  size: 14,
                ),
                horizontalSpaceSmall,
                const BarSeparatorWidget(),
                horizontalSpaceSmall,
                TextWidget(
                    margin: EdgeInsets.zero,
                    text:
                        ("${viewModel.branchDetailsDto.coordinate?.distancePerKm?.toStringAsFixed(0)}"
                            " Km"),
                    style: const TextStyle(
                        color: AppColors.blueColor_1,
                        fontSize: 16,
                        fontWeight: FontWeight.bold)),
                // horizontalSpaceSmall,
                // const BarSeperatorWidget(),
                // horizontalSpaceSmall,
                // TextWidget(
                //   margin: EdgeInsets.zero,
                //   text: ("13420 Views"),
                //   style: TextStyle(
                //     color: AppColors.grey200Color.withOpacity(.6),
                //     fontSize: 16,
                //   ),
                // )
              ],
            ),
            verticalSpaceUpperMedium,
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                if (_showPhoneIcon(viewModel))
                  CircularIconButtonWidget(
                    onTap: viewModel.lunchMobileNumber,
                    size: 65,
                    backgroundColor: AppColors.blueColor_1,
                    shadow: const BoxShadow(),
                    icon: const Icon(
                      Icons.call,
                      color: AppColors.whiteColor,
                    ),
                    text: "Call",
                  ),
                if (_showDownloadCatalog(viewModel))
                  CircularIconButtonWidget(
                    onTap: viewModel.downloadBranchCatalog,
                    size: 65,
                    backgroundColor: AppColors.orangeColor,
                    shadow: const BoxShadow(),
                    icon: const Icon(
                      Icons.content_copy_outlined,
                      color: AppColors.whiteColor,
                    ),
                    text: "Catalog",
                  ),
                CircularIconButtonWidget(
                  onTap: viewModel.lunchMaps,
                  size: 65,
                  backgroundColor: AppColors.mainGreenLightColor,
                  shadow: const BoxShadow(),
                  icon: const Icon(
                    Icons.directions,
                    color: AppColors.whiteColor,
                  ),
                  text: "Directions",
                ),
              ],
            ),
            verticalSpaceMedium,
          ]),
        )
      ],
    );
  }

  bool _showPhoneIcon(IntroBranchDetailsViewModel viewModel,) {
    return viewModel.branchDetailsDto.contactNumber?.isNotEmpty ?? false;
  }

  bool _showDownloadCatalog(IntroBranchDetailsViewModel viewModel,) {
    return viewModel.branchDetailsDto.branchCatalogUrl?.isNotEmpty ?? false;
  }

  String _getFullBusinessName(IntroBranchDetailsViewModel viewModel,) => (viewModel.branchDetailsDto.branchName?.isEmpty ?? true)
      ? viewModel.branchDetailsDto.businessName.stringProtection()
      : viewModel.branchDetailsDto.businessName.stringProtection() + " ( ${viewModel.branchDetailsDto.branchName.stringProtection()} )";
}

class BusinessLogoWidget extends ViewModelWidget<IntroBranchDetailsViewModel> {
  const BusinessLogoWidget({
    Key? key,
  }) : super(key: key,);

  @override
  Widget build(BuildContext context, IntroBranchDetailsViewModel viewModel,) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      mainAxisSize: MainAxisSize.max,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              width: 130,
              height: 130,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: AppColors.greyBackgroudColor,
                image: DecorationImage(
                  image: CachedNetworkImageProvider(
                    viewModel.branchDetailsDto.businessLogoUrl ?? "",
                  ),
                ),
              ),
            ),
          ],
        ),
        ///Logo position
      ],
    );
  }
}

class BarSeparatorWidget extends StatelessWidget {
  const BarSeparatorWidget({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 14,
      width: 1,
      color: AppColors.grey100Color,
    );
  }
}
