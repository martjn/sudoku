export const getCellBorderClass = (cellX: number, cellY: number): string => {
  let border_b = "border-b-0";
  let border_e = "border-e-0";
  let border_t = "border-t-0";
  let border_s = "border-s-0";

  // Add 1 to be able to make calculations
  const cell_x = cellX + 1;
  const cell_y = cellY + 1;

  if (cell_x % 3 === 0) {
    border_e = "border-e-4 border-e-black";
  } else {
    border_e = "border-e-2";
  }
  if (cell_y % 3 === 0) {
    border_b = "border-b-4 border-b-black";
  } else {
    border_b = "border-b-2";
  }
  if (cell_x === 1) {
    border_s = "border-s-4 border-s-black";
  }
  if (cell_y === 1) {
    border_t = "border-t-4 border-t-black";
  }

  return `${border_b} ${border_e} ${border_t} ${border_s}`;
};
