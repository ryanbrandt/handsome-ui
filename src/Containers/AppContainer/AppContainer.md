Master application container.

Includes header.

Maintains mobile/not-mobile state with React context so you don't have to worry about making your app responsive.

```tsx
import AppContainer from "./AppContainer";

const menuOptions = [
  { title: "Home", path: "/" },
  { title: "Resumé", path: "/resumé" },
  { title: "Work", path: "/work" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

<AppContainer
  style={{ margin: "25px" }}
  headerMenu={
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
  mobileMenu={["I didnt implement this"]}
  onMobileClick={() => null}
>
  Your app here
</AppContainer>;
```
