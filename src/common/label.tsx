type Props = {
  htmlFor: string;
  label: string;
  required: boolean;
};

const Label = ({ htmlFor, label, required }: Props) => {
  return (
    <label className="font-semibold" htmlFor={htmlFor}>
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};

export default Label;
