import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/Ionicons";

export default function Side() {
  return (
    <View style={styles.Side}>
      <View>
        <Icons name="reorder-three" style={styles.SideIcon} color="#900" />
      </View>
      <View>
        <View style={styles.Item}>
          <Icon name="thumbs-up" style={styles.SideIcon} color="#900" />
        </View>
        <View style={styles.Item}>
          <Icons
            name="chatbubble-ellipses"
            style={styles.SideIcon}
            color="#900"
          />
        </View>
        <View style={styles.Item}>
          <Icons name="reorder-three" style={styles.SideIcon} color="#900" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Side: {
    // display:"flex",
    // flexDirection:"row",
    // justifyContent:"space-between",
    // height: "100%",
    // width:"100%"
    position: "absolute",
  },
  Item: {
    width: 50,
    height: 50,
    borderRadius: 100,
    display:"flex",
    bottom: 0
  },
  SideIcon: {
    fontSize: 45,
    color: "black",
  },
});
