import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useCallback, useState } from "react";
import { COLORS } from "../constants";

const Dropdown = ({ data, onChange, placeholder }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = useCallback(() => setExpanded(!expanded), [expanded]);

  const [value, setValue] = useState("");
  const onSelect = useCallback(
    (item) => {
      onChange(item);
      setValue(item.value);
      setExpanded(false);
    },
    [onChange]
  );

  return (
    <View style={{ alignItems: "flex-end" }}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={toggleExpanded}>
        <MaterialIcons
          name="medical-information"
          size={20}
          color={COLORS.gray}
        />
        <Text
          style={{ flex: 1, paddingHorizontal: 10 }}
          numberOfLines={1}
          ellipsizeMode="tail"> {/* hiển thị "..." nếu văn bản vượt quá chiều rộng */}
          {value || placeholder}
        </Text>
        <AntDesign name={expanded ? "caretup" : "caretdown"} />
      </TouchableOpacity>
      {/* {expanded ? (
        <View style={styles.options}>
          <FlatList
            keyExtractor={(item) => item.value}
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity activeOpacity={0.8} style={styles.optionItem}>
                <Text>{item.value}</Text>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      ) : null} */}
      {expanded ? (
        <View style={styles.options}>
          <ScrollView style={{ maxHeight: 200 }}>
            {data.map((item) => (
              <TouchableOpacity
                onPress={() => {
                  onSelect(item);
                }}
                key={item.value}
                activeOpacity={0.8}
                style={styles.optionItem}>
                <Text>{item.value}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  button: {
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
    flexDirection: "row",
    width: "100%",
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 15,
    borderColor: COLORS.silver,
  },
  options: {
    position: "absolute",
    top: 43,
    paddingHorizontal: 10,
    width: "85%",
    backgroundColor: COLORS.Light20PersianGreen,
    borderRadius: 10,
    zIndex: 1,
  },
  separator: {
    height: 10,
  },
  optionItem: {
    justifyContent: "center",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: COLORS.PersianGreen,
  },
});
