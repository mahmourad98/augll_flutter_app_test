import 'package:augmented_reality_plugin_wikitude/architect_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

class WikitudePOIView extends HookWidget with WidgetsBindingObserver{
  final ArchitectWidget _arWidget;
  const WikitudePOIView(this._arWidget, {Key? key,}) : super(key: key,);

  @override
  Widget build(BuildContext context,) {
    useEffect(
      (){
        WidgetsBinding.instance.addObserver(this,);
        return (){
          WidgetsBinding.instance.removeObserver(this,);
        };
      },
      <dynamic>[this._arWidget,],
    );

    useOnAppLifecycleStateChange(
      (previous, current,){
        switch (current) {
          case AppLifecycleState.paused:
            this._arWidget.pause();
            break;
          case AppLifecycleState.resumed:
            this._arWidget.resume();
            break;
          case AppLifecycleState.inactive:
            this._arWidget.pause();
            break;
          case AppLifecycleState.detached:
            this._arWidget.pause();
            break;
          default:
            break;
        }
      },
    );

    return this._arWidget;
  }
}
