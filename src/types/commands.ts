const INSTRUCTIONS = ["L", "R", "M"] as const;

type Instruction = (typeof INSTRUCTIONS)[number];

const COMPASSDIRECTIONS = ["N", "E", "W", "S"] as const;

type CompassDirection = (typeof COMPASSDIRECTIONS)[number];
