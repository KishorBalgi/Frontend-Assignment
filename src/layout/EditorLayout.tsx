import SchemaEditor from "../components/SchemaEditor";
import FormPreviewer from "../components/FormPreviewer";
import { useState } from "react";

const EditorLayout = () => {
  const [schema, setSchema] = useState([]);
  return (
    <div className="w-screen h-screen">
      <div className=" grid grid-cols-2">
        <SchemaEditor setSchema={setSchema} />

        <FormPreviewer schema={schema} />
      </div>
    </div>
  );
};

export default EditorLayout;
