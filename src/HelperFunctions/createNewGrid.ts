import { randomNumberInRange } from "./Random/randomNum";

function createNewGrid() {
  //   let gridArray = Array.from({ length: 9 }, () =>
  //     Array.from({ length: 9 }, () => randomNumberInRange(0, 9))
  //   );
  //   console.log(gridArray);
  let gridArray = [];
  for (let a = 0; a < 9; a++) {
    let initialArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log("InitialArray => ", initialArray);
    // shuffle the created array
    for (let i = 0; i < 9; i++) {
      let j = randomNumberInRange(i, 8);
      let temp = initialArray[i];
      initialArray[i] = initialArray[j];
      initialArray[j] = temp;
    }
    gridArray.push(initialArray);
  }
  return gridArray;
}

export default createNewGrid;
