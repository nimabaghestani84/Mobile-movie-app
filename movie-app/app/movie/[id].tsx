import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Ditails = () => {
    const {id}=useLocalSearchParams();
  return (
    <View>
      <Text>movie ditail {id}</Text>
    </View>
  );
};

export default Ditails;

const styles = StyleSheet.create({});
