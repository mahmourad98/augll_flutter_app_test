import 'package:augll_project/domain/network/dio_depepency/dio_network_util.dart';
import 'package:bot_toast/bot_toast.dart';
import 'package:map_launcher/map_launcher.dart';

class MapLauncherService {
  static Future<bool> lunchGoogleMapsOrAnyInstalledMap({
    required Coords coords,
    required String title,
    String? description,
  }) async {
    try {
      if (await MapLauncher.isMapAvailable(MapType.google,) ?? false) {
        await MapLauncher.showMarker(
          mapType: MapType.google,
          coords: coords,
          title: title,
          description: description,
        );
        return true;
      }
      else {
        final availableMaps = await MapLauncher.installedMaps;
        availableMaps.isNotEmpty
            ? await availableMaps.first.showMarker(
              coords: coords, title: title, description: description,
            )
            : BotToast.showText(text: "No official map apps are installed",);
        return true;
      }
    } on Exception catch (e) {
      e.exceptionErrorLog("MapLauncherService",);
      return false;
    }
  }
}
