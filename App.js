import axios from "axios";
import { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SplashScreen } from "./containers/SplashScreen";
import { RestaurantsScreen } from "./containers/RestaurantsScreen";
import { RestaurantScreen } from "./containers/RestaurantScreen";
import { MapScreen } from "./containers/MapScreen";
import { FavoritesScreen } from "./containers/FavoritesScreen";

import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
          <Stack.Screen name="Tab" options={{ headerShown: false }}>
            {() => (
              <Tab.Navigator
                screenOptions={{
                  headerShown: false,
                  tabBarActiveTintColor: "#7E4CC7",
                  tabBarInactiveTintColor: "gray",
                }}
              >
                <Tab.Screen
                  name="TabHome"
                  options={{
                    tabBarLabel: "Explorer",
                    tabBarIcon: ({ color, size }) => (
                      <AntDesign name="search1" size={size} color={color} />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen name="Restaurants">
                        {() => <RestaurantsScreen restaurants={restaurants} />}
                      </Stack.Screen>
                      <Stack.Screen name="Restaurant">
                        {() => <RestaurantScreen />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>

                <Tab.Screen
                  name="TabMap"
                  options={{
                    tabBarLabel: "Carte",
                    tabBarIcon: ({ color, size }) => (
                      <Fontisto name="map" size={size} color={color} />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen name="Map" options={{ headerShown: false }}>
                        {() => <MapScreen restaurants={restaurants} />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>

                <Tab.Screen
                  name="TabFavorites"
                  options={{
                    tabBarLabel: "Favorites",
                    tabBarIcon: ({ color, size }) => (
                      <Fontisto name="favorite" size={size} color={color} />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Favorites"
                        options={{ headerShown: false }}
                      >
                        {() => <FavoritesScreen />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
