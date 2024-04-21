import GridCell from "./GridCell";
import { useState } from "react";
import { activeCellState } from "../../Types/activeCellState";
import { inTheSameBlock } from "../../HelperFunctions/GridCell/inTheSameBlock";

const defaultCellState: activeCellState = {
  value: null,
  x: null,
  y: null,
};

function RenderGrid({
  gridLayout,
}: {
  gridLayout: number[][];
}): React.ReactElement {
  const [activeCell, setActiveCell] = useState(defaultCellState);

  const handleFocus = (
    e: React.FocusEvent<HTMLDivElement>,
    x: number,
    y: number
  ): void => {
    setActiveCell({
      value: parseInt(e.target.childNodes[0].textContent as string),
      x: x,
      y: y,
    });
  };
  const handleBlur = (e: React.FocusEvent<HTMLDivElement>): void => {};

  return (
    <div className="flex justify-center items-center h-screen bg-gray-700">
      {gridLayout.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="flex flex-col">
            {row.map((cellValue, columnIndex) => {
              return (
                <GridCell
                  key={`${rowIndex}-${columnIndex}`}
                  defaultValue={cellValue}
                  cellX={rowIndex}
                  cellY={columnIndex}
                  handleFocus={handleFocus}
                  handleBlur={handleBlur}
                  activeCell={activeCell}
                  inTheSameBlock={inTheSameBlock(activeCell, rowIndex, columnIndex)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default RenderGrid;
