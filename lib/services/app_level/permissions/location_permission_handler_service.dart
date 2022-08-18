import 'package:location/location.dart';
import 'package:stacked/stacked.dart';
import 'package:stacked_services/stacked_services.dart';
import '../../../app/service_locator.dart';
import '../app_settings/app_settings_service.dart';

class LocationPermissionHandler with ReactiveServiceMixin{
  // final ReactiveValue<bool> _permissionGranted = ReactiveValue<bool>(false,);
  // bool get permissionGranted => _permissionGranted.value;
  // final ReactiveValue<bool> _serviceEnabled = ReactiveValue<bool>(false,);
  // bool get serviceEnabled => _serviceEnabled.value;

  LocationPermissionHandler(){
    //listenToReactiveValues([_permissionGranted, _serviceEnabled,],);
  }

  static Future<bool> checkLocationPermission() async{
    PermissionStatus _permissionStatus = await Location.instance.hasPermission();
    if (GeneralUsageExt.logicConditionsProcessor(_permissionStatus, orConditions: [PermissionStatus.denied,],)) {
      _permissionStatus = await Location.instance.requestPermission();
      if (_permissionStatus != PermissionStatus.granted) {
        locator<BottomSheetService>().showBottomSheet(
          barrierDismissible: false,
          enableDrag: false,
          title: "Permission to use the location is essential!",
          description: "If you need to finish this process correctly based on location data, please go to this app's settings and provide it the necessary permissions. Your current location is required.",
        ).whenComplete(() => AppSettingsService.openAppSettings(),);
        //this._permissionGranted.value = false;
        return false;
      }
    }
    //this._permissionGranted.value = true;
    return true;
  }

  static Future<bool> checkLocationService() async{
    bool _serviceEnabled = await Location.instance.serviceEnabled();
    if (!_serviceEnabled) {
      _serviceEnabled = await Location.instance.requestService();
      if (!_serviceEnabled) {
        locator<BottomSheetService>().showBottomSheet(
          barrierDismissible: false,
          enableDrag: false,
          title: "The location feature must be enabled",
          description: "Go to your phone settings and activate the location feature so that the add address feature works correctly",
        ).whenComplete(() => AppSettingsService.openDeviceLocationSettings(),);
        //this._serviceEnabled.value = false;
        return false;
      }
    }
    //this._serviceEnabled.value = true;
    return true;
  }
}

class GeneralUsageExt {
  static bool logicConditionsProcessor<T>(
    T testedValue,
    {List<T> orConditions = const [], List<T> andConditions = const [],}
  ) {
    if ([...orConditions, ...andConditions,].isEmpty) {
      return true;
    } else {
      return orConditions.any((T element,) => element == testedValue,)
          || andConditions.every(<T>(T element,) => element == testedValue,);
    }
  }
}
