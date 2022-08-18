import 'package:permission_handler/permission_handler.dart';
import 'package:stacked_services/stacked_services.dart';
import '../../../app/service_locator.dart';

class CameraPermissionHandlerService {
  static Future<bool> cameraPermissionHandler() async {
    final status = await Permission.camera.status;
    if (!status.isGranted) {
      await locator<BottomSheetService>().showBottomSheet(
        title: "Camera access required",
        description: "In order for the basic application feature to work, you must grant access to the rear camera",
      );
      final permissionStatus = Permission.camera.request();

      return await permissionStatus.isGranted;
    }
    return true;
  }
}
