```tsx
import Input from "./Input";
import { Github } from "../../Svgs";

class SomeComponent extends React.Component {
  constructor(props) {
    this.state = {
      inputOne: "",
      inputTwo: "",
      inputThree: "",
      inputFour: "",
      inputFive: "",
      inputSix: "",
    };
  }

  handleChange(input, value) {
    this.setState({
      [input]: value,
    });
  }

  render() {
    const {
      inputOne,
      inputTwo,
      inputThree,
      inputFour,
      inputFive,
      inputSix,
    } = this.props;

    return (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            label="Text Input"
            help="Some helpful text about the input"
            value={inputOne}
            onChange={(value) => this.handleChange("inputOne", value)}
          />
          <Input
            label="Number Input"
            type="number"
            value={inputTwo}
            onChange={(value) => this.handleChange("inputTwo", value)}
          />
          <Input
            label="Date Input"
            type="date"
            value={inputThree}
            onChange={(value) => this.handleChange("inputThree", value)}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            label="Icon Input"
            iconLeft={<Github width={12} height={12} />}
            value={inputFour}
            onChange={(value) => this.handleChange("inputFour", value)}
          />
          <Input
            label="Error Input"
            error="Error!"
            value={inputFive}
            onChange={(value) => this.handleChange("inputFive", value)}
          />
          <Input
            label="Disabled Input"
            error="You did something wrong now I'm disabled"
            value={inputSix}
            onChange={(value) => this.handleChange("inputSix", value)}
            disabled
          />
        </div>
      </div>
    );
  }
}

<SomeComponent />;
```
