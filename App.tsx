import { Button, View } from "react-native";
import { getClerkInstance } from "@clerk/expo";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Access getClerkInstance"
        onPress={() => {
          console.log(getClerkInstance);
        }}
      />
    </View>
  );
}
