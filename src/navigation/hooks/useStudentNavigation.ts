import { useNavigation } from "@react-navigation/native";
import { StudentRouterParams } from "navigation/types/router";

export default function useStudentNavigation() {
    return useNavigation<StudentRouterParams>();
}