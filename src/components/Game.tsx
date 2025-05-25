import { useCallback, useReducer } from "react";
import { gameReducer, generateSecret } from "../reducers/gameReducer";
import { History } from "./History";
import { PinForm } from "./PinForm";

export function Game() {
  const BASE_LENGTH = 4;
  const [state, dispatch] = useReducer(gameReducer, {
    length: BASE_LENGTH,
    secret: generateSecret(BASE_LENGTH),
    attempts: [],
    success: false
  });

  const handleSubmit = useCallback((value: string[]) => {
    dispatch({ type: 'submit', payload: value });
  }, [dispatch]);

  return (
    <main className="flex flex-col gap-4">
      <PinForm disabled={state.success} length={state.length} onSubmit={handleSubmit} />
      <History attempts={state.attempts} />
    </main>
  )
}