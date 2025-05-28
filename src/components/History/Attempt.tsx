import { useMemo } from "react";
import { AttemptItemResult } from "../../utils/game";
import { Icon } from "./Icon";
import { Result } from "./Result";

export type AttemptProps = Attempt

export function Attempt({
  value,
  result,
  success,
}: AttemptProps) {
  const status = useMemo(() => {
    if (success) {
      return -1;
    } else if (result.includes(AttemptItemResult.HIT)) {
      return AttemptItemResult.HIT;
    } else if (result.includes(AttemptItemResult.WRONG_POSITION)) {
      return AttemptItemResult.WRONG_POSITION;
    } else {
      return AttemptItemResult.MISS;
    }
  }, [success, result]);

  const orderedResults = useMemo(() => {
    return result.sort((a, b) => a - b)
  }, [result])

  return (
    <li className="list-row">
      <Icon value={status} />
      <div className="flex-1 flex flex-col gap-2">
        <div className=" flex flex-row gap-2">
          {value.map((v, i) => (
            <div key={i} className={"btn aspect-square max-w-[40px]"}>
              {v}
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-2">
          {orderedResults.map((value, i) => (
            <Result key={i} value={value} />
          ))}
        </div>
      </div>
    </li >
  )
}
