interface Attempt {
  value: string[];
  result: AttemptItemResult[];
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
