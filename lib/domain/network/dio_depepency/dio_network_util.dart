import 'dart:convert';
import 'dart:io';
import 'package:augll_project/app/app.logger.dart';
import 'package:bot_toast/bot_toast.dart';
import 'package:open_file/open_file.dart' as openfile;
import 'package:path/path.dart' as p;
import 'package:dartz/dartz.dart';
import 'package:dio/dio.dart';
import 'package:path_provider/path_provider.dart';
import 'package:pretty_dio_logger/pretty_dio_logger.dart';
import 'package:requests_inspector/requests_inspector.dart';
import 'dart:io' as io;
import '../../../app/service_locator.dart';

class DioNetworkUtil {
  final className = "DioNetworkUtil";
  final jsonCodec = const JsonDecoder();
  late Dio dio;
  late BaseOptions baseOptions;


  DioNetworkUtil() {
    dio = Dio();
    baseOptions = BaseOptions(
      baseUrl: "https://augll-development.nbsventure.com/api",
    );
    dio.interceptors.addAll([PrettyDioLogger(), RequestsInspectorInterceptor(),]);
    dio.options = baseOptions;
  }

  Future<Either<bool, T>> postHttp<T>(String url, Map<String, dynamic> body,
      {List<Interceptor>? interceptors, Options? options}) async {
    /// Add request interceptors [interceptors]
    if (interceptors != null) {
      dio.interceptors.addAll(interceptors);
    }
    late Response response;
    try {
      response = await dio.post<T>(
        url,
        data: jsonEncode(body),
        options: options,
      );
      if (response.statusCode == HttpStatus.ok) {
        return Right(response.data);
      } else {
        return const Left(false);
      }
    } catch (e) {
      ///All exceptions when using Dio, must be dio-error
      if (e is DioError) {
        e.networkExceptionHandler();
      }

      return const Left(false);
    }
  }

  Future<Either<dynamic, T>> getHttp<T>(String url,
      {List<Interceptor>? interceptors, Options? options}) async {
    /// Add request interceptors [interceptors]
    if (interceptors != null) {
      dio.interceptors.addAll(interceptors);
    }
    late Response response;
    try {
      response = await dio.get<T>(
        url,
        options: options,
      );
      if (response.statusCode == HttpStatus.ok) {
        return Right(response.data);
      } else {
        return const Left(false);
      }
    } catch (e) {
      ///All exceptions when using Dio, must be dio-error
      if (e is DioError) {
        e.networkExceptionHandler();
      }

      return Left(e);
    }
  }

  Future<bool> downloadFile(String url, String fileName,
      {List<Interceptor>? interceptors, void Function(int, int,)? onReceiveProgress}) async {
    /// Add request interceptors [interceptors]
    try {
      if (interceptors != null) {
        dio.interceptors.addAll(interceptors);
      }

      ///Get tempdirectory
      final _dir = await getExternalStorageDirectory();
      if (_dir is Directory) {
        var downloadDir = await io.Directory('${_dir.path}/downloads')
            .create(recursive: true);

        final _fileName = fileName.replaceAll(" ", "");
        final _fileExtention = p.extension(url);

        ///Path you need to store this file and open it
        final _fileInfo = "${downloadDir.path}/$_fileName" + _fileExtention;
        await dio.download(
          url,
          _fileInfo,
          onReceiveProgress: onReceiveProgress,
        );

        await openfile.OpenFile.open(
          _fileInfo,
        );
        return true;
      } else {
        return false;
      }
    } catch (e) {
      ///All exceptions when using Dio, must be dio-error
      if (e is DioError) {
        e.networkExceptionHandler();
      } else {
        e.exceptionErrorLog(className,);
      }
      return false;
    }
  }
}

extension NetworkExceptionHandler on DioError {
  void networkExceptionHandler() async {
    await Future.delayed(const Duration(seconds: 1));
    BotToast.closeAllLoading();
    final _err = this;

    if (_err.error is SocketException) {
      BotToast.showText(text: "No connection, please try again ....!",);
    }
    else if (_err.type == DioErrorType.connectTimeout) {
      BotToast.showText(text: "Connection timed out ....!",);
    } else {}
  }
}

extension Logger on dynamic {
  void log(String className,) => getLogger(className,).i(this,);
  void logicErrorLog(String className,) => getLogger(className,).d(this,);
  void exceptionErrorLog(String className,) {
    final error = this;
    getLogger(className,).e(error.toString(),);
  }
}
