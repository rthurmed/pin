import clsx from "clsx";
import { useMemo } from "react";

type ItemStatus = 'success' | 'positionmatches' | 'charmatches' | 'fail';

export interface HistoryItemProps {
  value: string[];
  charMatches: number;
  positionMatches: number;
  timestamp: number;
  success: boolean;
}

export function HistoryItem({
  value,
  charMatches,
  positionMatches,
  timestamp,
  success,
}: HistoryItemProps) {
  const status = useMemo<ItemStatus>(() => {
    if (success) {
      return 'success';
    } else if (positionMatches > 0) {
      return 'positionmatches';
    } else if (charMatches > 0) {
      return 'charmatches';
    } else {
      return 'fail';
    }
  }, [positionMatches, charMatches, success]);

  const timestampString = useMemo(() => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
  }, [timestamp]);

  return (
    <li className="list-row">
      <div
        className={clsx('text-success', {
          "hidden": status !== 'success',
        })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
      </div>
      <div
        className={clsx('text-warning', {
          "hidden": status !== 'positionmatches',
        })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
        </svg>
      </div>
      <div
        className={clsx('text-warning', {
          "hidden": status !== 'charmatches',
        })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
        </svg>
      </div>
      <div
        className={clsx('text-error', {
          "hidden": status !== 'fail',
        })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg">
          {value.join('')}
        </p>
        <div
          className={clsx("badge badge-soft badge-warning", { "hidden": !charMatches })}
        >
          {charMatches} numbers are right!
        </div>
        <div
          className={clsx("badge badge-soft badge-success", { "hidden": !positionMatches })}
        >
          {positionMatches} positions are right!
        </div>
      </div>
      <p>
        {timestampString}
      </p>
    </li >
  )
}
