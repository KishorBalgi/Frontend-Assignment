import EditorLayout from "./layout/EditorLayout";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <EditorLayout />
    </>
  );
}

export default App;
