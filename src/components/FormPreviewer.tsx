import Renderer from "../common/renderer";
import Radio from "./UIElements/Radio";

type Props = {
  schema: never[];
};

const data = {
  sort: 0,
  label: "Pizza_type Type",
  description: "",
  validate: {
    required: true,
    options: [
      {
        label: "Naples Style Pizza",
        value: "naples",
        description: "",
        icon: "",
      },
      {
        label: "New York Style Pizza",
        value: "newyork",
        description: "",
        icon: "",
      },
    ],
    defaultValue: "naples",
    immutable: false,
  },
  jsonKey: "type",
  uiType: "Radio",
  icon: "",
  level: 1,
  placeholder: "",
};

const FormPreviewer = ({ schema }: Props) => {
  return (
    <div className="flex flex-col h-screen">
      <div className=" bg-dark p-2 text-md font-semibold ">
        <h1>Form Preview</h1>
      </div>
      <div className="overflow-auto">
        <div className="bg-white text-black p-2 m-2 rounded-md">
          <h1 className="text-xl font-semibold border-b pb-5 mx-2 mb-2">
            Form
          </h1>
          <form>
            <Renderer schema={schema} type="parent" />

            {/* <Radio {...data} /> */}

            <button
              className="bg-blue-500 text-black p-2 rounded-md"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPreviewer;
