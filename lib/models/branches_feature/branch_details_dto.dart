class BranchDetailsDto {
  int? id;
  String? businessName;
  String? branchName;
  String? address;
  String? contactNumber;
  String? website;
  String? businessLogoUrl;
  String? branchCatalogUrl;
  BranchDetailsDtoCategory? category;
  BranchDetailsDtoCoordinate? coordinate;
  BranchDetailsDtoOperationalTime? saturdayOperationalTime;
  BranchDetailsDtoOperationalTime? sundayOperationalTime;
  BranchDetailsDtoOperationalTime? mondayOperationalTime;
  BranchDetailsDtoOperationalTime? tuesdayOperationalTime;
  BranchDetailsDtoOperationalTime? wednesdayOperationalTime;
  BranchDetailsDtoOperationalTime? thursdayOperationalTime;
  BranchDetailsDtoOperationalTime? fridayOperationalTime;
  Map<String, dynamic> __origJson = {};

  BranchDetailsDto({
    this.id,
    this.businessName,
    this.branchName,
    this.address,
    this.contactNumber,
    this.website,
    this.businessLogoUrl,
    this.branchCatalogUrl,
    this.category,
    this.coordinate,
    this.saturdayOperationalTime,
    this.sundayOperationalTime,
    this.mondayOperationalTime,
    this.tuesdayOperationalTime,
    this.wednesdayOperationalTime,
    this.thursdayOperationalTime,
    this.fridayOperationalTime,
  });

  BranchDetailsDto.fromJson(Map<String, dynamic> json) {
    __origJson = json;
    id = int.tryParse(json['id']?.toString() ?? '');
    businessName = json['businessName']?.toString();
    branchName = json['branchName']?.toString();
    address = json['address']?.toString();
    contactNumber = json['contactNumber']?.toString();
    website = json['website']?.toString();
    businessLogoUrl = json['businessLogoUrl']?.toString();
    branchCatalogUrl = json['branchCatalogUrl']?.toString();
    category = (json['category'] != null && (json['category'] is Map))
        ? BranchDetailsDtoCategory.fromJson(json['category'])
        : null;
    coordinate = (json['coordinate'] != null && (json['coordinate'] is Map))
        ? BranchDetailsDtoCoordinate.fromJson(json['coordinate'])
        : null;
    saturdayOperationalTime = (json['saturdayOperationalTime'] != null &&
        (json['saturdayOperationalTime'] is Map))
        ? BranchDetailsDtoOperationalTime.fromJson(
        json['saturdayOperationalTime'])
        : null;
    sundayOperationalTime = (json['sundayOperationalTime'] != null &&
        (json['sundayOperationalTime'] is Map))
        ? BranchDetailsDtoOperationalTime.fromJson(
        json['sundayOperationalTime'])
        : null;
    mondayOperationalTime = (json['mondayOperationalTime'] != null &&
        (json['mondayOperationalTime'] is Map))
        ? BranchDetailsDtoOperationalTime.fromJson(
        json['mondayOperationalTime'])
        : null;
    tuesdayOperationalTime = (json['tuesdayOperationalTime'] != null &&
        (json['tuesdayOperationalTime'] is Map))
        ? BranchDetailsDtoOperationalTime.fromJson(
        json['tuesdayOperationalTime'])
        : null;
    wednesdayOperationalTime = (json['wednesdayOperationalTime'] != null &&
        (json['wednesdayOperationalTime'] is Map))
        ? BranchDetailsDtoOperationalTime.fromJson(
        json['wednesdayOperationalTime'])
        : null;
    thursdayOperationalTime = (json['thursdayOperationalTime'] != null &&
        (json['thursdayOperationalTime'] is Map))
        ? BranchDetailsDtoOperationalTime.fromJson(
        json['thursdayOperationalTime'])
        : null;
    fridayOperationalTime = (json['fridayOperationalTime'] != null &&
        (json['fridayOperationalTime'] is Map))
        ? BranchDetailsDtoOperationalTime.fromJson(
        json['fridayOperationalTime'])
        : null;
  }
  Map<String, dynamic> toJson() {
    final data = <String, dynamic>{};
    data['id'] = id;
    data['businessName'] = businessName;
    data['branchName'] = branchName;
    data['address'] = address;
    data['contactNumber'] = contactNumber;
    data['website'] = website;
    data['businessLogoUrl'] = businessLogoUrl;
    data['branchCatalogUrl'] = branchCatalogUrl;
    if (category != null) {
      data['category'] = category!.toJson();
    }
    if (coordinate != null) {
      data['coordinate'] = coordinate!.toJson();
    }
    if (saturdayOperationalTime != null) {
      data['saturdayOperationalTime'] = saturdayOperationalTime!.toJson();
    }
    if (sundayOperationalTime != null) {
      data['sundayOperationalTime'] = sundayOperationalTime!.toJson();
    }
    if (mondayOperationalTime != null) {
      data['mondayOperationalTime'] = mondayOperationalTime!.toJson();
    }
    if (tuesdayOperationalTime != null) {
      data['tuesdayOperationalTime'] = tuesdayOperationalTime!.toJson();
    }
    if (wednesdayOperationalTime != null) {
      data['wednesdayOperationalTime'] = wednesdayOperationalTime!.toJson();
    }
    if (thursdayOperationalTime != null) {
      data['thursdayOperationalTime'] = thursdayOperationalTime!.toJson();
    }
    if (fridayOperationalTime != null) {
      data['fridayOperationalTime'] = fridayOperationalTime!.toJson();
    }
    return data;
  }

  Map<String, dynamic> origJson() => __origJson;
}

