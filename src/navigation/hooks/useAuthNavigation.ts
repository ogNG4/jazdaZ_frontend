import { useNavigation } from "@react-navigation/native";
import { AuthRouterParams } from "navigation/types/router";

export default function useAuthNavigation() {
    return useNavigation<AuthRouterParams>();
}