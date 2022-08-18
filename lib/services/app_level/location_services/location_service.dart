import 'package:dartz/dartz.dart';
import 'package:location/location.dart';
import '../permissions/location_permission_handler_service.dart';

class LocationService{
  static Future<Either<dynamic, LocationData>> getCurrentLocation() async {
    final _isLocationReady = await LocationPermissionHandler.checkLocationPermission() &&
       await LocationPermissionHandler.checkLocationService();
    if(_isLocationReady){
      return Right(await Location.instance.getLocation());
    }
    return const Left(false,);
  }

  static Stream<LocationData> getLocationChangesStream() => Location.instance.onLocationChanged;
}
