class CommonResponseModel<T> {
  T? data;
  bool? status;
  Map? errors;
  Map<String, dynamic> __origJson = {};

  CommonResponseModel({
    this.data,
    this.status,
    this.errors,
  });
  CommonResponseModel.fromJson(Map<String, dynamic> json) {
    __origJson = json;
    data = json['data'];
    status = json['status'] as bool;
    errors = json['errors'];
  }

  Map<String, dynamic> origJson() => __origJson;
}
