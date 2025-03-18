import { icons } from "@/constants/icons";
import { View, Text, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Dummy data (replace with real saved movie data)
const savedMovies = [
    { id: 1, title: "Inception", year: 2010, thumbnail: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg" },
    { id: 2, title: "Interstellar", year: 2014, thumbnail: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
    { id: 3, title: "The Dark Knight", year: 2008, thumbnail: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
];

const Saved = () => {
    return (
        <SafeAreaView className="bg-primary flex-1 px-6">
            <View className="flex justify-center items-center flex-col gap-5 mt-10">
                <Image source={icons.save} className="size-10" tintColor="#fff" />
                <Text className="text-gray-500 text-base">Saved</Text>
            </View>

            {/* Saved Movies List */}
            <FlatList
                data={savedMovies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View className="bg-gray-800 rounded-lg p-4 mb-4 flex-row items-center gap-4">
                        <Image source={{ uri: item.thumbnail }} className="w-16 h-24 rounded-md" />
                        <View>
                            <Text className="text-white text-lg">{item.title}</Text>
                            <Text className="text-gray-400 text-sm">{item.year}</Text>
                        </View>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <Text className="text-gray-500 text-center mt-5">No saved movies yet.</Text>
                )}
            />
        </SafeAreaView>
    );
};

export default Saved;
