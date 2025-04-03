import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl  font-bold text-primary">welcome</Text>
      <Link href="/onBoarding">onBoarding</Link>
      <Link href="/movie/avenger">avenger</Link>
    </View>
  );
}
