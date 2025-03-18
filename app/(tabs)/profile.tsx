import { icons } from "@/constants/icons";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Sample user data (replace with actual data from auth provider)
const Profile = ({ user }) => {
    return (
        <SafeAreaView className="bg-primary flex-1 px-6">
            {/* Header */}
            <View className="flex justify-center items-center flex-1 flex-col gap-4 mt-10">
                <Image source={icons.person} className="size-24 rounded-full" tintColor="#fff" />
                <Text className="text-white text-2xl font-bold">{user?.name || "Guest User"}</Text>
                <Text className="text-gray-400 text-sm">{user?.email || "guest@example.com"}</Text>
            </View>

            {/* Profile Options */}
            <ScrollView className="flex-1 mt-5">
                <View className="bg-gray-800 rounded-lg p-4 mb-4">
                    <Text className="text-white text-lg">Account Settings</Text>
                </View>
                <View className="bg-gray-800 rounded-lg p-4 mb-4">
                    <Text className="text-white text-lg">Privacy Policy</Text>
                </View>
                <View className="bg-gray-800 rounded-lg p-4 mb-4">
                    <Text className="text-white text-lg">Terms & Conditions</Text>
                </View>
            </ScrollView>

            {/* Logout Button */}
            <TouchableOpacity className="bg-red-500 p-4 rounded-lg mt-5">
                <Text className="text-white text-center">Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Profile;
