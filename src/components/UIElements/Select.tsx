import { SelectProps } from "../../types/uiElements";
import Tooltip from "../../common/tooltip";

const Select = (props: SelectProps) => {
  const { label, description, validate, jsonKey, icon } = props;
  return (
    <div className="grid grid-cols-2 my-5">
      <div className="flex gap-2 items-center">
        <label className="font-semibold" htmlFor={jsonKey}>
          {label}
        </label>
        {description != "" && <Tooltip text={description} />}
      </div>
      <div>
        <select
          className="bg-blue-50 border  text-black  block w-full p-2.5 border-blue-300  rounded-md outline-none"
          name={jsonKey}
          id={jsonKey}
          required={validate?.required || false}
          disabled={validate?.immutable || false}
        >
          {validate?.options?.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
