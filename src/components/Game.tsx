import { useCallback, useReducer } from "react";
import { gameReducer, generateSecret } from "../reducers/gameReducer";
import { Dialog } from "./Dialog";
import { History } from "./History";

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
    <main className="flex flex-col pb-48 w-full md:max-w-[600px] m-auto">
      <History attempts={state.attempts} />
      <Dialog state={state} onSubmit={handleSubmit} />
    </main>
  )
}