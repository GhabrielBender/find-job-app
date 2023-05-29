import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const TapButton = ({ name, activeTab, onHandleSearchType }) => (
  <TouchableOpacity
    className={`${
      name == activeTab ? "bg-primary" : "#f3f4f8"
    } py-4 px-6 rounded-md ml-1 `}
    style={{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowColor: COLORS.white,
    }}
    onPress={onHandleSearchType}
  >
    <Text
      className={`${
        name === activeTab ? "#C3BFCC" : "#AAA9B8"
      } text-sm font-medium`}
    >
      {name}
    </Text>
  </TouchableOpacity>
);

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TapButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;
