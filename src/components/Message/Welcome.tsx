import clsx from "clsx";
import { Result } from "../History/Result";
import { Message } from "./Message";
import { useSelector } from "react-redux";
import { selectAttempts } from "../../store/game/selectors";

export interface WelcomeProps {
  className?: string;
}

export function Welcome({
  className
}: WelcomeProps) {
  const attemps = useSelector(selectAttempts);
  return (
    <Message
      icon="heart"
      className={clsx(className, {
        "hidden": attemps.length > 0
      })}
    >
      <h1 className="text-2xl">
        WELCOME TO PIN
      </h1>
      <p className="py-2">
        Your objective is guessing a randomly generated 4 digit code.
        Everytime you try, you will get a result composed by these symbols:
      </p>
      <p className="m-auto">
        <ul>
          <li className="flex gap-2 items-center">
            <Result value={0} />
            a number is <strong>correct</strong>
          </li>
          <li className="flex gap-2 items-center">
            <Result value={1} />
            a number is in <strong>wrong slot</strong>
          </li>
          <li className="flex gap-2 items-center">
            <Result value={2} />
            a number is <strong>wrong</strong>
          </li>
        </ul>
      </p>
    </Message>
  )
}