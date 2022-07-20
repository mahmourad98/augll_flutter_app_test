import 'package:augll_project/services/navigator_service.dart';
import 'package:get_it/get_it.dart';

var getItInstance = GetIt.instance;

void setUpServiceLocator(){
  getItInstance.registerSingleton<NavigationService>(NavigationService(),);
}