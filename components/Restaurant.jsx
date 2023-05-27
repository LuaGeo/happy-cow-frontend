import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

export const Restaurant = ({ item }) => {
  const styles = useStyle();

  return (
    <TouchableOpacity style={styles.container}>
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
