import { useCallback, useMemo, useState } from "react";
import { PinInput } from "./PinInput";
import clsx from "clsx";

export interface PinFormProps {
  className?: string;
  disabled: boolean;
  length: number;
  onSubmit: (value: string[]) => void;
}

export function PinForm({
  disabled,
  length,
  onSubmit,
  className,
}: PinFormProps) {
  const [pin, setPin] = useState<string[]>([]);

  const isValid = useMemo(() => {
    return (
      pin.length === length &&
      !pin.some((v) => !v)
    )
  }, [pin, length]);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) {
      return;
    }
    onSubmit(pin);
    setPin([]);
  }, [isValid, pin, onSubmit]);

  const handleReset = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPin([]);
  }, [setPin]);

  return (
    <form
      className={clsx('flex flex-col gap-4', className)}
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <p className="text-md text-center">
        Try to guess the {length} digit code
      </p>
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
