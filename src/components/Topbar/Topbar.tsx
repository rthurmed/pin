import { ButtonConfig } from "./ButtonConfig";
import { ButtonReset } from "./ButtonReset";

export function Topbar() {
  return (
    <div className="flex flex-row justify-between">
      <ButtonReset />
      <h1 className='text-3xl font-bold text-center'>PIN</h1>
      <ButtonConfig />
    </div>
  )
}