interface Attempt {
  value: string[];
  charMatches: number;
  positionMatches: number;
  timestamp: number;
  success: boolean;
}

interface GameState {
  length: number;
  secret: string[];
  attempts: Attempt[];
  success: boolean;
}

type GameAction = {
  type: 'submit';
  payload: string[];
} | {
  type: 'reset';
}
