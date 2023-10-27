import { useNavigation } from "@react-navigation/native";
import { InstructorRouterParams } from "navigation/types/router";

export default function useInstructorNavigation() {
    return useNavigation<InstructorRouterParams>();
}