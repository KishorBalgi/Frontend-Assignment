import { GroupProps } from "../../types/uiElements";
import Tooltip from "../../common/tooltip";
import Renderer from "../../common/renderer";
import Label from "../../common/label";

const Group = (props: GroupProps) => {
  const {
    label,
    description,
    validate,
    jsonKey,
    subParameters,
    icon,
    placeholder,
  } = props;
  return (
    <div id={jsonKey} className="grid grid-cols-1 my-5">
      <div className="flex gap-2 items-center border-b pb-5 mx-3">
        <Label
          label={label}
          htmlFor={jsonKey}
          required={validate?.required || false}
        />
        {description != "" && <Tooltip text={description} />}
      </div>
      <div>
        <Renderer schema={subParameters} type="child" />
      </div>
    </div>
  );
};

export default Group;
