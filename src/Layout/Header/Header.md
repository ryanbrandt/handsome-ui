Simple styled header than can be responsive with a manged mobile prop

```tsx
import Header from "./Header";

const menuOptions = [
  { title: "Home", path: "/" },
  { title: "Resumé", path: "/resumé" },
  { title: "Work", path: "/work" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

<Header
  options={[
    {
      name: "An Option",
      action: () => null,
    },
  ]}
/>;
```
