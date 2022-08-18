import 'package:augll_project/domain/network/dio_depepency/dio_network_util.dart';
import 'package:url_launcher/url_launcher.dart';

class LaunchUrlService {
  static Future<bool> launchMobileNumber(String mob,) async {
    try {
      final _mobNumber = "tel:$mob";
      final _url = Uri.parse(_mobNumber,);
      return await launchUrl(_url,);
    } on Exception catch (e) {
      e.exceptionErrorLog("LunchUrlService",);
      return false;
    }
  }

  static Future<bool> launchGenericUrl(String url, {LaunchMode? mode,}) async {
    try {
      final _genericUrl = url;
      final _url = Uri.parse(_genericUrl,);
      return await launchUrl(_url, mode: mode ?? LaunchMode.externalApplication,);
    } on Exception catch (e) {
      e.exceptionErrorLog("LunchUrlService",);
      return false;
    }
  }
}
