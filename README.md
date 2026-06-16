The reproduction is intentionally minimal and does not include `ClerkProvider`, because the error is triggered by accessing the root package export itself.

Relevant code:

```tsx
import { Button, Text, View } from "react-native";
import { getClerkInstance } from "@clerk/expo";

export default function App() {
  return (
    <View style={{ padding: 48 }}>
      <Text>@clerk/expo getClerkInstance repro</Text>
      <Button
        title="Access getClerkInstance"
        onPress={() => {
          console.log(getClerkInstance);
        }}
      />
    </View>
  );
}
```
