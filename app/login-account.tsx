import React from "react";
import {
  Button,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
} from "react-native";
import { Text, View } from "../components/Themed";
import { useGlobalContext } from "@/context";

const { height, width } = Dimensions.get("window");

export default function LoginAccount() {
  const { email, setEmail, password, setPassword, onSubmit } =
    useGlobalContext();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <KeyboardAvoidingView
        style={{ height }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.wrapper}>
          <View style={styles.form}>
            <Text style={styles.title}>Login account</Text>
            <TextInput
              style={styles.input}
              placeholder="email"
              onChangeText={(newText) => setEmail(newText)}
              defaultValue={email}
            />
            <TextInput
              style={styles.input}
              placeholder="password"
              onChangeText={(newText) => setPassword(newText)}
              defaultValue={password}
              secureTextEntry={true}
            />
            <Button title="Login" onPress={onSubmit} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  form: {
    width: width / 1.2,
    minHeight: height / 3,
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#333",
  },
  input: {
    width: "96%",
    height: 50,
    borderWidth: 0,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "black",
    color: "white",
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  formButton: {
    width: "96%",
    height: 50,
    backgroundColor: "#E7442E",
    marginTop: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
  },
  textButton: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  alert: {
    backgroundColor: "rgba(255,0,0,0.5)",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  alertText: {
    color: "rgb(255,0,0)",
    fontWeight: "bold",
  },
});
