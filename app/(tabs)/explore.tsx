import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Platform,
  Text,
  View,
  Button,
  TextInput,
  Dimensions,
} from "react-native";
import { useGlobalContext } from "@/context";
const { height, width } = Dimensions.get("window");
export default function TabTwoScreen() {
  const {
    user,
    title,
    setTitle,
    body,
    setBody,
    Save,
    picture,
    setPicture,
    onClose,
  } = useGlobalContext();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user?.email}</Text>
      <Button title="Logout" onPress={() => onClose()} />
      <View style={styles.form}>
        <Text style={styles.title}>Kerakli ishlar</Text>
        <TextInput
          style={styles.input}
          placeholder="title"
          onChangeText={(newText) => setTitle(newText)}
          defaultValue={title}
        />
        <TextInput
          style={styles.input}
          placeholder="body"
          onChangeText={(newText) => setBody(newText)}
          defaultValue={body}
        />
        <TextInput
          style={styles.input}
          placeholder="url"
          onChangeText={(newText) => setPicture(newText)}
          defaultValue={picture}
        />
        <Button title="save" onPress={Save} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  form: {
    width: width / 1.2,
    minHeight: height / 3,
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    // backgroundColor: "#333",
  },
  input: {
    width: "96%",
    height: 60,
    borderWidth: 0,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // shadowOpacity: 0.25, // Add this line
    shadowRadius: 3.84, // Add this line
    elevation: 5, // Add this line for Android shadow
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
});
