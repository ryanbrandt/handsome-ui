Retractable sidebar menu

```tsx
import SideMenu from "./SideMenu";
const menuOptions = [
  { name: "Home", path: "/", action: () => null, active: true },
  { name: "Resumé fosfos ospjfs", path: "/resumé", action: () => null },
  { name: "Work", path: "/work", action: () => null },
  { name: "Contact", path: "/contact", action: () => null },
  { name: "Blog", path: "/blog", action: () => null },
];

<SideMenu options={menuOptions} />;
```
