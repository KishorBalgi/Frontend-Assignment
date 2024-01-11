type Props = {
  response: {};
  onClose: () => void;
};

const ResponseModal = ({ response, onClose }: Props) => {
  return (
    <div className="absolute flex justify-center items-center w-screen h-screen backdrop-blur-sm">
      <div className="w-2/3 h-5/6 flex flex-col rounded-md bg-dark-2">
        <div className="flex justify-between items-center p-2 bg-dark rounded-md">
          <h1>Form Response JSON</h1>
          <button className="px-2 py-1 rounded-md bg-red-500" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="h-full overflow-y-auto p-4">
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default ResponseModal;
