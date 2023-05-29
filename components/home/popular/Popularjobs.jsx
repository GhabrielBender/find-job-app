import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { useRouter } from "expo-router";

import { COLORS, SIZES } from "../../../constants";

import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const router = useRouter();

  const { isLoading, error, data } = useFetch("search", {
    query: "React developer",
    num_pages: 1,
  });

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`job-details/${item?.job_id}`);
    setSelectedJob(item?.job_id);
  };

  return (
    <View className="mt-6">
      <View className="flex-row justify-between items-center">
        <Text className="text-lg font-medium text-primary">Popularjobs</Text>
        <TouchableOpacity>
          <Text className="text-base font-medium text-gray">Show all</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-4">
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
