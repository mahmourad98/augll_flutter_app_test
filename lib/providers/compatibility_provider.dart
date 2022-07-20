import 'dart:developer';
import 'package:location/location.dart';
import 'package:augmented_reality_plugin_wikitude/wikitude_plugin.dart';
import 'package:augmented_reality_plugin_wikitude/wikitude_response.dart';
import 'package:flutter/material.dart';

class CompatibilityProvider extends ChangeNotifier{
  bool _isCompatible= false;
  bool _isPermissionsGranted= false;

  bool get isCompatible => _isCompatible;
  bool get isPermissionsGranted => _isPermissionsGranted;


  void setIsCompatible(bool value,) {
    _isCompatible = value;
    notifyListeners();
  }
  void setIsPermissionsGranted(bool value,) {
    _isPermissionsGranted = value;
    notifyListeners();
  }

  Future<void>  checkCompatibility(List<String> features,) async{
    await WikitudePlugin.isDeviceSupporting(features,).then(
      (WikitudeResponse value,) {
        log("value from check compatibility: ${value.success} / ${value.message}", name: "CompatibilityProviderClass",);
        setIsCompatible(value.success);
      },
    );
    await Future.delayed(const Duration(milliseconds: 500,),);
  }

  Future<void> checkPermissions(List<String> features,) async{
    await WikitudePlugin.requestARPermissions(features,).then(
      (WikitudeResponse value,) {
        setIsPermissionsGranted(value.success,);
      },
    );
    await Future.delayed(const Duration(milliseconds: 500,),);
  }
}