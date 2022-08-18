import 'package:dartz/dartz.dart';
import 'package:flutter/material.dart';
import 'package:stacked/stacked.dart';
import '../../../../helpers/ui_helpers/ui_general_helper.dart';
import '../../../../models/branches_feature/branch_details_dto.dart';
import '../../../intro_view/views/view_components/intro_content_widget.dart';
import '../../view_model/intro_branch_details_view_model.dart';

class BranchDetailsInfoBottomWidget extends ViewModelWidget<IntroBranchDetailsViewModel> {
  const BranchDetailsInfoBottomWidget({
    Key? key,
  }) : super(key: key,);

  @override
  Widget build(BuildContext context, IntroBranchDetailsViewModel viewModel,) {
    return Container(
      decoration: const BoxDecoration(
        borderRadius: BorderRadius.only(
          bottomLeft: Radius.circular(42,),
          bottomRight: Radius.circular(42,),
        ),
        color: AppColors.whiteColor,
      ),
      width: screenWidth(context,),
      child: Column(children: [
        KeyValueInfoWidget(
          isDark: true,
          title: "Address:",
          text: viewModel.branchDetailsDto.address,
        ),
        OperationHoursDetailsWidget(
          title: "Hours:",
          operationalTimes: _listOfOperationalTimes(viewModel),
          indexWhereToShowTitle: _inAnyIndexTheTitleMustBeShown(viewModel),
          isEvenColoring: true,
        ),
        KeyValueInfoWidget(
          onTap: viewModel.viewWebSite,
          isDark: _listOfOperationalTimes(viewModel).length.isOdd,
          title: "Website:",
          text: viewModel.branchDetailsDto.website,
          textStyle: const TextStyle(
              decoration: TextDecoration.underline,
              color: AppColors.blueColor_1),
        ),
      ]),
    );
  }

  int _inAnyIndexTheTitleMustBeShown(IntroBranchDetailsViewModel viewModel) {
    if (_listOfOperationalTimes(viewModel)
        .any((element) => element.value2?.isOn ?? false)) {
      return _listOfOperationalTimes(viewModel).indexOf(
          _listOfOperationalTimes(viewModel)
              .firstWhere((element) => element.value2?.isOn ?? false));
    } else {
      return 0;
    }
  }

  List<Tuple2<String, BranchDetailsDtoOperationalTime?>>
      _listOfOperationalTimes(IntroBranchDetailsViewModel viewModel) {
    return [
      Tuple2(
        "Mon",
        viewModel.branchDetailsDto.mondayOperationalTime,
      ),
      Tuple2(
        "Tus",
        viewModel.branchDetailsDto.tuesdayOperationalTime,
      ),
      Tuple2(
        "Wen",
        viewModel.branchDetailsDto.wednesdayOperationalTime,
      ),
      Tuple2(
        "Th",
        viewModel.branchDetailsDto.thursdayOperationalTime,
      ),
      Tuple2(
        "Fry",
        viewModel.branchDetailsDto.fridayOperationalTime,
      ),
      Tuple2(
        "Sat",
        viewModel.branchDetailsDto.saturdayOperationalTime,
      ),
      Tuple2(
        "Sun",
        viewModel.branchDetailsDto.sundayOperationalTime,
      ),
    ];
  }
}

class OperationHoursDetailsWidget extends StatelessWidget {
  final String title;
  final List<Tuple2<String, BranchDetailsDtoOperationalTime?>> operationalTimes;
  final bool isEvenColoring;
  final int indexWhereToShowTitle;

  const OperationHoursDetailsWidget({
    Key? key,
    required this.operationalTimes,
    required this.title,
    required this.isEvenColoring,
    required this.indexWhereToShowTitle,
  }) : super(key: key,);

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      physics: const NeverScrollableScrollPhysics(),
      itemCount: operationalTimes.length,
      shrinkWrap: true,
      itemBuilder: (context, index,){
        return (_branchIsOn(index,))
          ? Container(
            width: screenWidth(context,),
            color: (_coloringMechanism(index,))
                ? AppColors.grey200Color.withOpacity(.15)
                : AppColors.whiteColor,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                horizontalSpaceLarge,
                Flexible(
                  child: TextWidget(
                    text: title,
                    style: TextStyle(
                      color: (indexWhereToShowTitle == index)
                          ? AppColors.grey
                          : AppColors.transparentColor,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                ),
                Flexible(
                  flex: 2,
                  child: Row(
                    children: [
                      TextWidget(
                        text: operationalTimes[index].value1 + " : " + "${operationalTimes[index].value2?.from} - ""${operationalTimes[index].value2?.to}",
                      ),
                    ],
                  ),
                ),
              ],
            ),
          )
          : const SizedBox();
      }
    );
  }

  bool _branchIsOn(int index,) => operationalTimes[index].value2?.isOn ?? false;

  bool _coloringMechanism(int index,) => isEvenColoring ? (index.isEven) : (index.isOdd);
}

class KeyValueInfoWidget extends StatelessWidget {
  final VoidCallback? onTap;
  final bool isDark;
  final String? title;
  final String? text;
  final TextStyle? textStyle;

  const KeyValueInfoWidget(
      {Key? key,
        required this.isDark,
        this.title,
        this.text,
        this.textStyle,
        this.onTap})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: screenWidth(context),
        color: isDark
            ? AppColors.grey200Color.withOpacity(.15)
            : AppColors.whiteColor,
        child: Row(mainAxisAlignment: MainAxisAlignment.start, children: [
          horizontalSpaceLarge,
          Flexible(
            flex: 2,
            child: TextWidget(
              text: title ?? "",
              style: const TextStyle(
                  color: AppColors.grey, fontWeight: FontWeight.w700),
            ),
          ),
          Flexible(
            flex: 3,
            child: Row(
              children: [
                Flexible(
                  child: TextWidget(
                    text: "$text",
                    style: textStyle,
                  ),
                )
              ],
            ),
          )
        ]),
      ),
    );
  }
}
