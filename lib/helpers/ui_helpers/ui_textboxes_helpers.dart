import 'package:mask_text_input_formatter/mask_text_input_formatter.dart';

class UiTextBoxesHelper {
  ///Use [initialText] to prevent text field from resting its value.
  static MaskTextInputFormatter phoneNumberMask(String? initialText) =>
      MaskTextInputFormatter(mask: '### - ### - ###', initialText: initialText);
}
