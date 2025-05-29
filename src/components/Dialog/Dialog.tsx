import { useMemo } from "react";
import { useVisualViewport } from "../../hooks/useVisualViewport";
import { Form } from "./Form";

export interface DialogProps {
  state: GameState;
  onSubmit: (value: string[]) => void;
}

export function Dialog({
  state,
  onSubmit
}: DialogProps) {
  const { height } = useVisualViewport();

  const dialogStyle = useMemo(() => {
    return {
      top: height ? height - 200 : '',
    }
  }, [height]);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 flex flex-row justify-center text-base-content transition-all duration-200 bg-transparent"
      style={dialogStyle}
    >
      <Form
        className="p-8 pt-4 bg-base-100 shadow-2xl upward-shadow md:max-w-[600px] md:rounded-t-2xl"
        disabled={state.success}
        length={state.length}
        onSubmit={onSubmit}
      />
    </div>
  )
}