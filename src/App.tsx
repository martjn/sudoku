import React from "react";
import RenderGrid from "./Components/Sudoku/RenderGrid";
import createNewGrid from "./HelperFunctions/createNewGrid";

function App() {
  const gridLayout = createNewGrid();
  return (
    <div className="App">
      <div className="bg-black text-white h-full flex flex-col align-middle justify-center py-5">
        <h1 className="text-9xl self-center">Sudoku</h1>
        <p className="self-center">by <span className="font-semibold">Martin Toming</span></p>
      </div>

      <RenderGrid gridLayout={gridLayout} />
    </div>
  );
}

export default App;
