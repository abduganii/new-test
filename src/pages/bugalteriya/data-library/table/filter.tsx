import { Plus } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function Filter() {
    return(
    <div className="bg-background w-full flex justify-between border-b border-border p-1">
        <div className=" inline-flex border border-border ">
            <p className="inline-block text-nowrap bg-foreground p-1.5 px-3 cursor-pointer text-[#E0DFD6]">Активные штрих-коды</p>
            <p className="inline-block text-nowrap  p-1.5 px-3 bg-sidebar text-foreground cursor-pointer obsalute">Проблемные штрих-коды</p>
        </div>

        <Input className="border-border border max-w-[232px] bg-[#E0DFD6]" placeholder="search"/>

        <div className="flex gap-1">
        <button className="border-border p-2 py-1 cursor-pointer  gap-1 shadow-none rounded-none border-[1px]  flex items-center justify-center bg-[#E0DFD6] hover:bg-[#D1D0C8]">
        <Plus size={16}/>
      </button>
        </div>
    </div>
    )
}