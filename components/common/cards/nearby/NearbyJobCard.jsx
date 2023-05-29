import { View, Text, TouchableOpacity, Image } from "react-native";

import { checkImageURL } from "../../../../utils";

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity
      onPress={handleNavigate}
      style={{
        shadowColor: "#83829A",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 5,
        shadowRadius: 5.84,
        elevation: 1,
      }}
      className="bg-superWhite flex-1 justify-between items-center flex-row p-3.5 rounded-lg	"
    >
      <TouchableOpacity className="w-12	h-12 bg-white rounded-lg justify-center items-center">
        <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          className="w-3/4 h-3/4"
        />
      </TouchableOpacity>

      <View className="flex-1 mx-4">
        <Text className="text-base font-medium text-primary" numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text className="text-sm font-normal text-gray mt-1 capitalize">
          {job.job_employement_type || "full-time"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
