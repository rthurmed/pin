import clsx from "clsx";
import { AttemptItemResult } from "../../utils/game";

export interface ResultProps {
  value: number;
}

export function Result({
  value
}: ResultProps) {
  return (
    <div
      className={clsx("w-4 h-4 rounded-full", {
        "bg-success": value === AttemptItemResult.HIT,
        "bg-warning": value === AttemptItemResult.WRONG_POSITION,
        "bg-base-200": value === AttemptItemResult.MISS,
      })}
    />
  )
}