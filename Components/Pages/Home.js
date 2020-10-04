import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Animated,Text } from "react-native";
import Constants from "expo-constants";

import Theme from "../Elements/Theme";
import { AsyncStorage } from "react-native";
const Home = ({ navigation }) => {
  const [scrollAnimation] = useState(new Animated.Value(0));
  const [email,updateEmail] = useState("Testing HERE")


  AsyncStorage.getItem("email").then(emailText => {
    updateEmail(emailText)
    console.log({emailText})
  });


  return (
    <View style={styles.container}>
      <Text>
        "testing"
        {email}
      </Text>
      <Animated.ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { y: scrollAnimation } }
            }
          ],
          {
            useNativeDriver: true
          }
        )}
      ></Animated.ScrollView>
      
    </View>
  );
};

const avatarSize = 100;
const { width } = Dimensions.get("window");
const { statusBarHeight } = Constants;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1
  },
  post: {
    paddingHorizontal: Theme.spacing.small
  },
  header: {
    marginBottom: avatarSize * 0.5 + Theme.spacing.small,
    height: width
  },
  cover: {
    ...StyleSheet.absoluteFillObject,
    width,
    height: width
  },
  avatar: {
    position: "absolute",
    right: Theme.spacing.small,
    bottom: -avatarSize * 0.5
  },
  settings: {
    position: "absolute",
    top: statusBarHeight + Theme.spacing.small,
    right: Theme.spacing.base,
    backgroundColor: "transparent",
    zIndex: 10000
  },
  title: {
    position: "absolute",
    left: Theme.spacing.small,
    bottom: 50 + Theme.spacing.small
  },
  outline: {
    color: "rgba(255, 255, 255, 0.8)"
  },
  name: {
    color: "white"
  }
});

export default Home;
