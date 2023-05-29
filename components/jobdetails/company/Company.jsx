import React from "react";
import { View, Text, Image } from "react-native";

import { icons } from "../../../constants";
import { checkImageURL } from "../../../utils";

import { COLORS } from "../../../constants";

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View className="my-4 justify-center items-center">
      <View className="w-20 h-20 justify-center items-center bg-superWhite rounded-lg">
        <Image
          source={{
            uri: checkImageURL(companyLogo)
              ? companyLogo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          className="w-4/5 h-4/5"
        />
      </View>
      <View className="mt-3">
        <Text className="text-lg text-primary font-bold text-center">
          {jobTitle}
        </Text>
      </View>

      <View className="mt-2 flex-row justify-center items-center">
        <Text className="text-base text-primary font-medium">
          {companyName} /
        </Text>
        <View>
          <Image
            source={icons.location}
            resizeMode="contain"
            className="w-3 h-4"
            style={{ tintColor: COLORS.gray }}
          />
          <Text className="text-base text-gray font-medium ml-1">
            {location}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
