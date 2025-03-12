
import { DialogTitle } from "@radix-ui/react-dialog";
import { useQueryState } from "nuqs";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import FormComboboxDemoInput from "@/components/forms/FormCombobox";

export default function FormContent() {
  const [id, setId] = useQueryState("id");
  return (
    <Dialog  open={Boolean(id)} onOpenChange={()=>setId(null)}>
      <DialogContent className="sm:max-w-[796px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>

        <div className="mx-15 my-8">
          <h3 className="text-foreground text-[17px] font-medium">Данные о партии и поставщике</h3>
          <p className="mt-0.5 text-foreground/45 text-[12px] mb-4">Укажите данные о партии: откуда она поступила, какой поставщик и к какой партии за этот год она относится.</p>

          <div className="flex gap-2">
          <FormComboboxDemoInput label="name" className="w-full" option={[{label:"new",value:"new"}]} name="nam1" placeholder="name"  />
          <FormComboboxDemoInput label="name" className="w-full" option={[{label:"new",value:"new"}]} name="nam1" placeholder="name"  />
          <FormComboboxDemoInput label="name" className="w-full" option={[{label:"new",value:"new"}]} name="nam1" placeholder="name"  />
          </div>
          <h3 className="text-foreground mt-[30px] text-[17px] font-medium">Данные о партии и поставщике</h3>
          <p className="mt-0.5 text-foreground/45 text-[12px] mb-4">Укажите данные о партии: откуда она поступила, какой поставщик и к какой партии за этот год она относится.</p>


          <div className="flex gap-2">
          <FormComboboxDemoInput label="name" className="w-full" option={[{label:"new",value:"new"}]} name="nam1" placeholder="name"  />
          <FormComboboxDemoInput label="name" className="w-full" option={[{label:"new",value:"new"}]} name="nam1" placeholder="name"  />
          <FormComboboxDemoInput label="name" className="w-full" option={[{label:"new",value:"new"}]} name="nam1" placeholder="name"  />
          </div>
          <h3 className="text-foreground mt-[30px] text-[17px] font-medium">Данные о партии и поставщике</h3>
          <p className="mt-0.5 text-foreground/45 text-[12px] mb-4">Укажите данные о партии: откуда она поступила, какой поставщик и к какой партии за этот год она относится.</p>


          <div className="flex  gap-2">
          <FormComboboxDemoInput label="name" className="w-full" option={[{label:"new",value:"new"}]} name="nam1" placeholder="name"  />
          <FormComboboxDemoInput label="name" className="w-full" option={[{label:"new",value:"new"}]} name="nam1" placeholder="name"  />
          <FormComboboxDemoInput label="name" className="w-full" option={[{label:"new",value:"new"}]} name="nam1" placeholder="name"  />
          </div>
        </div>
        <DialogFooter className="justify-start">
          <Button type="submit">Save changes</Button>
          <Button variant={'outline'} type="button">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
