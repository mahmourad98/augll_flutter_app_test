import 'branch_dto.dart';

class BranchesPointInfoDto {
  late final BranchesPointInfo branchesPointInfo;
  Map<String, dynamic> __origJson = {};

  BranchesPointInfoDto({
    required this.branchesPointInfo,
  });

  BranchesPointInfoDto.fromJson(Map<String, dynamic> json,) {
    __origJson = json;
    branchesPointInfo = BranchesPointInfo.fromJson(json['branches'],);
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['branches'] = branchesPointInfo.toJson();
    __origJson = _data;
    return _data;
  }

  Map<String, dynamic> origJson() => __origJson;
}

class BranchesPointInfo {
  final List<BranchItem> items;

  BranchesPointInfo({
    required this.items,
  });

  factory BranchesPointInfo.fromJson(Map<String, dynamic> json) {
    return BranchesPointInfo(
      items: List.from(json['items'],).map<BranchItem>((e,) => BranchItem.fromJson(e,),).toList(),
    );
  }

  Map<String, dynamic> toJson() {
    return <String, dynamic>{
      'items' : this.items.map((e,) => e.toJson(),).toList(),
    };
  }

  @override
  String toString() {
    return "BranchesPointInfo(items: ${this.items.iterator.current.toString()})";
  }
}