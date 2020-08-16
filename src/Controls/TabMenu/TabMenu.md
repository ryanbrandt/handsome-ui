Basic tab menu with a search bar

```tsx
import TabMenu from "./TabMenu";

const SomeComponent = () => {
  const tabs = [
    { title: "Tab One", key: "tabOne" },
    { title: "Tab Two", key: "tabTwo" },
    { title: "Tab Three", key: "tabThree" },
  ];

  return <TabMenu tabs={tabs} onSearch={() => null} onTab={() => null} />;
};

<SomeComponent />;
```
