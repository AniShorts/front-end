import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Dog from "react-native-vector-icons/FontAwesome5";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.footerItem}>
        <Icon name="home" style={styles.footerIcon} color="#900" />
      </View>
      <View style={styles.footerItem}>
        <Dog name="dog" style={styles.footerIcon} color="#900" />
      </View>
      <View style={styles.footerItem}>
        <Icon name="plus" style={styles.footerIconTwo} color="#900" />
      </View>
      <View style={styles.footerItem}>
        <Icon name="search" style={styles.footerIcon} color="#900" />
      </View>
      <View style={styles.footerItem}>
        <Icon name="cog" style={styles.footerIcon} color="#900" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    backgroundColor: "white",
    width: "100%",
    height: "9%",
    bottom: "0%",
    display: "flex",
    flexDirection: "row",
    zIndex: 2,
    borderTopColor: "#C780FA",
    borderTopWidth: 1,
    paddingTop: 7
  },
  footerItem: {
    width: "20%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
  },
  footerIcon: {
    fontSize: 40,
    textAlign: "center",
    display: "flex",
    color: "#C780FA",
  },
  footerIconTwo: {
    fontSize: 50,
    textAlign: "center",
    display: "flex",
    color: "#C780FA",
  },
});
