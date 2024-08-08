import { Image, StyleSheet, Platform, View, Text, Button } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import { TodayWorks } from "@/lib/api";

export default function HomeScreen() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    async function name() {
      const response = await fetch(
        "https://backend-app-brown.vercel.app/api/post/get"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setData(data);
    }
    name();
  }, []);
  async function DeleteData(params: any) {
    const response = await fetch(
      `https://backend-app-brown.vercel.app/api/post/delete/${params}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response) {
      console.log("deleted");
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={
          <Image
            source={require("@/assets/images/partial-react-logo.png")}
            style={styles.reactLogo}
          />
        }
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome!</ThemedText>
          <HelloWave />
        </ThemedView>
        {data.map((item, index) => (
          <ThemedView style={styles.stepContainer} key={item?._id}>
            <View>
              <ThemedText type="subtitle">№ {index + 1}</ThemedText>
              <ThemedText>
                <ThemedText type="defaultSemiBold">{item?.title}</ThemedText>{" "}
              </ThemedText>
              <Text>{item?.body}</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 2 }}>
              <Button title="delete" onPress={() => DeleteData(item?._id)} />
            </View>
          </ThemedView>
        ))}
      </ParallaxScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
