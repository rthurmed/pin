import clsx from "clsx";
import { useMemo } from "react";
import { AttemptItemResult } from "../utils/game";
import { HistoryItemIcon } from "./HistoryItemIcon";

export type HistoryItemProps = Attempt

export function HistoryItem({
  value,
  result,
  timestamp,
  success,
}: HistoryItemProps) {
  const timestampString = useMemo(() => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
  }, [timestamp]);

  return (
    <li className="list-row items-center">
      <HistoryItemIcon
        success={success}
        result={result}
      />
      <div className="flex flex-row justify-center gap-2">
        {value.map((v, i) => (
          <div
            key={i}
            className={clsx("btn aspect-square max-w-[40px]", {
              'btn-success': result[i] === AttemptItemResult.HIT,
              'btn-warning': result[i] === AttemptItemResult.WRONG_POSITION,
              'btn-error': result[i] === AttemptItemResult.MISS,
            })}
          >
            {v}
          </div>
        ))}
      </div>
      <p className="justify-self-end">
        {timestampString}
      </p>
    </li >
  )
}
