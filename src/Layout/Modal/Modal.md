Standard modal

```tsx
import Modal from "./Modal";

class SomeComponent extends React.Component {
  constructor(props) {
    this.state = {
      modalOpen: false,
    };
  }

  render() {
    return (
      <div>
        <a href="#modal" onClick={() => this.setState({ modalOpen: true })}>
          Show Modal
        </a>
        <Modal
          heading="Wow, a Modal"
          onClose={() => this.setState({ modalOpen: false })}
          open={this.state.modalOpen}
        >
          <p style={{ height: "100vh" }}>Stuff goes here</p>
        </Modal>
      </div>
    );
  }
}

<SomeComponent />;
```
