import type { RootState } from "../store";

export const selectAttempts = (state: RootState) => state.game.attempts;

export const selectSuccess = (state: RootState) => state.game.success;

export const selectLength = (state: RootState) => state.game.length;
