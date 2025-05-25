import { AttemptItemResult } from "../utils/game";

export function generateSecret(length: number): string[] {
  const values: string[] = [];
  for (let i = 0; i < length; i++) {
    let value: string | undefined = undefined;
    while (value === undefined || values.includes(value)) {
      value = Math.floor(Math.random() * 10).toString();
    }
    values.push(value);
  }
  return values;
}

function computeResult(value: string[], secret: string[]): number[] {
  return value.map((item, index) => {
    if (item === secret[index]) {
      return AttemptItemResult.HIT;
    }
    if (secret.includes(item)) {
      return AttemptItemResult.WRONG_POSITION;
    }
    return AttemptItemResult.MISS;
  })
}

function submitAction(state: GameState, value: string[]): GameState {
  const charMatches = value.filter((char) => state.secret.includes(char)).length;
  const positionMatches = value.filter((char, i) => char === state.secret[i]).length;
  const success = positionMatches === state.secret.length;
  const result = computeResult(value, state.secret);
  const attempt = {
    value,
    result,
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