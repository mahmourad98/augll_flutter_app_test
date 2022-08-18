class BranchesCategoriesDto {
   late final List<BranchesCategory> branchesCategories;

  BranchesCategoriesDto({
    required this.branchesCategories,
  });

  BranchesCategoriesDto.fromJson(Map<String, dynamic> json,) {
    branchesCategories = List.from(json['categories'] ?? [],)
        .map((e,) => BranchesCategory.fromJson(e,))
        .toList();
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['categories'] = branchesCategories.map((e,) => e.toJson(),).toList();
    return _data;
  }
}

class BranchesCategory {
  final int id;
  final String name;
  final String iconUrl;
  final String fillColor;

  BranchesCategory({
    required this.id,
    required this.name,
    required this.iconUrl,
    required this.fillColor,
  });

  factory BranchesCategory.fromJson(Map<String, dynamic> json,) {
    return BranchesCategory(
      id: json['id'] as int,
      name: json['name'] as String,
      iconUrl: json['iconUrl'] as String,
      fillColor: json['fillColor'] as String,
    );
  }

  Map<String, dynamic> toJson() {
    return <String, dynamic>{
      'id': this.id,
      'name': this.name,
      'iconUrl': this.iconUrl,
      'fillColor': this.fillColor,
    };
  }

  @override
  String toString() {
    super.toString();
    return "BranchesCategory(id: ${this.id}, name: ${this.name}, iconUrl: ${this.iconUrl}, fillColor: ${this.fillColor},)";
  }
}
