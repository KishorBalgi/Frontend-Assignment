import { useEffect, useState, useRef } from "react";
import { IgnoreProps } from "../../types/uiElements";
import Tooltip from "../../common/tooltip";
import Renderer from "../../common/renderer";
import { conditionResolver } from "../../util/conditionResolver";

type Props = {
  data: IgnoreProps;
  radioKey: string;
};

const Ignore = (props: Props) => {
  const childRef = useRef(null);
  const [condition, setCondition] = useState(true);
  const {
    label,
    description,
    validate,
    conditions,
    jsonKey,
    subParameters,
    icon,
  } = props.data;

  function checkCondition() {
    if (conditions) {
      const result = conditionResolver(conditions);
      setCondition(result);
    }
  }

  useEffect(() => {
    const rendererContainer = childRef.current;

    if (rendererContainer) {
      checkCondition();
    }
  }, [childRef]);

  return (
    <>
      {condition && props.radioKey == label && (
        <div className="grid grid-cols-1 my-5">
          <div ref={childRef}>
            <Renderer schema={subParameters} type="child" />
          </div>
        </div>
      )}
    </>
  );
};

export default Ignore;
