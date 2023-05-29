import { Text, Image, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import axios from "axios";
import { category } from "../utils/category";

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
      <Text>{restaurant.name}</Text>

      <Text>{category(restaurant.type)}</Text>
      <Image source={require("../assets/imgs/category_b-b.png")} />

      {/* <Image source={require(category(restaurant.type))} /> */}
    </View>
  );
};
