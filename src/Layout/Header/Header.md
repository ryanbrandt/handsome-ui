Simple styled header than can be responsive with a manged mobile prop

```tsx
import Header from "./Header";

const menuOptions = [
  { name: "Home", path: "/", action: () => null, active: true },
  { name: "Resumé", path: "/resumé", action: () => null },
  { name: "Work", path: "/work", action: () => null },
  { name: "Contact", path: "/contact", action: () => null },
  { name: "Blog", path: "/blog", action: () => null },
];

<Header options={menuOptions} />;
```
