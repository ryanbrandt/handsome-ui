Simple loading overlay

```tsx
import LoadingOverlay from "./LoadingOverlay";
import Button from "../../Elements/Button/Button";

class SomeComponent extends React.Component {
  constructor(props) {
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div>
        <Button
          title="Show Overlay"
          onClick={() => this.setState({ show: true })}
        />
        <LoadingOverlay
          show={this.state.show}
          message={"A Helpful Message"}
          fade
        />
      </div>
    );
  }
}

<SomeComponent />;
```
