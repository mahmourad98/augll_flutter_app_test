import 'package:flutter/material.dart';

typedef PagingAsyncCallback<T> = Future<T> Function(
  int pageIndex, int pageSize, bool firstTime,
);
typedef PagingOnEndRetrievingCallback<T> = void Function(List<T>, bool firstTime,);

class PaginationUtil<T> {
  ///  The type inside list [T]
  bool _isLastPage = false;
  bool get isLastPage => _isLastPage;

  bool _isFirstTime = true;
  bool get isFirstTime => _isFirstTime;

  late ScrollController _scrollController;
  ScrollController get scrollController => _scrollController;

  /// Limit size [pageSize]
  final int pageSize;

  /// Offset portion [pageIndex]
  int _pageIndex = 0;
  int get pageIndex => _pageIndex;

  /// Timeout Duration
  int timeOutDuration;

  ///Main future [pagingFuture]
  final PagingAsyncCallback<List<T>> _pagingFuture;

  ///On success callback, call in case of success request
  final PagingOnEndRetrievingCallback<T> _onEndRetrievingCallback;

  ///Timeout duration in seconds [timeOutDuration]
  PaginationUtil(
    this._pagingFuture, this._onEndRetrievingCallback, this.pageSize,
    {this.timeOutDuration = 30,}
  ) {
    {
      /// scroll controller initialization
      _scrollController = ScrollController()..addListener(() => getPagingData(),);
    }

    {
      ///Fist Time paging call
      getPagingData();
    }
  }

  /// Data list [data]
  final List<T> _data = <T>[];
  List<T> get data => _data;

  /// Get the paginated data [getPagingData]
  void getPagingData() async {
    if (_firingPagingCallback()) {
      await _publicGetPagingData();
    }
  }

  Future<void> _publicGetPagingData() async {
    await _pagingFuture(_pageIndex, pageSize, _isFirstTime = (_pageIndex == 0),)
        .then(
          (value) {
            ///Add data to list
            _data.addAll(value,);

            ///Check the last page
            _isLastPage = value.length < pageSize;

            /// Increasing page index
            _pageIndex++;

            ///On end retrieving callback
            _onEndRetrievingCallback(_data, _isFirstTime,);

            ///When no more data
          }
        )
        .catchError((e,) => throw Exception(e,),)
        .timeout(
          Duration(seconds: timeOutDuration,),
          onTimeout: () => throw Exception("Timeout exception",),
        );
  }

  bool _firingPagingCallback() {
    return (_pageIndex == 0) || (!_isLastPage && _triggeringScrollActions);
  }

  ///When to triggering scroll actions
  bool get _triggeringScrollActions =>
      _scrollController.position.pixels ==
      _scrollController.position.maxScrollExtent;

  ///Reset pagination
  void restPaging() => {_pageIndex = 0, _data.clear(),};

  Future restPagingWithNewInitialCall() async{
    _pageIndex = 0;
    _data.clear();
    getPagingData();
  }
}
