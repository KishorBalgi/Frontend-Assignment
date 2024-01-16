import { useState } from "react";

type Props = {
  setSchema: React.Dispatch<React.SetStateAction<never[]>>;
};

const SchemaEditor = ({ setSchema }: Props) => {
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    try {
      const schema = JSON.parse(value);
      setSchema(schema);
      setError("");
    } catch (error) {
      setError("Invalid Schema");
    }
  };

  return (
    <div className="flex flex-col h-[50vh] md:h-screen">
      <div className="flex gap-2 bg-dark p-2 text-md font-semibold">
        <h1>Schema Editor</h1>
        {error && <p className="text-red-500">{error}</p>}
      </div>
      {/* Editor */}
      <div className="h-full">
        <textarea
          className="w-full h-full text-white p-2 resize-none overflow-auto"
          name="uiSchema"
          id="uiSchema"
          placeholder="Enter your UI Schema here..."
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  );
};

export default SchemaEditor;
