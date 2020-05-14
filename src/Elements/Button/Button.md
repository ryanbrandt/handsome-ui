Generic handsome-ui button

```tsx
import Button from "./Button";

const SomeComponent = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Button title="Standard" onClick={() => null} />
      <Button title="Inverting Button" onClick={() => null} inverting />
      <Button title="Round" onClick={() => null} round />
      <Button title="Round Inverting" onClick={() => null} round inverting />
    </div>
  );
};

<SomeComponent />;
```
