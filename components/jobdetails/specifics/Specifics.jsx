import React from "react";
import { View, Text } from "react-native";

const Specifics = ({ title, points }) => {
  return (
    <View className="mt-5 bg-superWhite rounded-md p-4">
      <Text className="text-lg text-primary font-bold">{title}:</Text>

      <View className="my-3">
        {points.map((item, index) => (
          <View
            className="flex-row justify-start items-start my-2"
            key={item + index}
          >
            <View className="w-2 h-2 rounded-md bg-gray2 mt-2" />
            <Text className="text-sm text-gray font-normal ml-3">{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
