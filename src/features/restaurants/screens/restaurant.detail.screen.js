import React from "react";
import { RestaurantInfoCard } from "../../../features/restaurants/components/restaurant-info-card";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { List } from "react-native-paper";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};
