import { Text, View } from "react-native";

export const displayPriceRate = (priceRate) => {
  switch (priceRate) {
    case "Inexpensive":
      return (
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#e0c811" }}>$</Text>
          <Text style={{ color: "#c9c9c7" }}>$$</Text>
        </View>
      );
    case "Moderate":
      return (
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#e0c811" }}>$$</Text>
          <Text style={{ color: "#c9c9c7" }}>$</Text>
        </View>
      );
    case "Expensive":
      return <Text style={{ color: "#e0c811" }}>$$$</Text>;
    default:
      return <Text style={{ color: "#c9c9c7" }}>$??</Text>;
  }
};
