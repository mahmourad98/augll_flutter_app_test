import 'dart:io';
import 'dart:math';
import 'package:dartz/dartz.dart';
import 'package:dio/dio.dart';
import 'package:get_it/get_it.dart';
import 'package:location/location.dart';
import '../../app/service_locator.dart';
import 'package:flutter/material.dart';
import '../../domain/network/dio_depepency/dio_network_util.dart';
import '../../models/app_level/common_response_model.dart';
import '../../models/auth_feature/user_dto.dart';
import '../../models/branches_feature/ar_branch_dto.dart';
import '../../models/branches_feature/branch_category_dto.dart';
import '../../models/branches_feature/branch_details_dto.dart';
import '../../models/branches_feature/branch_dto.dart';
import 'package:hive/hive.dart';

class BranchesEndPoints extends EndPointHelper {
  String get getBranches => v1 + businessBranchesRoute + "/GetBranches";
  String get getCategories => v1 + businessBranchesRoute + "/GetCategories";
  String get getBranchDetails =>
      v1 + businessBranchesRoute + "/GetBranchDetails";
  String get getBranchesPoi => 'https://1bd1faa2-73a5-4824-9d60-0f79d2ae76eb.mock.pstmn.io/getBranchesPoi';
}

class BranchesRepo extends GeneralRepoHelper {
  final branchesEndPoint = BranchesEndPoints();

  ///
  ///[GetBranches]
  Future<Either<dynamic, List<BranchItem>>> paginatedBranchesRequest(
    int pageIndex, int pageSize, String? searchText,
    {LocationData? locationData, Map selectedCategories = const {},}
  ) async{
    return getRequest<List<BranchItem>>(
      branchesEndPoint.getBranches.getProperUrl(
        pageIndex: pageIndex,
        pageSize: pageSize,
        params: {
          if (searchText != null) ParamsConstants.searchText: searchText,
          if (locationData != null) ...{
            ParamsConstants.lat: locationData.latitude,
            ParamsConstants.lng: locationData.longitude,
          },
          if (selectedCategories.isNotEmpty) ...selectedCategories
        },
      ),
      (json,) => BranchesInfoDto.fromJson(json,).branches.items,
      authRequest: false,
    );
  }

  ///[GetCategories]
  Future<Either<dynamic, BranchesCategoriesDto>> getCategoriesOfBranchesRequest() async{
    return getRequest<BranchesCategoriesDto>(
      branchesEndPoint.getCategories.getProperUrl(),
      (json,) => BranchesCategoriesDto.fromJson(json,),
      authRequest: false,
    );
  }

  ///[GetBranchDetails]
  Future<Either<dynamic, BranchDetailsDto>> getBranchDetailsRequest(
    String id, {LocationData? locationData,}
  ) async{
    return getRequest<BranchDetailsDto>(
      branchesEndPoint.getBranchDetails.getProperUrl(
        params: {
          ParamsConstants.id: id,
          if (locationData != null) ...{
            ParamsConstants.lat: locationData.latitude,
            ParamsConstants.lng: locationData.longitude,
          }
        },
      ),
      (json,) => BranchDetailsDto.fromJson(json,),
      authRequest: false,
    );
  }

  ///[GetBranchesPoi] for augmented reality
  Future<Either<dynamic, BranchesPointInfoDto>> getBranchesPointRequest(
    {required LocationData locationData,}
  ) async{
    return getRequest<BranchesPointInfoDto>(
      branchesEndPoint.getBranchesPoi.getProperUrl(
        params: {
          ParamsConstants.lat: locationData.latitude,
          ParamsConstants.lng: locationData.longitude,
        }
      ),
      (json,) => BranchesPointInfoDto.fromJson(json,),
      authRequest: false,
    );
  }

  ///[DownloadBranchCatalog]
  Future<bool> downloadBranchCatalogRequest(String url, String fileName,) async =>
      downloadFileRequest(url, fileName,);
}

class EndPointHelper {
  ///Versions
  String get v1 => "/v1";
  String get v2 => "/v2";
  String get v3 => "/v3";
  String get v4 => "/v4";

  ///Routes
  String get authRoute => "/Auth";
  String get businessBranchesRoute => "/BusinessBranches";
}

class GeneralRepoHelper {
  final _dio = locator<DioNetworkUtil>();
  final headers = {
    HttpHeaders.acceptHeader: "text/plain",
    HttpHeaders.contentTypeHeader: "application/json",
  };

  @protected
  failureResponse<T>(error) => Left<dynamic, T>(error);
  @protected
  errorResponse<T>(Map errors) => Left<Map, T>(errors);
  @protected
  Future<Map<String, String>> getAuthHeaders() async {
    return await HiveUserBoxService.getUserInfo().then((value) => {
      ...headers,
      HttpHeaders.authorizationHeader:
      ["Bearer", value.accessToken].join(" ")
    });
  }

