
import 'package:bot_toast/bot_toast.dart';
import 'bot_toast_util.dart';

class FuturesUtils {
  static Future<T> runGenericBusyFutureAsFuture<T>(Future<T> Function() future,) async {
    BotToastUtil.customLoader();
    final T _response = await future();
    BotToast.closeAllLoading();
    return _response;
  }
}
