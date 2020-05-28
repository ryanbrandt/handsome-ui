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
  menu={
    <div
      style={{
        display: "flex",
        height: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {menuOptions.map((option) => (
        <a style={{ cursor: "pointer" }} key={option.title}>
          {option.title}
        </a>
      ))}
    </div>
  }
/>;
```