  /// Generic GetRequest [getRequest]
  @protected
  Future<Either<dynamic, T>> getRequest<T>(
    String url, T Function(Map<String, dynamic>) fromJson,
    {bool authRequest = false,}
  ) async{
    ///
    Map<String, dynamic> _headers = headers;

    ///Auth headers
    if (authRequest) {
      _headers.addAll(await getAuthHeaders(),);
    }
    try {
      return _dio.getHttp<Map<String, dynamic>>(
        url, options: Options(headers: _headers,),
      ).then(
        (value,) => value.fold(
          /// Network layer error
          (l,) => failureResponse<T>(l,),
          (r,) {
            final response = CommonResponseModel<Map<String, dynamic>>.fromJson(r,);
            if (response.status ?? false) {
              return Right(fromJson(response.data ?? {},),);
            }
            else {
              ///Response wrapper Logic error
              return errorResponse<T>(response.errors ?? {},);
            }
          }
        ),
      );
    } on Exception catch (e) {
      e.exceptionErrorLog("GeneralRepoHelperException",);

      /// Another exception error
      return failureResponse<T>(e,);
    }
  }

  /// Generic PostRequest [postRequest]
  @protected
  Future<Either<dynamic, T>> postRequest<T>(
    String url, Map<String, dynamic> body, T Function(Map<String, dynamic>) fromJson,
    {bool authRequest = false,}
  ) async{
    ///
    Map<String, dynamic> _headers = headers;

    ///Auth headers
    if (authRequest) {
      _headers.addAll(await getAuthHeaders(),);
    }
    try {
      return _dio.postHttp<Map<String, dynamic>>(
        url, body, options: Options(headers: _headers,),
      ).then(
        (value,) => value.fold(
          ///network layer error
          (l,) => failureResponse<T>(l,),
          (r,) {
            final response = CommonResponseModel<Map<String, dynamic>>.fromJson(r,);
            if (response.status ?? false) {
              return Right(fromJson(response.data ?? {},),);
            }
            else {
              ///Response wrapper Logic error
              return errorResponse<T>(response.errors ?? {},);
            }
          },
        ),
      );
    } on Exception catch (e) {
      e.exceptionErrorLog("GeneralRepoHelperException",);

      /// Another exception error
      return failureResponse<T>(e,);
    }
  }

  @protected
  Future<bool> downloadFileRequest(
    String url, String fileName,
    {void Function(int, int,)? onReceiveProgress,}
  ) => _dio.downloadFile(url, fileName, onReceiveProgress: onReceiveProgress,);
}

extension PaginatedUrl on String {
  String getProperUrl({int? pageIndex, int? pageSize, Map? params,}) {
    final _urlBuffer = StringBuffer()..write(this,);

    ///Params object
    final _params = {
      if (pageIndex != null) ParamsConstants.pageIndex: pageIndex.toString(),
      if (pageSize != null) ParamsConstants.pageSize: pageSize.toString(),
      if (params != null) ...params,
    };

    if (_params.isNotEmpty) {
      _urlBuffer.write("?" + _params.toString().replaceAll(", ", "&",).replaceAll(": ", "=",).replaceAll("{", "",).replaceAll("}", "",),);
    }

    final _url = _urlBuffer.toString();
    return _url;
  }
}

class ParamsConstants {
  static const pageIndex = "pageIndex";
  static const pageSize = "pageSize";
  static const searchText = "searchText";
  static const id = "id";
  static const lat = "lat";
  static const lng = "lng";
  static const category = "category";
}

class HiveUserBoxService {
  static const _className = "HiveUserBoxService";
  static const _hiveUserBoxName = "USER_BOX";

  ///User-Info
  static Future setAuthUserInfo(Map<String, dynamic> userJson) async {
    try {
      HiveStorageController.putData<Map<String, dynamic>>(
          boxName: _hiveUserBoxName,
          key: HiveBoxConsts.userHiveBoxObject,
          value: userJson);
    } on Exception catch (e) {
      e.exceptionErrorLog(_className);
    }
  }

  static Future<UserDto> getUserInfo() async {
    try {
      return UserDto.fromJson(Map.from(await HiveStorageController.getData(
          boxName: _hiveUserBoxName,
          key: HiveBoxConsts.userHiveBoxObject,
          nullAwareValue: UserDto().toJson())));
    } on Exception catch (e) {
      e.exceptionErrorLog(_className);
      return UserDto();
    }
  }

  static Future<bool> resetLocalDB() async {
    try {
      return await HiveStorageController.resetHiveBoxDB(_hiveUserBoxName,) == 1;
    } on Exception catch (e) {
      e.exceptionErrorLog(_className,);
      return false;
    }
  }
}

class HiveStorageController {
  ///Put key value pairs data [putData]
  static Future putData<E>({
    required String boxName, required String key, required E value,
  }) async{
    final _hiveBox = await Hive.openBox(boxName,);
    await _hiveBox.put(key, value,);
  }

  ///Get data [getData]
  static Future<E> getData<E>({
    required String boxName,
    required String key,
    required E nullAwareValue,
  }) async{
    final _hiveBox = await Hive.openBox(boxName,);
    return await _hiveBox.get(key, defaultValue: nullAwareValue,);
  }

  static Future<int> resetHiveBoxDB(String boxName,) async {
    final _hiveBox = await Hive.openBox(boxName,);
    return await _hiveBox.clear();
  }
}

class HiveBoxConsts {
  static const userHiveBoxObject = "USER_OBJECT";
  static const envHiveBoxObject = "ENV_OBJECT";
}
