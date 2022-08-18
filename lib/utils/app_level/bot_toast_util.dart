import 'package:bot_toast/bot_toast.dart';
import 'package:flutter/material.dart';
import '../../screens/intro_view/views/view_components/intro_content_widget.dart';

class BotToastUtil {
  static void customLoader() => BotToast.showCustomLoading(
    toastBuilder: (cancelFunc,) => const CustomLoader(),
    crossPage: true,
    clickClose: true,
    align: Alignment.center,
  );
}
