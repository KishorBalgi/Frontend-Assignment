type commonProps = {
  sort: number;
  label: string;
  description: string;
  jsonKey: string;
  uiType: string;
  icon: string;
  level: number;
  placeholder: string;
};

type validate = {
  required?: boolean;
  immutable?: boolean;
  pattern?: string;
};

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
  subParameters: (InputProps | SelectProps | SwitchProps)[];
};

export type SchemaProps = {
  schema: (InputProps | SelectProps | SwitchProps | GroupProps)[];
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
