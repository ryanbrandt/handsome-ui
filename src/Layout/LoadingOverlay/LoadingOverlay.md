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

  timeoutShow() {
    this.setState({ show: true });
    setTimeout(() => this.setState({ show: false }), 5000);
  }

  render() {
    return (
      <div>
        <Button title="Show Overlay" onClick={() => this.timeoutShow()} />
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
