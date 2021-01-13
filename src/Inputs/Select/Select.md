Generic select component

```tsx
import Select from "./Select";

const options = ["option 1", "option 2", "option 3"];

class SomeComponent extends React.Component {
  constructor(props) {
    this.state = {
      value: "",
    };
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Select
            label="Basic Select"
            value={value}
            options={options}
            onChange={(value) => this.setState({ value })}
          />
          <Select
            label="Disabled Select"
            value={value}
            options={options}
            onChange={(value) => this.setState({ value })}
            disabled
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Select
            label="Error Select"
            value={value}
            error="error!"
            options={options}
            onChange={(value) => this.setState({ value })}
          />
        </div>
      </div>
    );
  }
}

<SomeComponent />;
```
