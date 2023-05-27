import {
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
  View,
  StatusBar,
} from "react-native";

import background from "../assets/imgs/happycow-background.png";

export const SplashScreen = () => {
  const styles = useStyle();

  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.activityIndicator}>
        <StatusBar hidden />
        <ActivityIndicator size="large" color="#7E4CC7" />
      </View>
    </ImageBackground>
  );
};

const useStyle = () => {
  const { height, width } = useWindowDimensions();

  const styles = StyleSheet.create({
    background: {
      width: width,
      height: height,
      alignItems: "center",
    },
    activityIndicator: {
      width: 60,
      height: 60,
      borderRadius: 50,
      top: 50,
      backgroundColor: "white",
      justifyContent: "center",
      //   alignItems: "center",
      //   transform: [{ scaleX: 3 }, { scaleY: 3 }], (make it bigger)
    },
  });
  return styles;
};
