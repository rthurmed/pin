import { generateSecret } from "./utils";

export const initialState: GameState = {
  length: 4,
  secret: generateSecret(4),
  attempts: [],
  success: false
}