import React from "react";
import { Image, TouchableOpacity } from "react-native";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity
      className="w-10 h-10 bg-white rounded justify-center items-center"
      onPress={handlePress}
    >
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={{ width: dimension, height: dimension }}
        className="rounded"
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
