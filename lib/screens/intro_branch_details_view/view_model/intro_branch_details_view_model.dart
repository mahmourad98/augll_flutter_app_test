import 'package:map_launcher/map_launcher.dart';
import 'package:stacked_services/stacked_services.dart';
import 'package:stacked/stacked.dart';
import '../../../app/service_locator.dart';
import '../../../helpers/view_model_helpers/base_view_model_helper.dart';
import '../../../models/branches_feature/branch_details_dto.dart';
import '../../../repos/branches/branches_repo.dart';
import '../../../services/app_level/location_services/map_luncher_service.dart';
import '../../../services/app_level/url_services/launch_url_service.dart';
import '../../../utils/app_level/futures_utils.dart';


class IntroBranchDetailsViewModel extends BaseViewModel with BaseViewModelHelper {
  final BranchDetailsDto branchDetailsDto;
  IntroBranchDetailsViewModel(this.branchDetailsDto);

  void lunchMaps() => MapLauncherService.lunchGoogleMapsOrAnyInstalledMap(
    coords: Coords(branchDetailsDto.coordinate?.latitude ?? 0.0, branchDetailsDto.coordinate?.longitude ?? 0.0,),
    title: branchDetailsDto.branchName ?? "",
  );

  void lunchMobileNumber() => LaunchUrlService.launchMobileNumber(branchDetailsDto.contactNumber ?? "",);

  void viewBranchCatalog() => LaunchUrlService.launchGenericUrl(branchDetailsDto.branchCatalogUrl ?? "",);

  void downloadBranchCatalog() => FuturesUtils.runGenericBusyFutureAsFuture<bool>(
    () => locator<BranchesRepo>().downloadBranchCatalogRequest(
      branchDetailsDto.branchCatalogUrl ?? "",
      branchDetailsDto.businessName ?? "",
    ),
  );

  void viewWebSite() => LaunchUrlService.launchGenericUrl(branchDetailsDto.website ?? "",);

  ///
  @override
  void onClose() {
    locator<NavigationService>().back();
  }

  @override
  void onModelReady() {}

  @override
  void onRetry() {}
}

