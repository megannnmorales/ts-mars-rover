import { Instruction } from "../types/commands";

export function parseInstructions(rawInstructions: string): Instruction[] {
  const InstructionsList = [...rawInstructions];

  if (isInstructionList(InstructionsList)) {
    return InstructionsList;
  } else throw new Error("Invalid instruction");
}

function isInstructionList(list: string[]): list is Instruction[] {
  const acceptedCharacters = ["L", "R", "M"];

  return list.every((letter) => acceptedCharacters.includes(letter));
}
