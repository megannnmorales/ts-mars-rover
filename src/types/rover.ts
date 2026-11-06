import { CompassDirection } from "./commands";

interface RoverPosition {
  readonly x: number;
  readonly y: number;
  readonly facing: CompassDirection;
}
