import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

import useFetch from "../../../hook/useFetch";

const Nearbyjobs = () => {
  const router = useRouter();

  const { isLoading, error, data } = useFetch("search", {
    query: "React developer",
    num_pages: 1,
  });

  const handleNavigate = (item) => {
    router.push(`job-details/${item?.job_id}`);
  };

  return (
    <View className="mt-5">
      <View className="flex-row justify-between items-center">
        <Text className="text-lg font-medium text-primary">Nearby jobs</Text>
        <TouchableOpacity>
          <Text className="text-base font-medium text-gray">Show all</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-5" style={{ gap: 10 }}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={handleNavigate}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
