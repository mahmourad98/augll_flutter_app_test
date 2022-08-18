import 'package:get_it/get_it.dart';
import 'package:package_info_plus/package_info_plus.dart';
import 'package:stacked_services/stacked_services.dart';

import '../domain/network/dio_depepency/dio_network_util.dart';
import '../repos/branches/branches_repo.dart';

final locator = GetIt.instance;
Future setupLocator() async {
  locator.registerLazySingleton(() => DialogService(),);
  locator.registerLazySingleton(() => SnackbarService(),);
  locator.registerLazySingleton(() => BottomSheetService(),);
  locator.registerLazySingleton(() => NavigationService(),);
  locator.registerFactory(() => BranchesRepo(),);
  locator.registerFactory(() => DioNetworkUtil(),);
}
