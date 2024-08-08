import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { ChildProps, IContext } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Context = createContext<IContext | null>(null);

export const Provider = ({ children }: ChildProps) => {
  const [email, setEmail] = useState<string>("");
  
  const [password, setPassword] = useState<string>("");
  const [accounts, setAccounts] = useState<any[]>([]);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [picture, setPicture] = useState<string>("");

  const [user, setUser] = useState<any>([]);
  const router = useRouter();

  const onSubmit = async () => {
    try {
      const response = await fetch(
        "https://backend-app-brown.vercel.app/api/login/login-pass",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data) {
          await AsyncStorage.setItem("accessToken", data.accessToken);
          await AsyncStorage.setItem("user", JSON.stringify(data.user));
        }
        setAccounts(data);
      } else {
        console.error("Login failed", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred during login", error);
    }
  };

  async function fetchUser() {
    const user = await AsyncStorage.getItem("user");
    setUser(JSON.parse(user!));
  }

  useEffect(() => {
    fetchUser();
    async function checkAuth() {
      const accessToken = await AsyncStorage.getItem("accessToken");

      if (accessToken) {
        router.push("/");
      } else {
        router.push("/login-account");
      }
    }
    checkAuth();
  }, [accounts]);

  const Save = async () => {
    try {
      const response = await fetch(
        "https://backend-app-brown.vercel.app/api/post/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            body,
            author: user?.email,
            picture,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Save successful", data);
      } else {
        console.error("Save failed with status:", response.status);
      }
    } catch (error) {
      console.error("An error occurred during save", error);
    }
  };
  async function onClose() {
    console.log("deleted");

    await AsyncStorage.removeItem("accessToken");
    await AsyncStorage.removeItem("user");
    router.push("/login-account");
  }
  return (
    <Context.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        onSubmit,
        accounts,
        user,
        title,
        setTitle,
        body,
        setBody,
        Save,
        picture,
        setPicture,
        onClose,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error("useGlobalContext must be used within a Provider");
  return context;
};
