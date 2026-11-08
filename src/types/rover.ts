import { CompassDirection } from "./commands";

export interface RoverPosition {
  readonly x: number;
  readonly y: number;
  readonly facing: CompassDirection;
}
