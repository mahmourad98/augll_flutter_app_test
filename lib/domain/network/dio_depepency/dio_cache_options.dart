import 'package:dio_cache_interceptor/dio_cache_interceptor.dart';

class DioCacheOptions {
  static CacheOptions getOptions() =>
      CacheOptions(store: MemCacheStore(), hitCacheOnErrorExcept: []);
}