class BranchDetailsDtoOperationalTime {
  bool? isOn;
  String? from;
  String? to;
  Map<String, dynamic> __origJson = {};

  BranchDetailsDtoOperationalTime({
    this.isOn,
    this.from,
    this.to,
  });
  BranchDetailsDtoOperationalTime.fromJson(Map<String, dynamic> json) {
    __origJson = json;
    isOn = json['isOn'];
    from = json['from']?.toString();
    to = json['to']?.toString();
  }
  Map<String, dynamic> toJson() {
    final data = <String, dynamic>{};
    data['isOn'] = isOn;
    data['from'] = from;
    data['to'] = to;
    return data;
  }

  Map<String, dynamic> origJson() => __origJson;
}

class BranchDetailsDtoCoordinate {
  double? longitude;
  double? latitude;
  double? distancePerKm;
  Map<String, dynamic> __origJson = {};

  BranchDetailsDtoCoordinate({
    this.longitude,
    this.latitude,
    this.distancePerKm,
  });

  BranchDetailsDtoCoordinate.fromJson(Map<String, dynamic> json,) {
    __origJson = json;
    longitude = double.tryParse(json['longitude']?.toString() ?? '');
    latitude = double.tryParse(json['latitude']?.toString() ?? '');
    distancePerKm = double.tryParse(json['distancePerKm']?.toString() ?? '');
  }

  Map<String, dynamic> toJson() {
    final data = <String, dynamic>{};
    data['longitude'] = longitude;
    data['latitude'] = latitude;
    data['distancePerKm'] = distancePerKm;
    return data;
  }

  Map<String, dynamic> origJson() => __origJson;
}



class BranchDetailsDtoCategory {
  int? id;
  String? name;
  String? iconUrl;
  String? fillColor;
  Map<String, dynamic> __origJson = {};

  BranchDetailsDtoCategory({
    required this.id,
    required this.name,
    required this.iconUrl,
    required this.fillColor,
  });

  BranchDetailsDtoCategory.fromJson(Map<String, dynamic> json,) {
    __origJson = json;
    id = int.tryParse(json['id']?.toString() ?? '');
    name = json['name']?.toString();
    iconUrl = json['iconUrl']?.toString();
    fillColor = json['fillColor']?.toString();
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['id'] = id;
    _data['name'] = name;
    _data['iconUrl'] = iconUrl;
    _data['fillColor'] = fillColor;
    __origJson = _data;
    return _data;
  }

  Map<String, dynamic> origJson() => __origJson;
}
