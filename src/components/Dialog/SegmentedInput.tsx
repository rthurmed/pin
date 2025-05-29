import { useCallback, useRef } from "react";
import { range } from "../../utils";

export interface SegmentedInputProps {
  value: string[];
  maxLength: number;
  disabled: boolean;
  onChange: (value: string[]) => void;
  validOptions?: string[];
}

export function SegmentedInput({
  value,
  maxLength,
  disabled,
  onChange,
  validOptions = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
}: SegmentedInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const char = e.target.value.charAt(0);
      if (char && !validOptions.includes(char)) {
        return;
      }

      const newValue = value.splice(0, maxLength);
      newValue[index] = char;
      onChange(newValue);

      let next = null;
      if (char) {
        next = inputRefs.current[index + 1];
      } else {
        next = inputRefs.current[index - 1];
      }
      next?.focus();
    },
    [value, maxLength, validOptions, onChange]
  )

  return (
    <div className="flex flex-row gap-2 justify-center">
      {range(0, maxLength).map((i) => (
        <input
          key={i}
          ref={elem => { inputRefs.current[i] = elem }}
          type='text'
          className='input input-xl input-bordered w-full text-center appearance-none'
          inputMode="numeric"
          pattern="[0-9]*"
          value={value[i] ?? ''}
          disabled={disabled}
          onChange={(e) => handleInputChange(e, i)}
        />
      ))}
    </div>
  )
}