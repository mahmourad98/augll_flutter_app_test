import 'dart:convert';
import 'package:augll_project/models/branches_feature/branch_details_dto.dart';
import 'package:augmented_reality_plugin_wikitude/architect_widget.dart';
import 'package:augmented_reality_plugin_wikitude/startupConfiguration.dart';
import 'package:flutter/material.dart';
import 'package:location/location.dart';
import 'package:stacked_services/stacked_services.dart';
import '../../../../app/app.logger.dart';
import '../../../../app/app_router.dart';
import '../../../../app/service_locator.dart';
import '../../../../models/branches_feature/branch_dto.dart';
import '../../../../repos/branches/branches_repo.dart';
import '../intro_view_model.dart';

class WikitudePoiDelegation {
  final String _className = "WikitudePOIDelegation";
  final _branchesRepo = locator<BranchesRepo>();

  ///Branches
  var branches = <BranchItem>[];
  ///Get a single branch Item by index
  BranchItem branchItem(int index,) => branches[index];

  ///the intro view model instance to control busy state
  final IntroViewModel _introViewModel;

  ///The main architect widget
  late final ArchitectWidget _architectWidget = ArchitectWidget(
    features: const ["geo",],
    onArchitectWidgetCreated: this.onCreated,
    licenseKey: KeysConstant.wikitudeAPIKey,
    startupConfiguration: StartupConfiguration(
      cameraPosition: CameraPosition.BACK,
      cameraFocusMode: CameraFocusMode.CONTINUOUS,
      cameraResolution: CameraResolution.HD_1280x720,
    ),
  );
  ///Get AR widget
  ArchitectWidget get architectWidget => this._architectWidget;
  ///check if the web view can go back
  Future<bool> get canArGoBack async => await this._architectWidget.canWebViewGoBack() ?? true;

  WikitudePoiDelegation(this._introViewModel,);

  ///Get branches points for AR camera view and map [getBranchesPoints]
  Future<dynamic> getBranchesPoints(
    LocationData locationData,
    VoidCallback notifyListeners,
    void Function(dynamic,) setErrorCallback,
  )async{
    return await _branchesRepo.getBranchesPointRequest(
      locationData: locationData,
    ).then(
      (value,) => value.fold(
        (l,) {
          setErrorCallback(l,);
        },
        (r,) {
          branches = r.branchesPointInfo.items;
          notifyListeners();
        },
      ),
    );
  }

  Future<void> onCreated() async{
    await this._introViewModel.runBusyFuture(
      this._loadArWorld(),
      busyObject: this,
    );
  }

  Future<void> _loadArWorld() async{
    await this._architectWidget.load(
      KeysConstant.wikitudeWorldLoadingPath,
      _onLoadSuccess,
      _onLoadFailed,
    ).then(
      (_) async => await this._architectWidget.setJSONObjectReceivedCallback(_onJSONObjectReceived,),
    );
    return;
  }

  Future<void> disposeIntroAugmentedView(){
    return this._architectWidget.pause().then(
      (_,) async => await this._architectWidget.destroy(),
    );
  }

  Future<void> _onLoadSuccess() async {
    getLogger(this._className,).i("world loading was successful",);
    await this._architectWidget.resume();
    getLogger(this._className,).i("world was resumed",);
    await loadBranchesPointsToArCameraView(this.branches,);
    getLogger(this._className,).i("branches are loaded",);
    return;
  }

  Future<void> _onLoadFailed(String error,) async {
    getLogger(this._className,).e("world loading was failure",);
    await this._architectWidget.pause();
    getLogger(this._className,).i("world was paused",);
    this._introViewModel.setError("world loading was failure",);
    return;
  }

  Future<void> loadBranchesPointsToArCameraView(List<BranchItem> branches,) async{
    await _callJavaScriptMethod(
      "World.loadPoisFromJsonData(${jsonEncode(branches,)});",
    );
    return;
  }

