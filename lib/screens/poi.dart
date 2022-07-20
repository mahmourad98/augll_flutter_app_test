import 'package:json_annotation/json_annotation.dart';

part 'poi.g.dart';

@JsonSerializable()
class Poi {
  int id;
  String name;
  String description;
  double latitude;
  double longitude;
  double altitude;
  String placeImageUrl;

  Poi({
    required this.id,
    required this.name,
    required this.description,
    required this.latitude,
    required this.longitude,
    required this.altitude,
    required this.placeImageUrl,
  });

  factory Poi.fromJson(Map<String, dynamic> json,) => _$PoiFromJson(json,);

  Map<String, dynamic> toJson() => _$PoiToJson(this,);
}