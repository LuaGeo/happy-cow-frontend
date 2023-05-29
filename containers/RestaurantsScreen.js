import { View, FlatList } from "react-native";
import { RestaurantCard } from "../components/RestaurantCard";

export const RestaurantsScreen = ({ restaurants }) => {
  //   console.log(restaurants);
  return (
    <View>
      <FlatList
        data={restaurants}
        keyExtractor={(restaurants) => String(restaurants._id)}
        renderItem={({ item }) => {
          return <RestaurantCard item={item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
