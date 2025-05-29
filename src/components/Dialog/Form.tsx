import clsx from "clsx";
import { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submit } from "../../store/game/actions";
import { selectLength, selectSuccess } from "../../store/game/selectors";
import { SegmentedInput } from "./SegmentedInput";

export interface FormProps {
  className?: string;
}

export function Form({
  className,
}: FormProps) {
  const length = useSelector(selectLength);
  const success = useSelector(selectSuccess);
  const dispatch = useDispatch();

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
    dispatch(submit(pin));
    setPin([]);
  }, [isValid, pin, dispatch]);

  const handleReset = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPin([]);
  }, []);

  return (
    <form
      className={clsx('flex flex-col gap-4', className)}
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <p className="text-md text-center">
        Guess the {length} digit code
      </p>
      <SegmentedInput
        value={pin}
        maxLength={length}
        onChange={setPin}
        disabled={success}
      />
      <div className="flex flex-row gap-2 items-stretch">
        <button
          type='reset'
          className='btn btn-neutral flex-1'
          disabled={success}
        >
          Reset
        </button>
        <button
          type='submit'
          className='btn btn-primary flex-1'
          disabled={success || !isValid}
        >
          Submit
        </button>
      </div>
    </form>
  )
}
