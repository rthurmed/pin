import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectAttempts } from "../../store/game/selectors";
import { Attempt } from "./Attempt";

export function History() {
  const attempts = useSelector(selectAttempts);
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