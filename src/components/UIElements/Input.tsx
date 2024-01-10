import Tooltip from "../../common/tooltip";
import { InputProps } from "../../types/uiElements";
const Input = (props: InputProps) => {
  const { label, description, validate, jsonKey, icon, placeholder } = props;
  return (
    <div className="grid grid-cols-2 my-5">
      <div className="flex gap-2 items-center">
        <label className="font-semibold" htmlFor={jsonKey}>
          {label}
        </label>
        {description != "" && <Tooltip text={description} />}
      </div>
      <div>
        <input
          className="w-full h-full bg-blue-50 placeholder:text-blue-300 text-black p-2 resize-none outline-none border border-blue-300  rounded-md"
          name={jsonKey}
          id={jsonKey}
          placeholder={placeholder}
          required={validate?.required || false}
          readOnly={validate?.immutable || false}
          pattern={validate?.pattern}
        />
      </div>
    </div>
  );
};

export default Input;
