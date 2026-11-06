import { CompassDirection } from "./commands";

interface Position {
  readonly x: number;
  readonly y: number;
  readonly facing: CompassDirection;
}
