type commonProps = {
  sort: number;
  label: string;
  description: string;
  jsonKey: string;
  uiType: string;
  icon: string;
  level: number;
  placeholder: string;
  disable?: boolean;
};

type validate = {
  required?: boolean;
  immutable?: boolean;
  pattern?: string;
};

type schemas = (
  | InputProps
  | RadioProps
  | SelectProps
  | SwitchProps
  | GroupProps
  | IgnoreProps
)[];

export type InputProps = commonProps & {
  validate?: validate;
};

export type SelectProps = commonProps & {
  //   Extends validate with additional fields defaultVal and options
  validate?: validate & {
    options: {
      label: string;
      value: string;
      description: string;
      icon: string;
    }[];
    defaultValue: string;
  };
};

export type SwitchProps = commonProps & {
  validate?: validate & {
    defaultValue: boolean;
  };
};

export type GroupProps = commonProps & {
  validate?: validate;
  subParameters: schemas;
};

export type SchemaProps = {
  schema: schemas;
  type: "parent" | "child";
};

export type RadioProps = commonProps & {
  //   Extends validate with additional fields defaultVal and options
  validate?: validate & {
    options: {
      label: string;
      value: string;
      description: string;
      icon: string;
    }[];
    defaultValue: string;
  };
};
// "conditions": [
//   {
//     "jsonKey": "pizza_type.type",
//     "op": "==",
//     "value": "naples",
//     "action": "enable"
//   }
// ],

export type IgnoreProps = commonProps & {
  validate?: validate;
  conditions: {
    jsonKey: string;
    op: string;
    value: string;
    action: string;
  }[];
  subParameters: schemas;
};
