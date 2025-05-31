import clsx from "clsx";
import { Message } from "./Message";
import { useSelector } from "react-redux";
import { selectAttempts, selectSuccess, selectTimestamps } from "../../store/game/selectors";
import { useMemo } from "react";

export interface YouWinProps {
  className?: string;
}

export function YouWin({
  className
}: YouWinProps) {
  const attemps = useSelector(selectAttempts);
  const success = useSelector(selectSuccess);
  const [startedAt, completedAt] = useSelector(selectTimestamps);

  const minutes = useMemo(() => {
    if (!startedAt || !completedAt) {
      return 0;
    }
    const duration = completedAt - startedAt;
    const value = Math.floor(duration / 60000);
    return value;
  }, [startedAt, completedAt]);

  return (
    <Message
      icon="trophy"
      className={clsx(className, {
        "hidden": !success
      })}
    >
      <h1 className="text-2xl">
        YOU WIN!
      </h1>
      <p className="py-2">
        You took {minutes} minutes and {attemps.length} attempts.
      </p>
      <p>
        Thanks for playing!
      </p>
    </Message >
  )
}