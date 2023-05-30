import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

import { getRestaurantCategory } from "../utils/getRestaurantCategory";

export const RestaurantCard = ({ item }) => {
  const styles = useStyle();
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("Restaurant", { id: item._id, item: item });
      }}
    >
      {item.thumbnail === "https://www.happycow.net/img/no-image.jpg" ? (
        <Image
          source={require("../assets/imgs/happycow-logogray.png")}
          style={styles.grayCowImage}
        />
      ) : (
        <Image
          source={{ uri: item.thumbnail }}
          style={styles.restaurantImage}
        />
      )}
      <View>
        <Text>{item.name}</Text>
      </View>
      <Image
        source={getRestaurantCategory(item.type)}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
  );
};

const useStyle = () => {
  const { height, width } = useWindowDimensions();
  const styles = StyleSheet.create({
    container: { padding: 10, flexDirection: "row", gap: 10 },
    grayCowImage: {
      width: width / 4,
      height: 100,
      opacity: 0.3,
      borderRadius: 10,
    },
    restaurantImage: { width: width / 4, height: width / 4, borderRadius: 10 },
  });
  return styles;
};
