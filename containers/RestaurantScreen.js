import { Text, Image, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import axios from "axios";
import { getRestaurantCategory } from "../utils/getRestaurantCategory";
import { displayStars } from "../utils/displayStars";
import { displayPriceRate } from "../utils/displayPriceRate";

export const RestaurantScreen = () => {
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

  return isLoading ? (
    <Text>Loading...</Text>
  ) : (
    <View>
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
      {displayPriceRate(item.price)}
    </View>
  );
};
