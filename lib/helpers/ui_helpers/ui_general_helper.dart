// Screen Size Helpers
import 'package:flutter/material.dart';

const Widget horizontalSpaceTiny = SizedBox(width: 5.0);
const Widget horizontalSpaceSmall = SizedBox(width: 10.0);
const Widget horizontalSpaceRegular = SizedBox(width: 18.0);
const Widget horizontalSpaceMedium = SizedBox(width: 25.0);
const Widget horizontalSpaceLarge = SizedBox(width: 50.0);

// Vertical Spacing
const Widget verticalSpaceTiny = SizedBox(height: 5.0);
const Widget verticalSpaceSmall = SizedBox(height: 10.0);
const Widget verticalSpaceRegular = SizedBox(height: 18.0);
const Widget verticalSpaceMedium = SizedBox(height: 25);
const Widget verticalSpaceUpperMedium = SizedBox(height: 38);
const Widget verticalSpaceLarge = SizedBox(height: 50.0);
const Widget verticalSpaceUpperLarge = SizedBox(height: 90.0);
const Widget verticalSpaceMassive = SizedBox(height: 120.0);
const Widget verticalSpaceSuperMassive = SizedBox(height: 180.0);

Widget keypadSizedBox(BuildContext context) =>
    SizedBox(height: MediaQuery.of(context).viewInsets.bottom + 40);

double screenWidth(BuildContext context) => MediaQuery.of(context).size.width;
double screenHeight(BuildContext context) => MediaQuery.of(context).size.height;
Size screenSize(BuildContext context) => MediaQuery.of(context).size;

/// Returns the pixel amount for the percentage of the screen height. [percentage] should
/// be between 0 and 1 where 0 is 0% and 100 is 100% of the screens height
double screenHeightPercentage(BuildContext context, {double percentage = 1}) =>
    screenHeight(context) * percentage;

/// Returns the pixel amount for the percentage of the screen width. [percentage] should
/// be between 0 and 1 where 0 is 0% and 100 is 100% of the screens width
double screenWidthPercentage(BuildContext context, {double percentage = 1}) =>
    screenWidth(context) * percentage;
//Margins
///H
const double h35Marign = 35;
const double h25Margin = 25;
const double h12Margin = 15;

///V

const double v10Margin = 10;
const double v14Margin = 14;
const double v18Margin = 18;
const double v25Margin = 25;
//Radius
const double kcRadius_10 = 10;
const double kcRadius_15 = 15;
const double kcRadius_20 = 20;
const double kcRadius_30 = 30;
const double kcRadius_35 = 35;
const double kcRadius_40 = 40;
const double kcRadius_12 = 12;

class ReadyEdgeInsets {
  static EdgeInsets getH25V18() =>
      const EdgeInsets.symmetric(horizontal: h25Margin, vertical: v18Margin);
  static EdgeInsets getH25V10() =>
      const EdgeInsets.symmetric(horizontal: h25Margin, vertical: v10Margin);
  static EdgeInsets getIconPadding() =>
      const EdgeInsets.symmetric(horizontal: 12, vertical: 12);
  static EdgeInsets getH14() => const EdgeInsets.symmetric(horizontal: 14);
  static EdgeInsets getH18() => const EdgeInsets.symmetric(horizontal: 18);
  static EdgeInsets getV14() => const EdgeInsets.symmetric(vertical: 14);
  static EdgeInsets getH14V10() =>
      const EdgeInsets.symmetric(horizontal: 14, vertical: 10);
  static EdgeInsets getHR14() => const EdgeInsets.only(right: 14);
  static EdgeInsets getHL14() => const EdgeInsets.only(left: 14);
  static EdgeInsets getTinyPadding() => const EdgeInsets.all(2);
  static EdgeInsets getH25V25() =>
      const EdgeInsets.symmetric(horizontal: h25Margin, vertical: v25Margin);
}

// colors
class AppColors {
  static const Color kcPrimaryColor = Color(0xff22A45D);
  static const Color kcMediumGreyColor = Color(0xff868686);
  static const Color redColor = Color.fromARGB(255, 225, 16, 16);
  static const Color redColor_1 = Color.fromARGB(255, 231, 29, 115);
  static const Color blueColor_1 = Color.fromARGB(255, 54, 169, 225);

