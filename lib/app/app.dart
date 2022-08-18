import 'package:augll_project/app/service_locator.dart';
import 'package:bot_toast/bot_toast.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:stacked_services/stacked_services.dart';

import 'app_router.dart';

class MyApp extends StatelessWidget {
  const MyApp({Key? key,}) : super(key: key,);

  @override
  Widget build(BuildContext context,) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(),
      home: Builder(
        builder: (BuildContext buildContext,){
          return const MyMainPage();
        },
      ),
      navigatorObservers: [
        StackedService.routeObserver,
        BotToastNavigatorObserver()
      ],
      onGenerateRoute: StackedRouter().onGenerateRoute,
      navigatorKey: StackedService.navigatorKey,
      debugShowCheckedModeBanner: false,
      useInheritedMediaQuery: true,
    );
  }
}

class MyMainPage extends StatelessWidget {
  const MyMainPage({Key? key,}) : super(key: key);

  @override
  Widget build(BuildContext context,) {
    return SafeArea(
      child: Scaffold(
        resizeToAvoidBottomInset: false,
        body: Column(
          mainAxisSize: MainAxisSize.min,
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Center(
              child: TextButton(
                onPressed: (){
                  locator<NavigationService>().clearStackAndShow(Routes.introView,);
                },
                child: const Text('Navigate To Ar View',
                  style: TextStyle(
                    color: Colors.black,
                  ),
                ),
                style: TextButton.styleFrom(
                  backgroundColor: Colors.blue,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

