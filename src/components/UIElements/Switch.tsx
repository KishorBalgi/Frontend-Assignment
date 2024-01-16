import { SwitchProps } from "../../types/uiElements";
import Tooltip from "../../common/tooltip";
import Label from "../../common/label";

const Switch = (props: SwitchProps) => {
  const { label, description, validate, jsonKey, icon } = props;
  return (
    <div className="grid grid-cols-2 my-5">
      <div className="flex gap-2 justify-start items-center">
        <input
          className="w-5 h-5 outline-none rounded-md"
          type="checkbox"
          name={jsonKey}
          id={jsonKey}
          defaultChecked={validate?.defaultValue || false}
          // required={validate?.required || false}
          disabled={validate?.immutable || false}
        />
        <Label
          label={label}
          htmlFor={jsonKey}
          required={validate?.required || false}
        />
        {description != "" && <Tooltip text={description} />}
      </div>
    </div>
  );
};

export default Switch;
