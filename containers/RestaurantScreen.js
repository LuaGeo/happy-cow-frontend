import {
  Text,
  Image,
  View,
  ScrollView,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import axios from "axios";
import { getRestaurantCategory } from "../utils/getRestaurantCategory";
import { displayStars } from "../utils/displayStars";
import { displayPriceRate } from "../utils/displayPriceRate";
import MapView, { Marker } from "react-native-maps";

export const RestaurantScreen = () => {
  const styles = useStyle();

  const route = useRoute();
  const { id } = route.params;

  const [restaurant, setRestaurant] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchRestaurant = async () => {
        const response = await axios.get(
          `https://site--happy-cow-backend--6v4khcscf8qp.code.run/restaurant/${id}`
        );
        console.log(response.data);
        setRestaurant(response.data);

        setIsLoading(false);
      };
      fetchRestaurant();
    } catch (error) {
      console.log(error);
    }
  }, []);
  // const markerImage = getRestaurantCategory(restaurant.type);
  // console.log(restaurant.type);
  // console.log(markerImage);

  return isLoading ? (
    <Text>Loading...</Text>
  ) : (
    <ScrollView>
      <Image
        source={{ uri: restaurant.thumbnail }}
        style={{ width: 200, height: 200 }}
      />

      <Image
        source={getRestaurantCategory(restaurant.type)}
        style={{ width: 30, height: 30 }}
      />
      <Text>{restaurant.name}</Text>
      <Text>{displayStars(restaurant.rating)}</Text>
      {displayPriceRate(restaurant.price)}
      <Text>{restaurant.description}</Text>

      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: restaurant.location.lat,
          longitude: restaurant.location.lng,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        showsUserLocation={true}
      >
        <Marker
          key={restaurant._id}
          coordinate={{
            latitude: restaurant.location.lat,
            longitude: restaurant.location.lng,
          }}
          // title={restaurant.title}
          // description={restaurant.description}
          image={getRestaurantCategory(restaurant.type)}
        />
      </MapView>
    </ScrollView>
  );
};

const useStyle = () => {
  const { height, width } = useWindowDimensions();
  const styles = StyleSheet.create({
    mapView: { width: width, height: 300 },
  });
  return styles;
};
