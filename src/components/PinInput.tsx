import { useCallback } from "react";
import { range } from "../utils";

export interface PinInputProps {
  value: string[];
  maxLength: number;
  disabled: boolean;
  onChange: (value: string[]) => void;
  validOptions?: string[];
}

export function PinInput({
  value,
  maxLength,
  disabled,
  onChange,
  validOptions = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
}: PinInputProps) {
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const char = e.target.value.charAt(0);
      if (!validOptions.includes(char)) {
        return;
      }

      const newValue = value.splice(0, maxLength);
      newValue[index] = char;
      onChange(newValue);

      if (char) {
        e.target.nextSibling?.focus();
      } else {
        e.target.previousSibling?.focus();
      }
    },
    [value, maxLength, validOptions, onChange]
  )

  return (
    <div className="flex flex-row gap-2 justify-center">
      {range(0, maxLength).map((i) => (
        <input
          key={i}
          type='text'
          value={value[i] ?? ''}
          onChange={(e) => handleInputChange(e, i)}
          className='input input-xl input-bordered w-full text-center'
          disabled={disabled}
        />
      ))}
    </div>
  )
}