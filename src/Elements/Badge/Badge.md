Simple badge element

```tsx
import Badge from "./Badge";
import Github from "../../Svgs/Github/Github";

const SomeComponent = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Badge content="A Badge" />
      <Badge
        content={
          <div>
            <Github />
          </div>
        }
      />
    </div>
  );
};

<SomeComponent />;
```
