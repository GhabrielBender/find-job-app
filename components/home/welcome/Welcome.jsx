import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import { icons, SIZES } from "../../../constants";
import { COLORS } from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <View>
      <View className="w-full">
        <Text className="font-medium text-lg text-secondary">Hello Adrian</Text>
        <Text className="font-bold text-xl text-primary mt-1">
          Find your perfect job
        </Text>
      </View>

      <View className="justify-center items-center flex-row mt-5 h-12">
        <View className="flex-1 bg-white mr-3 justify-center items-center rounded-md h-100">
          <TextInput
            value={searchTerm}
            onChangeText={(text) => {
              console.log(text);
              setSearchTerm(text);
            }}
            placeholder="What are you looking for"
            className="font-normal w-full h-full p-4"
          />
        </View>

        <TouchableOpacity
          className="w-12 h-full bg-tertiary rounded-md justify-center items-center"
          onPress={handleClick}
        >
          <Image
            source={icons.search}
            resizeMode="contain"
            className="w-1/2 h-1/2"
            style={{ tintColor: COLORS.white }}
          />
        </TouchableOpacity>
      </View>

      <View className="w-full mt-4">
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              className={`${
                activeJobType == item ? "border-secondary" : "border-gray2"
              } py-2 px-8 rounded-xl border-x border-y`}
              onPress={() => {
                setActiveJobType(item);
                router.push(`search/${item}`);
              }}
            >
              <Text
                className={`${
                  activeJobType == item ? "text-secondary" : "text-gray2"
                } text-base`}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
