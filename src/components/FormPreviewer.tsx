import { useRef, useState } from "react";
import Renderer from "../common/renderer";
import ResponseModal from "./ResponseModal";

type Props = {
  schema: never[];
};

const FormPreviewer = ({ schema }: Props) => {
  const formRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});

  function handleSubmit(e: any) {
    e.preventDefault();

    if (formRef.current == null) return;
    const data = new FormData(formRef.current);

    setFormData(Object.fromEntries(data.entries()));
    setShowModal(true);
  }

  function onClose() {
    setShowModal(false);
  }

  return (
    <>
      <div className="flex flex-col h-[50vh] md:h-screen">
        <div className=" bg-dark p-2 text-md font-semibold ">
          <h1>Form Preview</h1>
        </div>
        <div className="overflow-auto">
          <div className="bg-white text-black p-2 m-2 rounded-md">
            <h1 className="text-xl font-semibold border-b pb-5 mx-2 mb-2">
              Form
            </h1>
            <form ref={formRef} onSubmit={handleSubmit}>
              <Renderer schema={schema} type="parent" />
              <div className="w-full flex justify-end gap-2 mt-5">
                <button
                  className="bg-blue-200 text-black border border-blue-300 p-2 rounded-md"
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-700 text-white p-2 rounded-md"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showModal && <ResponseModal response={formData} onClose={onClose} />}
    </>
  );
};

export default FormPreviewer;
