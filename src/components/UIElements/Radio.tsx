import { useState } from "react";
import Tooltip from "../../common/tooltip";
import { IgnoreProps, RadioProps } from "../../types/uiElements";
import Ignore from "./Ignore";

type Props = {
  data: RadioProps;
  subParameters: IgnoreProps[];
};

const Radio = (props: Props) => {
  const { label, description, validate, jsonKey, icon } = props.data;
  const currentRadioValue = validate?.options?.find(
    (option) => option.value == validate?.defaultValue
  )?.label;
  const [radioValue, setRadioValue] = useState(currentRadioValue || "");

  function handleRadioChange(e: any) {
    setRadioValue(e.target.getAttribute("attr-value"));
  }

  return (
    <>
      <div className="grid grid-cols-1 my-5">
        <div className="grid grid-cols-2 gap-2 my-1">
          {validate?.options?.map((option, index) => (
            <>
              <label
                htmlFor={jsonKey + index}
                className={`inline-block bg-blue-100 p-4 font-sans font-medium text-lg border border-blue-300 rounded-md cursor-pointer hover:bg-blue-300 ${
                  radioValue == option.label && "bg-blue-300"
                } ${
                  validate?.immutable ? "opacity-50 cursor-not-allowed" : ""
                }`}
                attr-value={option.label}
                onClick={handleRadioChange}
              >
                {option.label}
              </label>
            </>
          ))}
        </div>
      </div>
      {/* Render All the Ignore Schemas */}
      {props.subParameters.map((element) => (
        <Ignore data={{ ...element }} radioKey={radioValue} />
      ))}
    </>
  );
};

export default Radio;
