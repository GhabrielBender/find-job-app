import { View, Text, TouchableOpacity, Image } from "react-native";

import { checkImageURL } from "../../../../utils";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={{
        shadowColor: "#83829A",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 1,
      }}
      className={`${
        selectedJob === item.job_id ? "bg-primary" : "bg-superWhite"
      } w-60 p-6	rounded-lg	justify-between `}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity
        className={`${
          selectedJob === item.job_id ? "bg-superWhite" : "bg-white"
        } w-12 h-12 rounded-lg justify-center items-center `}
      >
        <Image
          source={{
            uri: checkImageURL(item.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          className="w-3/4 h-3/4"
        />
      </TouchableOpacity>
      <Text className="text-sm font-normal text-gray mt-1" numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View className="mt-4">
        <Text
          className={`${
            selectedJob === item.job_id ? "text-white" : "text-primary"
          } text-lg font-medium`}
          numberOfLines={1}
        >
          {item.job_title}
        </Text>
        <Text className="text-sm font-normal text-gray">
          {item.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
