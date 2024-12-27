import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";

type TabBarIconProps = ComponentProps<typeof Ionicons> & {
  style?: any; // Optional custom styles for the icon
};

export function TabBarIcon({ style, ...rest }: TabBarIconProps) {
  return (
    <Ionicons
      size={28}
      style={[{ marginBottom: -3 }, style]} // Default margin adjustment
      {...rest} // Spread remaining props like name, color, etc.
    />
  );
}


// import Ionicons from "@expo/vector-icons";
// import { type IconProps } from "@expo/vector-icons/build/createIconSet";
// import { type ComponentProps } from "react";

// export function TabBarIcon({ style , ...rest }:
// IconProps<ComponentProps<typeof Ionicons>['name']>) {
//     return <Ionicons size={28} style={[{ marginBottom: -3}, style]}
//     {...rest} />;
// }
