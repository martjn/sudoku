const randomNumberInRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function createNewGrid() {
  let gridArray = Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }, () => randomNumberInRange(0, 9))
  );
  return gridArray;
}

export default createNewGrid;
