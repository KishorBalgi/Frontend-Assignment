import Tooltip from "../../common/tooltip";
import { RadioProps } from "../../types/uiElements";

const Radio = (props: RadioProps) => {
  const { label, description, validate, jsonKey, icon } = props;
  return (
    <div className="grid grid-cols-1 my-5">
      <div className="grid grid-cols-2 gap-2 my-1">
        {validate?.options?.map((option) => (
          <>
            <input
              type="radio"
              id={option.value}
              name={jsonKey}
              value={option.value}
              className="hidden"
              required={validate?.required || false}
              disabled={validate?.immutable || false}
            />
            <label
              htmlFor={option.value}
              className={`inline-block bg-blue-100 p-4 font-sans font-medium text-lg border border-blue-300 rounded-md cursor-pointer hover:bg-blue-300 ${
                validate?.immutable ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {option.label}
            </label>
          </>
        ))}
      </div>
    </div>
  );
};

export default Radio;
