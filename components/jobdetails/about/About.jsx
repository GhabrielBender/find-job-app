import React from "react";
import { View, Text } from "react-native";

const About = ({ info }) => {
  return (
    <View className="mt-5 bg-superWhite rounded-md p-4">
      <Text className="text-lg text-primary font-bold">About the job:</Text>

      <View className="my-3">
        <Text className="text-base text-gray font-normal my-2">{info}</Text>
      </View>
    </View>
  );
};

export default About;
