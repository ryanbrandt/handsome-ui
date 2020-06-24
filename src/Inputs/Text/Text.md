```tsx
import Text from "./Text";

const SomeComponent = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Text label="Big Text" />
        <Text label="Big Disabled Text" disabled />
        <Text label="Big Error Text" error="You Fucked Up" />
      </div>
    </div>
  );
};

<SomeComponent />;
```
