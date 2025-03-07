import { ComboboxDemo } from "@/components/forms/Combobox";
import ShadcnSelect from "@/components/forms/Select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import debounce from "@/utils/debounce";
import { Plus } from "lucide-react";
import { useQueryState, parseAsString } from "nuqs";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const confirmeArr = [
  {
    value: "all",
    label: "all",
  },
  {
    value: "true",
    label: "confirmed",
  },
  {
    value: "false",
    label: "unConfirmed",
  },
];

export default function Filters() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [confirme, setConfirme] = useQueryState(
    "confirme",
    parseAsString.withDefault("all")
  );
  const [_, setSearch] = useQueryState("search");
  const [compony, setCompony] = useQueryState("compony");
  return (
    <div className="bg-white py-4 px-2  gap-2 rounded-t-sm flex  ">
      <ShadcnSelect
        className="w-full max-w-[250px]"
        value={confirme || ""}
        options={confirmeArr}
        // placeholder={placeholder ? t(placeholder) : ""}
        onChange={(e) => setConfirme(e || "")}
      />
      <ComboboxDemo
        value={compony || ""}
        onChange={(e) => setCompony(e || "")}
        options={confirmeArr}
        placeholder={"company"}
      />
      <Input
        onChange={debounce(
          (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
          500
        )}
        placeholder={t("search")}
        className="max-w-[250px] h-10"
      />
      <Button className="gap-[2px]  ml-auto" onClick={() => navigate("new")}>
        <Plus /> {t("add")}
      </Button>
    </div>
  );
}
