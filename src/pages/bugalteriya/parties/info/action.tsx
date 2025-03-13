import { FormProvider, useForm } from "react-hook-form";

import FormTextInput from "@/components/forms/FormTextInput";
import {
  BrCodeIcons,
  EditIcons,
  PlusIcons,
  QrCodeIcons,
  SearchAIIcons,
} from "@/components/icons";

export default function Action() {
    const form = useForm<any>();
  return (
    <div className="w-[34%]">
      <div className="border-[#CBCBC1] border w-full">
        <div className="bg-[#DBDAD1] border-[#CBCBC1] border-b  flex gap-1 p-[5px] ">
          <button className="gap-[1.5px] rounded-[2px] ml-1 py-[9px] px-[12px] text-[16px] text-[#E0DFD6] leading-[19px] bg-[#272727] flex items-center justify-center">
            <BrCodeIcons />
            Баркод
          </button>
          <button className="gap-[1.5px] rounded-[2px] ml-1 py-[9px] px-[12px] text-[16px] border-[#CBCBC1] border  leading-[19px] bg-[#E0DFD6] flex items-center justify-center">
            <QrCodeIcons />
            Баркод
          </button>
          <div className="flex items-center pl-2 justify-center bg-[#E0DFD6] border-[#CBCBC1] w-full border ">
            <SearchAIIcons />
            <input
              placeholder="search"
              className=" rounded-[2px]  py-[9px] pl-1 px-[12px]  text-[16px] w-full leading-[19px]"
            />
          </div>
          <button className="gap-[1.5px] rounded-[2px] p-[10px] ml-[10px] border-[#CBCBC1] border  bg-[#E0DFD6] flex items-center justify-center">
            <PlusIcons />
          </button>
        </div>

        <p className="py-[5px] px-[14px] leading-[14px] text-[12px] bg-[#DBDAD1] text-[#99998C]">
          Продукт найден
        </p>
        <FormProvider {...form}>
            <form
            className="py-[5px] px-[14px] flex flex-wrap bg-[#E0DFD6] pb-[66px] items-center gap-[8px]"
                onSubmit={form.handleSubmit((data) => {
                    console.log(data)
                // mutate({ data: data, id: id !== "new" ? id : undefined });
                })}
            >
                    <FormTextInput
                    name="name"
                    className="clom3"
                    placeholder="Коллекция"
                    label="Коллекция"
                />
                <FormTextInput
                    name="name"
                    className="clom3"
                    placeholder="Коллекция"
                    label="Коллекция"
                />
                <FormTextInput
                    name="name"
                    className="clom3"
                    placeholder="Коллекция"
                    label="Коллекция"
                />
                <FormTextInput
                    name="name"
                    className="clom3"
                    placeholder="Коллекция"
                    label="Коллекция"
                />
                <FormTextInput
                    name="name"
                    className="clom3"
                    placeholder="Коллекция"
                    label="Коллекция"
                />
                <FormTextInput
                    name="name"
                    className="clom3"
                    placeholder="Коллекция"
                    label="Коллекция"
                />
            </form>
        </FormProvider>
            

        <div className="bg-[#DBDAD1] mt-auto border-[#CBCBC1] border-b  flex gap-1 p-[5px] ">
          <button className="gap-[1.5px] rounded-[2px] text-[#767671]  py-[5px] px-[12px] text-[16px] border-[#CBCBC1] border  leading-[19px] bg-[#E0DFD6] flex items-center justify-center">
            <PlusIcons color={"#767671"} />
            Создать новый
          </button>
          <button className="gap-[1.5px] rounded-[2px] text-[#767671] ml-1 py-[5px] px-[12px] text-[16px] border-[#CBCBC1] border  leading-[19px] bg-[#E0DFD6] flex items-center justify-center">
            <EditIcons color={"#767671"} />
            Изменить
          </button>
          <button className="gap-[1.5px] rounded-[2px]  py-[5px] px-[12px] text-[16px] text-[#E0DFD6] leading-[19px] bg-[#272727] flex items-center justify-center ml-auto">
            Добавить
          </button>
        </div>
      </div>

      <div className="bg-[#191919] rounded-[2px] w-full p-[20px] mt-[10px]">
        <h3 className="text-[#00FF19] text-[16px] leading-[19px]">
          Дата: 01.01.2025
        </h3>
      </div>
    </div>
  );
}