  static const Color blueColor_2 = Color.fromARGB(255, 45, 46, 131);
  static const Color whiteColor = Color.fromARGB(255, 255, 255, 255);
  static const Color transparentColor = Colors.transparent;
  static const Color blackColor = Color.fromARGB(255, 14, 13, 13);
  static const Color blackShadowColor = Color.fromARGB(255, 207, 203, 203);
  static const Color blackShadowColor_2 = Color.fromARGB(255, 224, 223, 223);
  static const Color greyColor = Color.fromARGB(255, 225, 222, 222);

  static const Color greyBackgroudColor = Color.fromARGB(255, 241, 239, 239);

  static const Color yellowColor_1 = Color.fromARGB(255, 243, 146, 0);

  static const Color greyIosBottomSheetBackgroundColor =
      Color.fromRGBO(248, 248, 248, 0.82);

  static const Color blueColor = Color.fromRGBO(59, 134, 255, 1);

  static const Color blue100Color = Color.fromRGBO(3, 97, 219, 1);
  static const Color blue150Color = Color.fromRGBO(0, 47, 108, 1);
  static const Color blue200Color = Color.fromRGBO(0, 45, 110, 1);
  static const Color blue300Color = Color.fromRGBO(57, 45, 93, 1);
  static const Color blueAccentColor = Color.fromRGBO(0, 180, 225, 1);
  static const Color blueNbsColor = Color.fromRGBO(36, 135, 201, 1);
  static const Color turquoiseColor = Color.fromRGBO(0, 157, 175, 1);
  static const Color cyanColor = Color.fromRGBO(0, 175, 162, 1);
  static const Color sendMessageColor = Color.fromRGBO(229, 255, 253, 1);

  static const Color grey25Color = Color.fromRGBO(248, 248, 248, 1);
  static const Color grey50Color = Color.fromRGBO(246, 246, 246, 1);
  static const Color grey75Color = Color.fromRGBO(241, 241, 241, 1);
  static const Color grey100Color = Color.fromRGBO(230, 230, 230, 1);
  static const Color grey200Color = Color.fromRGBO(165, 165, 165, 1);
  static const Color grey500Color = Color.fromRGBO(117, 120, 123, 1);

  static const Color greenColor = Color.fromRGBO(43, 159, 0, 1);
  static const Color newGreenColor = Color.fromRGBO(0, 210, 122, 1.0);
  static const Color markerGreenColor = Color.fromRGBO(0, 175, 162, 1);
  static const Color darkGreenColor = Color.fromRGBO(0, 110, 102, 1);

  static const Color lightOrangeColor = Color.fromRGBO(255, 221, 0, 1);
  static const Color orangeColor = Color.fromRGBO(255, 143, 28, 1);
  static const Color deepOrangeColor = Color.fromRGBO(128, 66, 2, 1.0);
  static const Color darkOrangeColor = Color.fromRGBO(255, 196, 0, 1);
  static const Color brightRedColor = Color.fromRGBO(255, 88, 93, 1);
  static const Color brightPinkColor = Color.fromRGBO(193, 9, 150, 1.0);

  static const Color grey = Color.fromRGBO(0, 47, 108, 0.38);

  static const Color deemedRedColor = Color.fromRGBO(217, 5, 22, 1.0);
  static const Color notificationRedColor = Color.fromRGBO(255, 0, 0, 1);

  static const Color mainYelloColor = Color(0xFFFFBE19);
  static const Color secondMainYelloColor = Color(0xFFE7907D);
  static const Color mainGreenLightColor = Color.fromRGBO(76, 156, 31, 1);
  static const Color mainAppBarColor = Color.fromRGBO(74, 160, 69, 1);
  static const Color mainSeparatorColor = Color.fromRGBO(74, 160, 69, 0.23);
  static const Color mainGreenDarkColor = Color.fromRGBO(31, 110, 26, 1);
  static const Color mainBackgroundColor = Color.fromRGBO(248, 248, 248, 1);
  static const Color mainGreyColor = Color.fromRGBO(48, 48, 48, 1.0);
  static const Color profilePhotoGreyColor = Color.fromRGBO(175, 172, 172, 1.0);
  static const Color graspGreenColor = Color.fromRGBO(149, 193, 31, 1.0);
}

// Text Style

/// The style used for all body text in the app
const TextStyle ktsMediumGreyBodyText = TextStyle(
  color: AppColors.kcMediumGreyColor,
  fontSize: kBodyTextSize,
);

// Font Sizing
const double kBodyTextSize = 16;
