import { useState } from "react";
import { activeCellState } from "../../Types/activeCellState";
import { getCellBackgroundColor } from "../../HelperFunctions/GridCell/getCellBackgroundColor";
import { getCellBorderClass } from "../../HelperFunctions/GridCell/getCellBorderClass";

function GridCell({
  defaultValue,
  cellX,
  cellY,
  activeCell,
  inTheSameBlock,
  handleFocus,
  handleBlur,
}: {
  defaultValue: number;
  cellX: number;
  cellY: number;
  activeCell: activeCellState;
  inTheSameBlock: boolean;
  handleFocus: (
    e: React.FocusEvent<HTMLDivElement>,
    x: number,
    y: number
  ) => void;
  handleBlur: (
    e: React.FocusEvent<HTMLDivElement>,
    x: number,
    y: number
  ) => void;
}) {
  const [value, setValue] = useState(defaultValue);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    for (let i = 1; i <= 9; i++) {
      if (e.key === i.toString()) {
        setValue(i);
      }
    }
  };

  const cellBorder = getCellBorderClass(cellX, cellY);
  let cellBackgroundColor = getCellBackgroundColor(
    activeCell,
    value,
    cellX,
    cellY,
    inTheSameBlock
  );
  return (
    <div
      tabIndex={0}
      onFocus={(e) => handleFocus(e, cellX, cellY)}
      onBlur={(e) => handleBlur(e, cellX, cellY)}
      onKeyDown={(e) => handleKeyPress(e)}
      className={`flex justify-center align-middle w-16 h-16 cursor-default text-black text-4xl font-semibold ${cellBackgroundColor} ${cellBorder}`}
    >
      <div className="self-center">{value ? value : null}</div>
    </div>
  );
}

export default GridCell;
