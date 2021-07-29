Standardized radio button component

```tsx
import { useState } from "react";
import RadioButton from "./RadioButton";

const initialState = {
  radioOne: false,
  radioTwo: false,
  radioThree: false,
  radioFour: false,
};

const SomeComponent = () => {
  const [checked, setChecked] = useState(initialState);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <RadioButton
        onClick={() => setChecked({ ...checked, radioOne: !checked.radioOne })}
        label="Some Label"
        checked={checked.radioOne}
      />
      <RadioButton
        onClick={() => setChecked({ ...checked, radioTwo: !checked.radioTwo })}
        label="Some Other Label"
        checked={checked.radioTwo}
      />
      <RadioButton
        onClick={() =>
          setChecked({ ...checked, radioThree: !checked.radioThree })
        }
        label="Another One"
        checked={checked.radioThree}
      />
      <RadioButton
        onClick={() =>
          setChecked({ ...checked, radioFour: !checked.radioFour })
        }
        label="Last One"
        checked={checked.radioFour}
      />
      <RadioButton label="Im Disabled" disabled />
    </div>
  );
};

<SomeComponent />;
```
