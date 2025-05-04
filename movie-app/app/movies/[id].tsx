import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovieDetails } from "@/services/api";

const MovieDetails = () => {
  const {id}=useLocalSearchParams();
  const {data:movie,loading}=useFetch(()=>fetchMovieDetails(id as string))
  return (
    <View className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{paddingBottom:80}}>
        <View>
          <Image className="w-full h-[550px]" resizeMode="stretch" source={{uri:`https://image.tmbd.org/t/p/w500${movie?.poster_path}`}} />
        </View>

        <View className="flex-col items-start justify-center mt-5 px-5">
            <Text className="text-white font-bold text-xl">{movie?.title}</Text>
            <View className="flex-row items-center gap-x-1 mt-2">
                <Text className="text-light-200 text-sm">{movie?.release_date?.split('-')[0]}</Text>
                <Text className="text-light-200 text-sm">{movie?.runtime}m</Text>
            </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetails;
