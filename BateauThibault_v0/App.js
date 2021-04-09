import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Products from "./screens/Products";
import ProductsList from "./screens/ProductsList";
import Cart from "./screens/Cart";
import ShipsList from "./screens/ShipsList";
import ShipDetails from "./screens/ShipDetails";
import RecetteList from './screens/RecetteList';
import RecetteDetails from './screens/RecetteDetails';
import Contact from './screens/Contact';
import RestaurantDetails from './screens/RestaurantDetails';
import Restaurants from './screens/Restaurants';
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import store from './store/configureStore'

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="ProductsList" component={ProductsList} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="ShipsList" component={ShipsList} />
            <Stack.Screen name="ShipDetails" component={ShipDetails} />
            <Stack.Screen name="RecetteList" component={RecetteList} />
            <Stack.Screen name="RecetteDetails" component={RecetteDetails} />
            <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
            <Stack.Screen name="Restaurants" component={Restaurants} />
            <Stack.Screen name="Contact" component={Contact} />
          </Stack.Navigator> 
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
