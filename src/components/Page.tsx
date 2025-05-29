import { Dialog } from "./Dialog";
import { History } from "./History";
import { Topbar } from "./Topbar";

export function Page() {
  return (
    <div className='p-4 flex flex-col gap-8'>
      <Topbar />
      <main className="flex flex-col pb-48 w-full md:max-w-[600px] m-auto">
        <History />
        <Dialog />
      </main>
    </div>
  )
}