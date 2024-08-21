import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import TextInputExample from "@/components/TextInputExample";
import App from "@/components/FlatList";

export default function HomeScreen() {
  return <><TextInputExample />
  <App/></>
  ;
}
