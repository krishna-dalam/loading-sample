import React from "react";
import { ActivityIndicator } from "react-native";

// Loading is a simple functional component which takes 'isLoading' property and displayes icon if the value is true
const LoadingIcon = ({ isLoading }) => (
  <ActivityIndicator size="large" color="#0000ff" animating={isLoading} />
);

export default LoadingIcon;
