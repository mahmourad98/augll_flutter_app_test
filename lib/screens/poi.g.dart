// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'poi.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Poi _$PoiFromJson(Map<String, dynamic> json,) {
  return Poi(
    id: json['id'] as int,
    name: json['name'] as String,
    description: json['description'] as String,
    latitude: (json['latitude'] as num).toDouble(),
    longitude: (json['longitude'] as num).toDouble(),
    altitude: (json['altitude'] as num).toDouble(),
    placeImageUrl: json['placeImageUrl'] as String,
  );
}

Map<String, dynamic> _$PoiToJson(Poi instance,) {
  return <String, dynamic>{
    'id': instance.id,
    'name': instance.name,
    'description': instance.description,
    'longitude': instance.longitude,
    'latitude': instance.latitude,
    'altitude': instance.altitude,
    'placeImageUrl' : instance.placeImageUrl,
  };
}
