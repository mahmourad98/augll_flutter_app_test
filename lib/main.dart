import 'dart:io';
import 'package:augll_project/app/service_locator.dart';
import 'package:flutter/material.dart';
import 'app/app.dart';


main(){
  AppRoot.init();
}

class AppRoot{
  static const _myApp = MyApp();

  AppRoot.init(){
    HttpOverrides.global = MyHttpOverrides();
    WidgetsFlutterBinding.ensureInitialized();
    setUpServiceLocator();
    runApp(_myApp,);
  }
}

class MyHttpOverrides extends HttpOverrides{
  @override
  HttpClient createHttpClient(SecurityContext? context,){
    return super.createHttpClient(context,)
      ..badCertificateCallback = (X509Certificate cert, String host, int port,) => true;
  }
}

