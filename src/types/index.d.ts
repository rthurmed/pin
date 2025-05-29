interface Attempt {
  value: string[];
  result: number[];
  timestamp: number;
  success: boolean;
}

interface GameState {
  length: number;
  secret: string[];
  attempts: Attempt[];
  success: boolean;
}
