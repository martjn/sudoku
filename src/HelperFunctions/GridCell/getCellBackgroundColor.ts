import { activeCellState } from "../../Types/activeCellState";

export const getCellBackgroundColor = (
  activeCell: activeCellState,
  value: number,
  x: number,
  y: number,
  inTheSameBlock: boolean
): string => {
  if (
    (activeCell.x === x && activeCell.y === y) ||
    activeCell.value === value
  ) {
    return "bg-blue-500";
  }
  if (activeCell.x === x || activeCell.y === y || inTheSameBlock) {
    return "bg-blue-300";
  }

  return "bg-white";
};
