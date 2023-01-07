import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Body from "../../components/Main/Body";
import Footer from "../../components/Main/Footer";
import Side from "../../components/Main/Side";

export default function Main({navigation} : any) {

  return (
    <View style={styles.Main}>
      <Body />
      {/* <Footer/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    display:"flex",
    position:"relative",
  },
});
