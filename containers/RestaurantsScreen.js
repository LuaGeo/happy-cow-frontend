import { View, FlatList } from "react-native";
import { Restaurant } from "../components/Restaurant";

export const RestaurantsScreen = ({ restaurants }) => {
  //   console.log(restaurants);
  return (
    <View>
      <FlatList
        data={restaurants}
        keyExtractor={(restaurants) => String(restaurants._id)}
        renderItem={({ item }) => {
          return <Restaurant item={item} />;
        }}
      />
    </View>
  );
};
