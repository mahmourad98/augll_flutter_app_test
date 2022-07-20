import 'dart:convert';
import 'dart:developer' as dev;
import 'package:location/location.dart';
import 'dart:math';
import 'package:augll_project/app/service_locator.dart';
import 'package:augll_project/screens/poi.dart';
import 'package:augll_project/services/navigator_service.dart';
import 'package:augmented_reality_plugin_wikitude/wikitude_plugin.dart';
import 'package:augmented_reality_plugin_wikitude/wikitude_response.dart';
import 'package:flutter/material.dart';
import 'package:augmented_reality_plugin_wikitude/architect_widget.dart';
import 'package:augmented_reality_plugin_wikitude/startupConfiguration.dart';

class ArViewWidget extends StatefulWidget {
  const ArViewWidget() : super(key: null,);

  @override
  State<ArViewWidget> createState() => _ArViewWidgetState();
}

class _ArViewWidgetState extends State<ArViewWidget> with WidgetsBindingObserver{
  late final ArchitectWidget? architectWidget;
  final List<String> features= const ["geo",];
  final List<String> requiredExtensions = const [];

  _ArViewWidgetState();

  @override
  void initState() {
    super.initState();

    WidgetsBinding.instance?.addObserver(this,);
    this.architectWidget = ArchitectWidget(
      onArchitectWidgetCreated: onArchitectWidgetCreated,
      licenseKey: "j/UycHl90+O0SkY7BzsVzDyXV3xLzl+Ynj/rygb+bCJiBEKicqFxYzYfdTGDYccYS97qvjdaBYFF3dSZTMxVCMCXvfQUU50YwrLNKiaFpGyGqaeYeEYpLEto/MYEmw4EgywTnUkEt220uGPyFRQej8A2/cCnWB0FmiG3Y+SlUXhTYWx0ZWRfX8ZhlNV6CM8j7W2WMALslDGWtMb0u2TxYrGeaBg9Qz9rTVsnY2eynwZCZNw1p0WIRZ+RhLzO7dz6IFXDWzKhbj2Oy5mr4T61oKebL0ulvi8dGIemryn1hRg5n6HxeKRsn1kMsGzoCdMaSlHnajjU1+ZeOFUXpHCkSu+/8X3ivXS6HX1oeFCssgow9cNe7FpFoeUWVQxAuX1lQVObixytNv8b6n4yynrvf4gIKFelznHrJN84Te84ZtLoHxyef2+wgcKfDssT67eZwoSym6IWH/D2PF8K6zEo1iRRfoeAQvPqEYq+KIAHRFxHbc6qlIzoKZ+W5DuBxYhlSXeSHsqMoc8HeSgr3RbPbvqlBrcYem9kWbGXNrBzPR7WM+pufgUBPdyfaGIQWY1yT6Wx4Pr42QV4cFRhrN3H7rx0+xZ9IzzFG2AHbWSjr8talkVUxc64GWhwpD8LaSR2tBsepWmZnwt0SBQHOF+7yLuDuqZrkrEjcfC7q6GFv0oKjcL61XmA7vmo7YsPqvR2wFDwMYU1UxVKn3C3ilXlAPQXJaU9UfK+xeZ4m9oTbNY1nYbep/QwkNUzXKZT4GjfWAbK/cDWphsEM1zx8QQju8rGjrfgLz4SWtBuwTPdbHrtSMNolxFlwohq76qzQuWgBZ1yJiABp6FpzI1mY3iBPlKuc+M3JHf6KQ0y+PYS27g=",
      startupConfiguration: StartupConfiguration(
        cameraPosition: CameraPosition.BACK,
        cameraFocusMode: CameraFocusMode.CONTINUOUS,
        cameraResolution: CameraResolution.HD_1280x720,
      ),
      features: this.features,
    );
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: this.architectWidget!,
    );
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    switch (state) {
      case AppLifecycleState.paused:
        this.architectWidget?.pause();
        break;
      case AppLifecycleState.resumed:
        this.architectWidget?.resume();
        break;
      case AppLifecycleState.inactive:
        // TODO: Handle this case.
        break;
      case AppLifecycleState.detached:
        // TODO: Handle this case.
        break;
      default:
        break;
    }
  }

  @override
  void dispose() {
    this.architectWidget?.pause();
    this.architectWidget?.destroy();
    WidgetsBinding.instance!.removeObserver(this,);
    super.dispose();
  }

  Future<void> onArchitectWidgetCreated() async{
    String loadPath = "assets/wikitude_samples/selection_sample/index.html";
    this.architectWidget!.load(loadPath, onLoadSuccess, onLoadFailed,);
    this.architectWidget!.resume();
    List<Poi> pois = await getNearestPOIs();
    dev.log("pois list length: ${pois.length}", name: "MyArchitectWidgetClass",);
    final location = await Location.instance.getLocation();
    this.architectWidget!.setLocation(location.latitude!, location.longitude!, location.altitude!, location.accuracy!,);
    this.architectWidget!.callJavascript(
      "World.loadPoisFromJsonData(${jsonEncode(pois,)});",
    );
    //architectWidget.setLocation(lat, lon, alt, accuracy);
    this.architectWidget!.setJSONObjectReceivedCallback(onJSONObjectReceived,);
  }

  Future<void> onJSONObjectReceived(Map<String, dynamic> jsonObject) async {
    if(jsonObject["action"] != null){
      switch(jsonObject["action"]) {
        case "capture_screen":
          WikitudeResponse captureScreenResponse = await this.architectWidget!.captureScreen(true, "");
          if(captureScreenResponse.success) {
            dev.log("Success, Image saved in: ${captureScreenResponse.message}", name: "MyArchitectWidget",);
          }
          else {
            if(captureScreenResponse.message.contains("permission")) {
              _showErrorDialog("some error has just occurred sorry.");
            }
            else {
              _showErrorDialog("some error has just occurred sorry.");
            }
          }
          break;
        case "present_poi_details":
          // Navigator.push(
          //   context,
          //   MaterialPageRoute(
          //     builder: (context) => PoiDetailsWidget(
          //       id: jsonObject["id"],
          //       title: jsonObject["title"],
          //       description: jsonObject["description"],
          //     ),
          //   ),
          // );
          dev.log(
            "the data which is coming throw the javascript action: id: ${jsonObject["id"]}, title: ${jsonObject["title"]}, description: ${jsonObject["description"]}.",
            name: "MyArchitectWidgetClass",
          );
          break;
      }
    }
  }

  Future<void> onLoadSuccess() async {
    dev.log("world loading was successful", name: "MyArchitectWidget",);
  }

  Future<void> onLoadFailed(String error) async {
    _showErrorDialog("world load failed, $error",);
  }

  void _showErrorDialog(String message,) {
    showDialog(
      context: getItInstance.get<NavigationService>().navigatorKey.currentContext!,
      builder: (BuildContext context,) {
        return AlertDialog(
          title: const Text("Permissions required",),
          content: Text(message,),
          actions: <Widget>[
            TextButton(
              child: const Text('Cancel',),
              onPressed: () {
                Navigator.of(context,).pop();
              },
            ),
            TextButton(
              child: const Text('Open settings',),
              onPressed: () {
                Navigator.of(context,).pop();
                WikitudePlugin.openAppSettings();
              },
            ),
          ],
        );
      },
    );
  }

  Future<List<Poi>> prepareApplicationDataModel() async {
    final Random random = Random();
    const int min = 1;
    const int max = 10;
    const int placesAmount = 10;
    final Location location =  Location();

    List<Poi> pois = <Poi>[];
    try {
      LocationData userLocation = await location.getLocation();
      for (int i = 0; i < placesAmount; i++) {
        pois.add(
          Poi(
            id: i+1,
            name: 'POI#' + (i+1).toString(),
            description: 'This is the description of POI#' + (i+1).toString(),
            longitude: userLocation.longitude! + 0.001 * (5 - min + random.nextInt(max - min)),
            latitude: userLocation.latitude! + 0.001 * (5 - min + random.nextInt(max - min)),
            altitude: userLocation.altitude!,
            placeImageUrl: "https://im.ge/i/F1xEX8",
          ),
        );
      }
    }
    catch(e) {
      print("Location Error: " + e.toString());
    }
    return pois;
  }

  Future<List<Poi>> getNearestPOIs() async {
    final Location location =  Location();

    List<Poi> pois = <Poi>[];
    try {
      LocationData userLocation = await location.getLocation();
      pois.add(
        Poi(
          id: 1,
          name: 'POI#' + (1).toString(),
          description: 'deposite mall',
          latitude: 41.0683333,
          longitude: 28.81138888888889,
          altitude: userLocation.altitude!,
          placeImageUrl: "https://i.ibb.co/qCVcpqc/marker-1.png",
        ),
      );
      pois.add(
        Poi(
          id: 2,
          name: 'POI#' + (2).toString(),
          description: 'automotive',
          latitude: 41.0622222,
          longitude: 28.80777777777778,
          altitude: userLocation.altitude!,
          placeImageUrl: "https://i.ibb.co/3d98pX7/marker-2.png",
        ),
      );
      pois.add(
        Poi(
          id: 3,
          name: 'POI#' + (3).toString(),
          description: "212 outlet mall",
          latitude: 41.0472222,
          longitude: 28.809722222222224,
          altitude: userLocation.altitude!,
          placeImageUrl: "https://i.ibb.co/QmPP7h8/marker-3.png",
        ),
      );
    }
    catch(e) {
      print("Location Error: " + e.toString());
    }
    return pois;
  }
}