import { range } from "../utils";

export function generateSecret(length: number): string[] {
  return range(0, length).map(() => Math.floor(Math.random() * 10).toString());
}

function submitAction(state: GameState, value: string[]): GameState {
  const charMatches = value.filter((char) => state.secret.includes(char)).length;
  const positionMatches = value.filter((char, i) => char === state.secret[i]).length;
  const success = positionMatches === state.secret.length;
  const attempt = {
    value,
    charMatches,
    positionMatches,
    timestamp: Date.now(),
    success,
  };
  return {
    ...state,
    attempts: [attempt, ...state.attempts],
    success,
  }
}

function resetAction(state: GameState): GameState {
  return {
    length: state.length,
    secret: generateSecret(state.length),
    attempts: [],
    success: false
  }
}

export function gameReducer(state: GameState, action: GameAction) {
  if (action.type === 'submit') {
    return submitAction(state, action.payload);
  } else if (action.type === 'reset') {
    return resetAction(state);
  } else {
    return state;
  }
}