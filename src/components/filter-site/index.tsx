import { CheckIcons, ExportIcons, FilterIcons, RemoveIcons } from "../icons";

export default function FilterSite() {
  return (
    <div className="flex bg-[#E0DFD6]  gap-1 px-[39px] py-[14px] border-b border-solid border-[#C3C3BB] ">
      <button className="border-[#D1D0C8] text-black text-[16px] py-[9px] px-[14px] leading-[19px]  gap-1 shadow-none rounded-none border-[1px]  flex items-center justify-center bg-[#E0DFD6] hover:bg-[#D1D0C8]">
        <FilterIcons /> Фильтр
      </button>
      <button className="border-[#D1D0C8] text-black text-[16px] py-[9px] px-[14px] leading-[19px]  gap-1 shadow-none rounded-none border-[1px]  flex items-center justify-center bg-[#E0DFD6] hover:bg-[#D1D0C8]">
        <span className="opacity-45">Сортировка по:</span>
        Алфавита
        <FilterIcons />
      </button>
      <div className="border-[#D1D0C8] text-black px-[14px]   gap-4 shadow-none rounded-none border-[1px]  flex items-center justify-center bg-[#DBDAD1]">
        <p className="opacity-45 text-foreground flex items-center gap-[2px]">
          <CheckIcons /> Все:
        </p>
        <p className="text-[14px] leading-[19px]">1266 шт</p>
        <p className="text-[14px] leading-[19px]">18 990 м²</p>
        <p className="text-[14px] leading-[19px]">3479 $</p>
        <p className="text-[14px] leading-[19px]">22 443 280 560 сум</p>
      </div>
      <button className="border-[#D1D0C8] ml-auto text-black text-[16px] py-[9px] px-[14px] leading-[19px]  gap-1 shadow-none rounded-none border-[1px]  flex items-center justify-center bg-[#E0DFD6] hover:bg-[#D1D0C8]">
        <ExportIcons /> Экспорт
      </button>
      <button className="border-[#D1D0C8] text-black text-[16px] py-[9px] px-[14px] leading-[19px]  gap-1 shadow-none rounded-none border-[1px]  flex items-center justify-center bg-[#E0DFD6] hover:bg-[#D1D0C8]">
        <RemoveIcons /> Убрать
      </button>
    </div>
  );
}
