import 'package:stacked/stacked.dart';

mixin BaseViewModelHelper on BaseViewModel {
  void onModelReady();
  void onClose();
  void onRetry();
}
