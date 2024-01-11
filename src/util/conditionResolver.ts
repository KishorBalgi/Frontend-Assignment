import { IgnoreProps } from "../types/uiElements";

// Get the value of the jsonKey:
const getValueByKey = (jsonKey: string) => {
  const ids = jsonKey.split(".");
  let element: any = document;

  for (const id of ids) {
    element = element.querySelector(`#${id}`);
    if (!element) return undefined;
  }

  console.log(element, element.value);

  return element.value;
};

// Get conditions array from IgnoreProps
export const conditionResolver = (conditions: IgnoreProps["conditions"]) => {
  const result = conditions.map((condition) => {
    const { jsonKey, value, op, action } = condition;
    if (action !== "enable") return;

    // Get the value of the jsonKey:
    const jsonKeyValue = getValueByKey(jsonKey);

    // Compare the value with the jsonKeyValue
    return eval(`"${jsonKeyValue}" ${op} "${value}"`);
  });

  // If all conditions are true, return true
  // If not, return false
  return result.includes(false) ? false : true;
};
