import { SwitchProps } from "../../types/uiElements";
import Tooltip from "../../common/tooltip";

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
        <label className="font-semibold" htmlFor={jsonKey}>
          {label}
        </label>
        {description != "" && <Tooltip text={description} />}
      </div>
    </div>
  );
};

export default Switch;
