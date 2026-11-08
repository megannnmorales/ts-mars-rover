import { parseInstructions } from "./parsers/parseInstructions";
import { parsePlateauSize } from "./parsers/parsePlateauSize";
import { parseRoverPosition } from "./parsers/parseRoverPosition";

const plateauSizeInstance = parsePlateauSize("5 5");

const roverPositionInstance = parseRoverPosition("1 2 N");

const instructionInstance = parseInstructions("LMLMLMLMM");

console.log(plateauSizeInstance, roverPositionInstance, instructionInstance);

const roverPositionInstanceTwo = parseRoverPosition("3 3 E");

const instructionInstanceTwo = parseInstructions("MMRMMRMRRM");

console.log(roverPositionInstanceTwo, instructionInstanceTwo);
