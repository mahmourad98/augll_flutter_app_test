import 'package:augll_project/screens/intro_view/views/sub_views/view_components/wikitude_poi_view.dart';
import 'package:flutter/material.dart';
import 'package:stacked/stacked.dart';
import '../../../../helpers/ui_helpers/ui_general_helper.dart';
import '../../view_models/intro_view_model.dart';
import '../view_components/intro_content_widget.dart';

class IntroWikitudeAugmentedSubView extends ViewModelWidget<IntroViewModel>{
  const IntroWikitudeAugmentedSubView({Key? key,}) : super(key: key,);

  @override
  bool get reactive => true;

  @override
  Widget build(BuildContext context, IntroViewModel viewModel,) {
    if(viewModel.busy(viewModel.wikitudePoiDelegation,)) {
      return const Center(
        child: CustomLoader(),
      );
    }
    return Stack(
      clipBehavior: Clip.antiAliasWithSaveLayer,
      children: [
        SizedBox(
          width: screenWidth(context,),
          height: screenHeightPercentage(context, percentage: 0.75,),
          child: WikitudePOIView(viewModel.wikitudePoiDelegation.architectWidget,),
        ),
        Align(
          alignment: Alignment.bottomCenter,
          child: SizedBox(
            width: screenWidth(context,),
            child: const DecoratedBox(
              decoration: BoxDecoration(
                color: Colors.transparent,
              ),
              child: TextWidget(
                text: "Here the augmented view related business must be implemented....",
              ),
            ),
          ),
        ),
      ],
    );
  }
}
