class UserDto {
  String? fullName;
  String? phoneNumber;
  String? avatarUrl;
  String? accessToken;
  Map<String, dynamic> __origJson = {};

  UserDto({
    this.fullName,
    this.phoneNumber,
    this.avatarUrl,
    this.accessToken,
  });
  UserDto.fromJson(Map<String, dynamic> json) {
    __origJson = json;
    fullName = json['fullName']?.toString();
    phoneNumber = json['phonerNumber']?.toString();
    avatarUrl = json['avatarUrl']?.toString();
    accessToken = json['accessToken']?.toString();
  }
  Map<String, dynamic> toJson() {
    final data = <String, dynamic>{};
    data['fullName'] = fullName;
    data['phonerNumber'] = phoneNumber;
    data['avatarUrl'] = avatarUrl;
    data['accessToken'] = accessToken;
    return data;
  }

  Map<String, dynamic> origJson() => __origJson;
}
