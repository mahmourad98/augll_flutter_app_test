import 'branch_category_dto.dart';

class BranchesInfoDto {
  late final BranchesInfo branches;
  Map<String, dynamic> __origJson = {};

  BranchesInfoDto({
    required this.branches,
  });

  BranchesInfoDto.fromJson(Map<String, dynamic> json) {
    __origJson = json;
    branches = BranchesInfo.fromJson(json['branches'],);
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['branches'] = branches.toJson();
    __origJson = _data;
    return _data;
  }

  Map<String, dynamic> origJson() => __origJson;
}

class BranchesInfo {
  final List<BranchItem> items;
  final int pageIndex;
  final int pageSize;
  final int totalCount;
  final int totalCountPerPage;
  final int totalPages;
  final bool hasPreviousPage;
  final bool hasNextPage;

  BranchesInfo({
    required this.items,
    required this.pageIndex,
    required this.pageSize,
    required this.totalCount,
    required this.totalCountPerPage,
    required this.totalPages,
    required this.hasPreviousPage,
    required this.hasNextPage,
  });

  factory BranchesInfo.fromJson(Map<String, dynamic> json) {
    return BranchesInfo(
      items: List.from(json['items'],).map<BranchItem>((e,) => BranchItem.fromJson(e,),).toList(),
      pageIndex: json['pageIndex'] as int,
      pageSize: json['pageSize'] as int,
      totalCount: json['totalCount'] as int,
      totalCountPerPage: json['totalCountPerPage'] as int,
      totalPages: json['totalPages'] as int,
      hasPreviousPage: json['hasPreviousPage'] as bool,
      hasNextPage: json['hasNextPage'] as bool,
    );
  }

  Map<String, dynamic> toJson() {
    return <String, dynamic>{
      'items' : this.items.map((e,) => e.toJson(),).toList(),
      'pageIndex': this.pageIndex,
      'pageSize': this.pageSize,
      'totalCount': this.totalCount,
      'totalCountPerPage': this.totalCountPerPage,
      'totalPages': this.totalPages,
      'hasPreviousPage': this.hasPreviousPage,
      'hasNextPage': this.hasNextPage,
    };
  }
}

class BranchItem {
  final int id;
  final String businessName;
  final String branchName;
  final String address;
  final String businessLogoUrl;
  final BranchesCategory category;
  final BranchCoordinate coordinate;
  final BranchOffer? offer;

  BranchItem({
    required this.id,
    required this.businessName,
    required this.branchName,
    required this.address,
    required this.businessLogoUrl,
    required this.category,
    required this.coordinate,
    this.offer,
  });

  factory BranchItem.fromJson(Map<String, dynamic> json) {
    return BranchItem(
        id: json['id'],
        businessName: json['businessName'],
        branchName: json['branchName'],
        address: json['address'],
        businessLogoUrl: json['businessLogoUrl'],
        category: BranchesCategory.fromJson(json['category'],),
        coordinate: BranchCoordinate.fromJson(json['coordinate'],),
        offer: (json['offer'] != null) ? BranchOffer.fromJson(json['offer'],) : null
    );
  }

  Map<String, dynamic> toJson() {
    return <String, dynamic>{
      'id': this.id,
      'businessName': this.businessName,
      'branchName': this.branchName,
      'address': this.address,
      'businessLogoUrl': this.businessLogoUrl,
      'category': this.category.toJson(),
      'coordinate': this.coordinate.toJson(),
      if(this.offer != null) ...{
        'offer': this.offer!.toJson(),
      }
    };
  }
}

class BranchCoordinate {
  final double longitude;
  final double latitude;
  final double distancePerKm;

  BranchCoordinate({
    required this.longitude,
    required this.latitude,
    required this.distancePerKm,
  });


  factory BranchCoordinate.fromJson(Map<String, dynamic> json,) {
    return BranchCoordinate(
      longitude: json['longitude'],
      latitude: json['latitude'],
      distancePerKm: json['distancePerKm'],
    );
  }

  Map<String, dynamic> toJson() {
    return <String, dynamic>{
      'longitude': this.longitude,
      'latitude': this.latitude,
      'distancePerKm': this.distancePerKm,
    };
  }
}

class BranchOffer {
  final String offerDateFrom;
  final String offerDateTo;

  BranchOffer({
    required this.offerDateFrom,
    required this.offerDateTo,
  });


  factory BranchOffer.fromJson(Map<String, dynamic> json,) {
    return BranchOffer(
      offerDateFrom: json['offerDateFrom'],
      offerDateTo: json['offerDateTo'],
    );
  }

  Map<String, dynamic> toJson() {
    return <String, dynamic>{
      'offerDateFrom': this.offerDateFrom,
      'offerDateTo': this.offerDateTo,
    };
  }
}