  @protected
  Future<void> _callJavaScriptMethod(String methodImpl,) async{
    await this._architectWidget.callJavascript(methodImpl,).then(
      (value,) => getLogger(this._className,).i("javascript method was called",),
    ).onError(
      (error, stackTrace,) => getLogger(this._className,).i(
        "javascript method had error during the call, error: $error",
      ),
    );
  }

  @protected
  Future<void> _onJSONObjectReceived(Map<String, dynamic> jsonObject,) async{
    if(jsonObject["action"] != null){
      switch(jsonObject["action"]) {
        case "present_selected_poi_details":
          getLogger(this._className,).i(
            "the data which is coming throw the javascript action: id: ${jsonObject["id"]}.",
          );
          locator<NavigationService>().navigateTo(
            Routes.introBranchDetailsView,
            arguments: IntroBranchDetailsViewArguments(
              branchDetailsDto: BranchDetailsDto(
                id: 1,
                businessName: "business_name",
                branchName: "branch_name",
                address: "address",
                contactNumber: "contactNumber",
                website: "website",
                businessLogoUrl: "businessLogoUrl",
                branchCatalogUrl: "branchCatalogUrl",
                category: null,
                coordinate: null,
                saturdayOperationalTime: null,
                sundayOperationalTime: null,
                mondayOperationalTime: null,
                tuesdayOperationalTime: null,
                wednesdayOperationalTime: null,
                thursdayOperationalTime: null,
                fridayOperationalTime: null,
              ),
            ),
          );
          break;
      }
    }
  }
}

class KeysConstant {
  static const wikitudeAPIKey = "MQSFIYyUSgRH2mQ3psIx3jRF8e3WvgWI+TEQT2nOz5pfkYIYzZXZjSIbUU6WG3FRekK/EfS7EHtdkvTxGT5ozjcKtCMXADjeYiCUXXK/21sBVnGlyNtbb3BS5GFWRYuyhG9D+QAoit8xpAoqt8EMzRr7CNor/n6x6GM/9oHOeLBTYWx0ZWRfXysPi1ljUWCvCn48DW+uDXDY6GJYuqjjkX2XrzAcSVwV5cL3sdCYbdAvIZE9cdrNCKft9iAS2OSfxkgYS3uemOqxWMqgnANGBg/SSum4NTVJRtZgVGF0dKSG8BYOdBWhDFpeXdMRMuQ1pBUJDtfJDl2xYFfI/gzFU60nWs9ndjNZR8P7ZKMFfp5Xz1+9OWgAKaR9VhCurfsAIIKT5ySlyfYFn+iz0RKQz+BIVOTlivQyB7DqVNUsA1Apg9c7q1MXL1eTtpxiVhp+AzSWBXQneyQDldBI1C4j3qxiuHcfjBeucC98qr7yAAfUfwQ4E1+EXE0w0e5IytSvAn/c5Plsfl9RdWE5nrJs0emjEmm+DJl9zaaKS0PfgutszzxVkr+Hag1HqqKu2NNEdQ26mWMhr14ByhsPrCUqgqaQCmDKg1qWOocodg0t0P1DhsnInT0u34Wh7FG7G//3/PKATSmNKUMqZK3EsCTYv5quFBQ5eLZBgK8x2Jyz5nLEQaVU8IwW3OxrFHVGB21mD19el7edzWaYdBAsmL9PWFdRKoX0s9/7G8kVqpX8ttTIxuFdqhsmN0RkafdzNi7KNclab2VjLWnVDzLH9halizAlwumgCntw2ncod11mJ441kDbeYoIdJx088/6YXy3sMMFCa+uvoHb6m7syUa/RiPTUaInHzEWBGF9sx2GKf6E=";
  static const wikitudeWorldLoadingPath = "assets/wikitude_sample/index.html";
  static const geoGoogleAPIKEY = "";
}

