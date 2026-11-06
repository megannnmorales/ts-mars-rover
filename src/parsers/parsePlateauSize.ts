import { PlateauSize } from "../types/plateau";

export function parsePlateauSize(rawPlateauSize: string): PlateauSize {
  if (validatePlateauInput(rawPlateauSize)) {
    return {
      x: parseInt(rawPlateauSize[0]),
      y: parseInt(rawPlateauSize[rawPlateauSize.length - 1]),
    };
  } else throw new Error("Invalid plateau size");
}

function validatePlateauInput(rawPlateauSize: string): boolean {
  const plateauSizeList = rawPlateauSize.split(" ");
  const acceptedNumbers = ["0", "1", "2", "3", "4", "5"];

  if (plateauSizeList.length != 2) {
    return false;
  }

  return plateauSizeList.every((char) => acceptedNumbers.includes(char));
}
