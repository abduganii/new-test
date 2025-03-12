import FormComboboxDemoInput from "@/components/forms/FormCombobox";
import FormTextInput from "@/components/forms/FormTextInput";

export default function CropFormContent() {
  return (
    <div className=" h-full flex border-border border mt-3 w-full" >
      <div className="w-full  text-end border-r border-border"> 
      <p className="bg-background p-3 border-b border-border  pl-4">Добавить штрих-код</p>
      <div className="grid border-border pt-3  bg-sidebar border-b row-start  py-4.5 px-4 gap-1 lg:grid-cols-2">
        <FormTextInput  label="name"  name="name" placeholder="name"  />
        <FormComboboxDemoInput label="name" className="w-full" option={[{label:"new",value:"new"}]} name="nam1" placeholder="name"  />
      </div>
      <button className="ml-auto bg-sidebar cursor-pointer inline-block mr-1 px-3 py-[5px] border-border border mt-[2px]">Добавить</button>
      </div>
    </div>
  );
}
