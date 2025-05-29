import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { computeResult, generateSecret } from "./utils";

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    submit: (state, action: PayloadAction<string[]>) => {
      const value = action.payload;
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
      state.attempts.unshift(attempt);
      state.success = success;
    },
    reset: (state) => {
      state.secret = generateSecret(state.length);
      state.attempts = [];
      state.success = false;
    }
  }
})