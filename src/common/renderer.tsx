import { SchemaProps } from "../types/uiElements";
import UIMapper from "../util/uiMapper";

const Renderer = ({ schema, type }: SchemaProps) => {
  const ignoreItems = schema.filter((item) => item.uiType === "Ignore");
  const schemaItems = schema
    .filter((item) => item.uiType !== "Ignore")
    .sort((a, b) => a.sort - b.sort);
  return (
    <>
      {schemaItems.map((element) => {
        const { uiType } = element;

        const Component = UIMapper[uiType as keyof typeof UIMapper];
        return (
          <div
            className={`px-2 my-2 bg-blue-50 rounded-md ${
              type == "parent" ? "border border-blue-200" : ""
            }`}
          >
            {uiType === "Radio" ? (
              // @ts-ignore
              <Component data={{ ...element }} subParameters={ignoreItems} />
            ) : (
              // @ts-ignore
              <Component {...element} />
            )}
          </div>
        );
      })}
    </>
  );
};

export default Renderer;
