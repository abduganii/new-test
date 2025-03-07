import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import debounce from "@/utils/debounce";
import { Plus } from "lucide-react";
import { useQueryState } from "nuqs";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Filters() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [_, setSearch] = useQueryState("search");
  return (
    <div className="bg-white py-4 px-2  rounded-t-sm flex  ">
      <Input
        onChange={debounce(
          (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
          500
        )}
        placeholder={t("search")}
        className="max-w-[250px]"
      />
      <Button className="gap-[2px] ml-auto" onClick={() => navigate("new")}>
        <Plus /> {t("add")}
      </Button>
    </div>
  );
}
