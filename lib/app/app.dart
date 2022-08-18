import 'package:augll_project/app/service_locator.dart';
import 'package:augll_project/providers/compatibility_provider.dart';
import 'package:augll_project/screens/my_architect_widget.dart';
import 'package:augll_project/services/navigator_service.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class MyApp extends StatelessWidget {
  const MyApp({Key? key,}) : super(key: key,);

  @override
  Widget build(BuildContext context,) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider<CompatibilityProvider>(
          create: (_,) => CompatibilityProvider(),
          lazy: false,
        ),
      ],
      child: MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(),
        home: Builder(
          builder: (BuildContext buildContext,){
            return const MyMainPage();
          },
        ),
        navigatorKey: getItInstance.get<NavigationService>().navigatorKey,
      ),
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
                  Navigator.of(context,).push(
                    MaterialPageRoute(builder: (_) => const ArViewWidget(),),
                  );
                },
                child: const Text('Navigate To',
                    style: TextStyle(
                      color: Colors.black,
                    )
                ),
                style: TextButton.styleFrom(
                  backgroundColor: Colors.blue,
                ),
              ),
            ),
            Expanded(
              child: Stack(
                children: [
                  const ArViewWidget(),
                  SingleChildScrollView(
                    child: Column(
                      children: [
                        Center(
                          child: SizedBox.fromSize(
                            size: const Size(128, 128,),
                            child: const FlutterLogo(),
                          ),
                        ),
                        Center(
                          child: SizedBox.fromSize(
                            size: const Size(128, 128,),
                            child: const FlutterLogo(),
                          ),
                        ),
                        Center(
                          child: SizedBox.fromSize(
                            size: const Size(128, 128,),
                            child: const FlutterLogo(),
                          ),
                        ),
                        Center(
                          child: SizedBox.fromSize(
                            size: const Size(128, 128,),
                            child: const FlutterLogo(),
                          ),
                        ),
                        Center(
                          child: SizedBox.fromSize(
                            size: const Size(128, 128,),
                            child: const FlutterLogo(),
                          ),
                        ),
                        Center(
                          child: SizedBox.fromSize(
                            size: const Size(128, 128,),
                            child: const FlutterLogo(),
                          ),
                        ),
                        Center(
                          child: SizedBox.fromSize(
                            size: const Size(128, 128,),
                            child: const FlutterLogo(),
                          ),
                        ),
                      ],
                    ),
                  )
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

