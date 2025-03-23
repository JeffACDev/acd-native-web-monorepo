import { View } from "react-native";
import { ContainerProps } from "./types";

const Container = ({ children }: ContainerProps) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </View>
  );
};

export default Container;
