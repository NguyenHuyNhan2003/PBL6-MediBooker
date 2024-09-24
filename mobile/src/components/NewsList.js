import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, images } from "../constants";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Item = ({ data }) => (
  <View style={styles.itemContainer}>
    <TouchableOpacity>
      <Image source={images.poster} style={styles.image} />
    </TouchableOpacity>
    <View style={styles.item}>
      <TouchableOpacity>
        <Text style={styles.title}>{data.title}</Text>
      </TouchableOpacity>
      <Text style={styles.content} numberOfLines={2} ellipsizeMode="tail">
        {data.content}
      </Text>
      <View style={styles.dateContainer}>
        <FontAwesome5 name="calendar-alt" size={15} color={COLORS.gray} />
        <Text style={styles.date}>{data.date}</Text>
      </View>
    </View>
  </View>
);

const NewsList = ({ data }) => {
  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({ item }) => <Item data={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default NewsList;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.silver,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderColor: COLORS.silver,
    padding: 8,
    flexDirection: "row",
  },
  image: {
    height: 70,
    width: 90,
    resizeMode: "cover",
    borderRadius: 10,
    borderColor: COLORS.black,
    padding: 10,
    borderWidth: 1,
    backgroundColor: COLORS.silver,
  },
  item: {
    flex: 1, // This allows the content to fill the remaining space
    marginLeft: 10,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    textDecorationLine: "underline",
    color: COLORS.blue,
  },
  content: {
    flex: 1, // Let the content take up the available space
    marginTop: 5,
    marginEnd: 5,
  },
  date: {
    fontSize: 12,
    color: COLORS.gray,
  },
});
