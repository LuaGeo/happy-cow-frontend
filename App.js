import axios from "axios";
import { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SplashScreen } from "./containers/SplashScreen";
import { RestaurantsScreen } from "./containers/RestaurantsScreen";
import { RestaurantScreen } from "./containers/RestaurantScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [restaurants, setRestaurants] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await axios.get(
          "https://site--happy-cow-backend--6v4khcscf8qp.code.run/restaurants"
        );
        setRestaurants(response.data.allRestaurants);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Restaurants">
            {() => <RestaurantsScreen restaurants={restaurants} />}
          </Stack.Screen>
          <Stack.Screen name="Restaurant">
            {() => <RestaurantScreen restaurants={restaurants} />}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
