import TopSite from "@/components/top-site";

import Action from "./action";
import List from "./list";

export default function SinglePage() {
  return (
    <div className="w-full">
      <TopSite />
      <div className="flex  items-start gap-[10px] p-[5px]">
        <Action />
        <List />
      </div>
    </div>
  );
}