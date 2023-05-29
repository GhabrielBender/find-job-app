import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { Text, SafeAreaView } from "react-native";
import info from "../../data.json";

import { ScreenHeaderBtn, NearbyJobCard } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";

const JobSearch = () => {
  const params = useSearchParams();
  const router = useRouter();

  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [page, setPage] = useState(1);

  const handleSearch = async () => {
    setSearchLoader(true);
    setSearchResult(info.data);

    function filterItems(arr, query) {
      const result = [];

      arr.filter((el) => {
        Object.entries(el).forEach(([key, value]) => {
          if (typeof value == "string") {
            if (value.toLocaleUpperCase().includes(query.toLocaleUpperCase())) {
              result.push(el);
            }
          }
        });
      });
      return result;
    }

    try {
      //   const options = {
      //     method: "GET",
      //     url: `https://jsearch.p.rapidapi.com/search`,
      //     headers: {
      //       "X-RapidAPI-Key":
      //         "fa6e1a2c37msh5bf366f34ba050dp10974ajsnc8c989ec3068",
      //       "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      //     },
      //     params: {
      //       query: params.id,
      //       page: page.toString(),
      //     },
      //   };

      //   const response = await axios.request(options);
      const searchResult = filterItems(info.data, params.id);
      setSearchResult(searchResult);
    } catch (error) {
      setSearchError(error);
      console.log(error);
    } finally {
      setSearchLoader(false);
    }
  };

  const handlePagination = (direction) => {
    if (direction === "left" && page > 1) {
      setPage(page - 1);
      handleSearch();
    } else if (direction === "right") {
      setPage(page + 1);
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />

      <FlatList
        data={searchResult}
        renderItem={({ item }) => (
          <NearbyJobCard
            job={item}
            handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
          />
        )}
        keyExtractor={(item) => item.job_id}
        contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
        ListHeaderComponent={() => (
          <>
            <View className="w-full">
              <Text className="font-bold text-xl text-primary">
                {params.id}
              </Text>
              <Text className="mt-1 font-medium text-sm text-primary">
                Job Opportunities
              </Text>
            </View>
            <View className="mt-4">
              {searchLoader ? (
                <ActivityIndicator size="large" color={COLORS.primary} />
              ) : (
                searchError && <Text>Oops something went wrong</Text>
              )}
            </View>
          </>
        )}
        ListFooterComponent={() => (
          <View className="mt-3 justify-center items-center flex-row gap-2">
            <TouchableOpacity
              className="w-7 h-7 rounded-sm justify-center items-center bg-tertiary"
              onPress={() => handlePagination("left")}
            >
              <Image
                source={icons.chevronLeft}
                className="w-3/5 h-3/5"
                style={{ tintColor: COLORS.white }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View className="w-7 h-7 rounded-sm justify-center items-center bg-white">
              <Text className="font-bold text-base text-primary">{page}</Text>
            </View>
            <TouchableOpacity
              className="font-bold text-base text-primary"
              onPress={() => handlePagination("right")}
            >
              <Image
                source={icons.chevronRight}
                className="w-3/5 h-3/5"
                style={{ tintColor: COLORS.white }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default JobSearch;
