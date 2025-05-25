import { useCallback, useMemo, useState } from "react";
import { PinInput } from "./PinInput";

export interface PinFormProps {
  disabled: boolean;
  length: number;
  onSubmit: (value: string[]) => void;
}

export function PinForm({
  disabled,
  length,
  onSubmit
}: PinFormProps) {
  const [pin, setPin] = useState<string[]>([]);

  const isValid = useMemo(() => pin.length === length, [pin, length]);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(pin);
    setPin([]);
  }, [pin, onSubmit]);

  const handleReset = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPin([]);
  }, [setPin]);

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit} onReset={handleReset}>
      <PinInput
        value={pin}
        maxLength={length}
        onChange={setPin}
        disabled={disabled}
      />
      <div className="flex flex-row gap-2 items-stretch">
        <button
          type='reset'
          className='btn btn-neutral flex-1'
          disabled={disabled}
        >
          Reset
        </button>
        <button
          type='submit'
          className='btn btn-primary flex-1'
          disabled={disabled || !isValid}
        >
          Submit
        </button>
      </div>
    </form>
  )
}
