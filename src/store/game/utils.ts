import { AttemptItemResult } from "../../utils/game";

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

export function computeResult(value: string[], secret: string[]): number[] {
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