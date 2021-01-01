Master application container.

Includes header.

Maintains mobile/not-mobile state with React context so you don't have to worry about making your app responsive.

```tsx
import AppContainer from "./AppContainer";
import Header from "../../Layout/Header/Header";

const headerOptions = [
  { name: "Home", action: () => null },
  { name: "Resumé", action: () => null },
  { name: "Work", action: () => null },
  { name: "Contact", action: () => null },
  { name: "Blog", action: () => null },
];

<AppContainer
  style={{ margin: "25px" }}
  header={<Header options={headerOptions} defaultActive="Home" />}
>
  Your app here
</AppContainer>;
```
