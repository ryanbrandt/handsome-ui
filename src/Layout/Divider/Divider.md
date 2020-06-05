```tsx
import Divider from "./Divider";

const Foo = () => {
  return (
    <div style={{ height: "700px" }}>
      <Divider />
      <Divider style={{ marginTop: "50px", height: "90%" }} vertical />
    </div>
  );
};

<Foo />;
```
