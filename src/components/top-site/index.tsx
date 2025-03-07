import { TopSiteType } from "@/type";

import { File1Icons, FileIcons, PlusIcons, SearchAIIcons } from "../icons";

export default function TopSite({ searchPlaceholder }: TopSiteType) {
  return (
    <div className="pl-[51px] pr-[41px] py-[10px] flex gap-2 items-center border-b border-[#C3C3BB]">
      <SearchAIIcons />
      <input
        placeholder={searchPlaceholder || "search"}
        className="text-[16px] w-full leading-[19px] text-[#212121]"
      />

      <div className="border cursor-pointer border-[#C3C3BB] hover:bg-[#D6D6CD] active:bg-transparent p-[14px]">
        <FileIcons />
      </div>
      <div className="border cursor-pointer border-[#C3C3BB] hover:bg-[#D6D6CD] active:bg-transparent p-[14px]">
        <File1Icons />
      </div>
      <button className="gap-[1.5px] ml-1 py-[14px] px-[38px] text-[16px] leading-[19px] bg-[#D7FE62] flex items-center justify-center">
        <PlusIcons />
        Добавить
      </button>
    </div>
  );
}
