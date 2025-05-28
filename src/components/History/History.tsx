import clsx from "clsx";
import { Attempt } from "./Attempt";

export interface HistoryProps {
  attempts: Attempt[];
}

export function History({
  attempts
}: HistoryProps) {
  return (
    <ul className='list'>
      <li
        className={clsx("p-4 pb-2 text-xs opacity-60 tracking-wide", {
          "hidden": attempts.length === 0
        })}
      >
        Your past attempts
      </li>
      {attempts.map((item, i) => (
        <Attempt key={i} {...item} />
      ))}
    </ul>
  )
}