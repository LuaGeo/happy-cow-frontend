import {
  //   ImageBackground,
  //   StyleSheet,
  View,
  //   useWindowDimensions,
  Text,
} from "react-native";

// import background from "../assets/imgs/happycow-background.png";

const SplashScreen = () => {
  //   const styles = useStyle();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is my SplashScreen</Text>
      {/* <ImageBackground source={{ background }} style={styles.background} /> */}
    </View>
  );
};

// const useStyle = () => {
//   const { height, width } = useWindowDimensions();

//   const styles = StyleSheet.create({
//     background: {
//       width: width,
//       height: height,
//     },
//   });
//   return styles;
// };

export default SplashScreen;
