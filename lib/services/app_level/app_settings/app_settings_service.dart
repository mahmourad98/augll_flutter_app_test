import 'package:app_settings/app_settings.dart';

class AppSettingsService {
  static Future openAppSettings({bool isAnotherTask = false,}) async =>
      await AppSettings.openAppSettings(asAnotherTask: false,);

  static Future openDeviceLocationSettings({bool isAnotherTask = false,}) async =>
      await AppSettings.openLocationSettings(asAnotherTask: false,);
}
