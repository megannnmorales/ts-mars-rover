const INSTRUCTIONS = ["L", "R", "M"] as const;

export type Instruction = (typeof INSTRUCTIONS)[number];

const COMPASSDIRECTIONS = ["N", "E", "W", "S"] as const;

export type CompassDirection = (typeof COMPASSDIRECTIONS)[number];
