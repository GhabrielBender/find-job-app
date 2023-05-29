import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import { icons } from "../../../constants";
import { Link } from "expo-router";

const Footer = ({ url }) => {
  return (
    <View className="absolute bottom-0 left-0 right-0 p-3 bg-superWhite justify-between items-center flex-row">
      <TouchableOpacity className="w-14 h-14 border-2 border-tertiary rounded-md justify-center items-center">
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          className="w-2/5 h-2/5"
          style={{ tintColor: "#f37453" }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        className="flex-1 bg-tertiary h-full justify-center items-center ml-4 rounded-md"
        onPress={() => Linking.openURL(url)}
      >
        <Text className="text-base text-white font-bold">Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
