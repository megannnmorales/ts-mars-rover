import { RoverPosition } from "../types/rover";
import { CompassDirection } from "../types/commands";

export function parseRoverPosition(rawRoverPosition: string): RoverPosition {
  const roverPositionList = rawRoverPosition.split(" ");
  const lastELementInList = roverPositionList[roverPositionList.length - 1];
  let directionValue = lastELementInList.toString();
  const coordinatesList = roverPositionList.slice(0, 2);

  if (roverPositionList.length != 3) {
    throw new Error("Invalid rover position length");
  }
  if (!validateRoverDirection(directionValue)) {
    throw new Error("Invalid compass direction");
  }

  if (!validateRoverCoordinates(coordinatesList)) {
    throw new Error("Invalid co-ordinates");
    throw new Error("Invalid coordinates");
  }

  return {
    x: parseInt(roverPositionList[0]),
    y: parseInt(roverPositionList[1]),
    facing: directionValue,
  };
}

function validateRoverCoordinates(coordinatesList: string[]): boolean {
  const acceptedCoordinates = ["0", "1", "2", "3", "4", "5"];

  return coordinatesList.every((integer) =>
    acceptedCoordinates.includes(integer),
  );
}

function validateRoverDirection(
  directionValue: string,
): directionValue is CompassDirection {
  const acceptedDirections = ["N", "E", "S", "W"];

  return acceptedDirections.includes(directionValue);
}
