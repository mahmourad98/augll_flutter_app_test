import 'dart:io';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:path/path.dart' as p;
import '../../../../../helpers/ui_helpers/ui_general_helper.dart';
import '../../../../../models/branches_feature/branch_category_dto.dart';
import '../../../../../models/branches_feature/branch_dto.dart';
import '../../view_components/intro_appbar_widget.dart';
import '../../view_components/intro_content_widget.dart';

class BranchWidget extends StatelessWidget {
  final BranchItem items;
  final VoidCallback onTap;

  const BranchWidget({
    Key? key,
    required this.items,
    required this.onTap,
  }) : super(key: key,);

  @override
  Widget build(BuildContext context,) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        decoration: BoxDecoration(
          color: AppColors.whiteColor,
          borderRadius: BorderRadius.circular(20.0,),
          boxShadow: [
            BoxShadow(
              color: AppColors.grey200Color.withOpacity(0.2,),
              spreadRadius: 2,
              blurRadius: 18,
            ),
          ],
        ),
        padding: ReadyEdgeInsets.getH25V18(),
        margin: ReadyEdgeInsets.getH14V10(),
        child: SizedBox(
          width: screenWidth(context,),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Flexible(
                flex: 2,
                child: CustomCachedNetworkImageWidget(
                  imageUrl: _getItem().businessLogoUrl,
                  loaderSize: 20,
                  height: 60,
                  width: 60,
                  borderRadius: BorderRadius.circular(13.0,),
                ),
              ),
              Flexible(
                flex: 4,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    BranchCategoryNameWithIconWidget(
                      category: _getCategory(),
                    ),
                    verticalSpaceTiny,
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        Flexible(
                          child: TextWidget(
                            margin: EdgeInsets.zero,
                            text: _getItem().businessName.stringProtection(),
                            style: const TextStyle(
                              fontWeight: FontWeight.w700,
                              fontSize: 16,
                            ),
                          ),
                        ),
                      ],
                    ),
                    verticalSpaceTiny,
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        Flexible(
                          child: TextWidget(
                            margin: EdgeInsets.zero,
                            text: _getItem().address.stringProtection(),
                            style: const TextStyle(
                              fontWeight: FontWeight.w400,
                              color: AppColors.grey200Color,
                              fontSize: 12,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
              Flexible(
                flex: 2,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  mainAxisAlignment: MainAxisAlignment.center,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    TextWidget(
                      margin: EdgeInsets.zero,
                      text: "${_getCoordinate().distancePerKm.round()} Km",
                      style: const TextStyle(
                        fontWeight: FontWeight.w600,
                        color: AppColors.redColor_1,
                        fontSize: 13.5,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  BranchItem _getItem() => items;
  BranchesCategory _getCategory() => items.category;
  BranchCoordinate _getCoordinate() => items.coordinate;
}

class BranchCategoryNameWithIconWidget extends StatelessWidget {
  final BranchesCategory category;
  final double? size;

  const BranchCategoryNameWithIconWidget({
    Key? key,
    required this.category,
    this.size,
  }) : super(key: key,);

  @override
  Widget build(BuildContext context,) {
    return SizedBox(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          if (_isSvg()) GenericSvgWidget(
              path: category.iconUrl,
              size: 30,
          )
          else CustomCachedNetworkImageWidget(
            width: size ?? 10,
            height: size ?? 10,
            margin: EdgeInsets.zero,
            imageUrl: _getCategory().iconUrl.stringProtection(),
          ),
          horizontalSpaceTiny,
          TextWidget(
            margin: EdgeInsets.zero,
            text: _getCategory().name.stringProtection(),
            style: TextStyle(
              fontWeight: FontWeight.w400,
              color: _getCategory().fillColor.colorProtection().toColor().withOpacity(0.4,),
              fontSize: size ?? 12,
            ),
          ),
        ],
      ),
    );
  }

  bool _isSvg() => p.extension(category.iconUrl) == ".svg";

  BranchesCategory _getCategory() => category;
}

class CustomCachedNetworkImageWidget extends StatefulWidget {
  final bool isDefaultImage;
  final String imageUrl;
  final BorderRadiusGeometry? borderRadius;
  final BoxBorder? border;
  final Widget? placeholder;
  final Widget? errorWidget;
  final double? width;
  final double? height;
  final double? loaderSize;
  final EdgeInsetsGeometry? margin;
  final BoxFit? fit;
  final Color? color;

  const CustomCachedNetworkImageWidget({
    Key? key,
    required this.imageUrl,
    this.width,
    this.height,
    this.borderRadius,
    this.isDefaultImage = false,
    this.placeholder,
    this.errorWidget,
    this.margin,
    this.border,
    this.loaderSize,
    this.fit,
    this.color,
  }) : super(key: key,);

  @override
  _CustomCachedNetworkImageState createState() => _CustomCachedNetworkImageState();
}

class _CustomCachedNetworkImageState extends State<CustomCachedNetworkImageWidget> {
  @override
  Widget build(BuildContext context,) {
    return CachedNetworkImage(
      imageUrl: widget.isDefaultImage
          ? 'https://picsum.photos/400'
          : Uri.parse(widget.imageUrl,).isAbsolute
              ? widget.imageUrl
              : "",
      imageBuilder: (context, imageProvider,) => Container(
        margin: (widget.margin != null) ? widget.margin : const EdgeInsets.all(0.0,),
        width: widget.width,
        height: widget.height,
        decoration: BoxDecoration(
          image: DecorationImage(
            image: imageProvider,
            fit: widget.fit ?? BoxFit.cover,
          ),
          borderRadius: (widget.borderRadius != null)
              ? widget.borderRadius
              : const BorderRadius.all(Radius.circular(0,),),
          border: (widget.border != null)
              ? widget.border
              : Border.all(color: AppColors.transparentColor, width: 0.0,),
        ),
      ),
      placeholder: (context, url,) => (widget.placeholder != null)
          ? widget.placeholder!
          : Center(
            child: SpinKitRipple(
              color: AppColors.redColor_1,
              size: widget.loaderSize ?? 10,
            ),
          ),
      errorWidget: (context, url, error,) => (widget.errorWidget != null)
          ? widget.errorWidget!
          : const Center(
            child: Icon(
              Icons.warning_rounded,
              color: AppColors.grey100Color,
            ),
          ),
    );
  }
}

extension NullAwaraceExtention on dynamic {
  T protectWith<T>(T nullAwareValue,) {
    if (this == null) {
      return nullAwareValue;
    } else {
      return this;
    }
  }

  String stringProtection() {
    final _buffer = StringBuffer()..write(this,);

    if (this == null) {
      return "No data";
    } else {
      return _buffer.toString();
    }
  }

  String colorProtection() {
    String? hexString = this;
    if (hexString?.isEmpty ?? true) {
      return "#D41515";
    } else {
      return this;
    }
  }

  String uiErrorsHandler() {
    final error = this;
    String _error = "No data ....";

    if (error is DioError) {
      if (error.error is SocketException) {
        _error = "No connection, please try again ....!";
      } else if (error.type == DioErrorType.connectTimeout) {
        _error = "Connection timed out ....!";
      } else {}
    }
    return _error;
  }
}

extension ColorExtension on String {
  Color toColor() {
    var hexString = this;
    final buffer = StringBuffer();
    if (hexString.length == 6 || hexString.length == 7) buffer.write('ff',);
    buffer.write(hexString.replaceFirst('#', '',),);
    return Color(int.parse(buffer.toString(), radix: 16,),);
  }
}