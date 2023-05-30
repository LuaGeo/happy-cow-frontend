import MapView, { Marker } from "react-native-maps";
import { getRestaurantCategory } from "../utils/getRestaurantCategory";

export const MapScreen = ({ restaurants }) => {
  const markers = restaurants.map((marker) => {
    return {
      id: marker._id,
      latitude: marker.location.lat,
      longitude: marker.location.lng,
      title: marker.name,
      description: marker.description,
      markerType: marker.type,
    };
  });

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 48.856614,
        longitude: 2.3522219,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      }}
      showsUserLocation={true}
    >
      {markers.map((marker) => {
        const markerImage = getRestaurantCategory(marker.markerType);

        return (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
            description={marker.description}
            image={markerImage}
          />
        );
      })}
    </MapView>
  );
};
