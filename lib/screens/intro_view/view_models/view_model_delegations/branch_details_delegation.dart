import 'package:bot_toast/bot_toast.dart';
import 'package:dartz/dartz.dart';
import 'package:location/location.dart';
import 'package:stacked_services/stacked_services.dart';
import '../../../../app/app_router.dart';
import '../../../../app/service_locator.dart';
import '../../../../models/branches_feature/branch_details_dto.dart';
import '../../../../repos/branches/branches_repo.dart';
import '../../../../utils/app_level/futures_utils.dart';

class IntroBranchDetailsDelegation {
  final _branchesRepo = locator<BranchesRepo>();

  ///getting branch details by branch id, on success will be navigated to branch details route
  ///on failure a toast will be shown that no data has retrieved
  Future<void> getBranchDetailsAndNavigateTo(
    String id,
    {LocationData? locationData, Map<String, String> selectedCategories = const {},}
  ) async {
    final _result = await FuturesUtils.runGenericBusyFutureAsFuture<Either<dynamic, BranchDetailsDto>>(
      () => _branchesRepo.getBranchDetailsRequest(id, locationData: locationData,),
    );
    _result.fold(_failureGetBranchDetails, _successGetBranchDetails,);
  }

  void _successGetBranchDetails(BranchDetailsDto branchDetailsDto,){
    locator<NavigationService>().navigateTo(
      Routes.introBranchDetailsView,
      arguments: IntroBranchDetailsViewArguments(
        branchDetailsDto: branchDetailsDto,
      ),
    );
  }

  void _failureGetBranchDetails(dynamic error,) => BotToast.showText(text: "No data ....!",);
}


