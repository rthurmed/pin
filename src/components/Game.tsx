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
    <main className="flex flex-col pb-48">
      <History attempts={state.attempts} />
      <PinForm
        className="fixed bottom-0 left-0 right-0 p-8 pt-4 bg-base-100 shadow-2xl upward-shadow"
        disabled={state.success}
        length={state.length}
        onSubmit={handleSubmit}
      />
    </main>
  )
}