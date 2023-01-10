import { StyleSheet, View, Text } from "react-native";
import Side from "./Side";

export default function Body() {
  return (
    <View style={styles.Body}>
      <View style={styles.container}></View>
      <Side />
    </View>
  );
}

const styles = StyleSheet.create({
  Body: {
    width: "100%",
    height: "100%",
    display: "flex",

  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "yellow",
  },
});
