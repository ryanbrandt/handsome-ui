Master application container.

Optionally includes header.

Maintains mobile/not-mobile state with React context so you don't have to worry about making your app responsive.

```tsx
import AppContainer from "./AppContainer";
import Header from "../../Layout/Header/Header";

const menuOptions = [
  { name: "Home", path: "/", action: () => null, active: true },
  { name: "Resumé", path: "/resumé", action: () => null },
  { name: "Work", path: "/work", action: () => null },
  { name: "Contact", path: "/contact", action: () => null },
  { name: "Blog", path: "/blog", action: () => null },
];

<AppContainer
  style={{ margin: "25px" }}
  header={<Header options={menuOptions} defaultActive="Home" />}
>
  Your app here
</AppContainer>;
```
