
import { Plus } from "lucide-react";
import { useState } from "react";

import FormComboboxDemoInput from "@/components/forms/FormCombobox";
import FormTextInput from "@/components/forms/FormTextInput";

export default function CropFormContent() {
  const [type,settype] = useState<string>()
  return (
    <div className="bg-sidebar h-full flex  border-border border mt-3 w-full" >
      <div className="w-1/2 border-r border-border"> 
      <p onClick={()=>settype('Страна')} className="bg-background p-3 text-[14px] border-b border-border mb-3 pl-4">Оснавные</p>
      <p className="p-2 pl-4 text-[14px] hover:bg-background cursor-pointer">Страна</p>
      <p className="p-2 pl-4 text-[14px] hover:bg-background cursor-pointer">Страна</p>
      <p onClick={()=>settype('Страна')} className="p-2 pl-4 text-[14px] hover:bg-background cursor-pointer">Страна</p>
      <p onClick={()=>settype('Партии')} className="p-2 pl-4 text-[14px] hover:bg-background cursor-pointer" >Партии</p>
      </div>
      <div className="bg-sidebar w-1/2 ">
      <p className="bg-background text-[14px] p-3 w-full border-b border-border flex justify-between  items-center pl-4">
        Страна
          <button className="cursor-pointer"> <Plus size={16}/></button>
      </p>
        <FormTextInput classNameInput="mb-3 m-1 w-[95%] bg-sidebar border border-border" name="name" placeholder="name"  />

        {
          type === "Партии" && 
          <FormComboboxDemoInput classNameChild="mb-3 m-1 w-[95%] rounded-none bg-sidebar border border-border"  className="w-full" option={[{label:"new",value:"new"}]} name="nam1" placeholder="name"  />
        }
      <p className="p-2 pl-4 text-[14px] hover:bg-background cursor-pointer">Страна</p>
      <p className="p-2 pl-4 text-[14px] hover:bg-background cursor-pointer">Страна</p>
      <p className="p-2 pl-4 text-[14px] hover:bg-background cursor-pointer" >Страна</p>
      </div>
    </div>
  );
}
