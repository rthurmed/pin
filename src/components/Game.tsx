import { Dialog } from "./Dialog";
import { History } from "./History";

export function Game() {
  return (
    <main className="flex flex-col pb-48 w-full md:max-w-[600px] m-auto">
      <History />
      <Dialog />
    </main>
  )
}