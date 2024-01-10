type TooltipProps = {
  text: string;
};
const Tooltip = ({ text }: TooltipProps) => {
  return (
    <div className="relative">
      <div className="tooltipBtn w-fit text-[10px] cursor-pointer rounded-full py-1 px-2.5 bg-gray-700 text-white">
        i
      </div>
      <div className="tooltip max-w-52 whitespace-nowrap absolute top-8 hidden bg-white text-black p-2 rounded-md shadow-md border border-blue-100">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
