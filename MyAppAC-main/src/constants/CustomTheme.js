import { DefaultTheme } from "@react-navigation/native";
import colors from "./colors";

const CustomTheme = {
    ...DefaultTheme,
    colors: { 
        ...DefaultTheme.colors,
        background: colors.fondoClaro,
        card: colors.variante3,
        text: colors.default,
        border: colors.variante4,
        notification: colors.resaltador},
}

export default CustomTheme;