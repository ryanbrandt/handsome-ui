Simple SideDrawer overlay

```tsx
import SideDrawer from "./SideDrawer";

class SomeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  render() {
    const { visible } = this.state;

    return (
      <div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => this.setState({ visible: true })}
        >
          Reveal
        </div>
        <SideDrawer
          onClose={() => this.setState({ visible: false })}
          visible={visible}
        />
      </div>
    );
  }
}

<SomeComponent />;
```
