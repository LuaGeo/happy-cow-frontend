import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SplashScreen } from "./containers/SplashScreen";
import { RestaurantsScreen } from "./containers/RestaurantsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
