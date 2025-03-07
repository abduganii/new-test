import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";
import ActivetyTemplate from "./activity-templates";
import Diseases from "./diseases";
import { useQueryState, parseAsString } from "nuqs";

import Fertilizers from "./fertilizations";
import Reels from "./reels";
const TabArr = [
  {
    value: "description",
  },
  {
    value: "diseases",
  },
  {
    value: "reels",
  },
  {
    value: "fertilizations",
  },
];
export default function SinglePage() {
  const { t } = useTranslation();
  const [type, setType] = useQueryState(
    "type",
    parseAsString.withDefault("description")
  );
  return (
    <Tabs
      defaultValue={type}
      onValueChange={(e) => setType(e)}
      className="w-full mt-4"
    >
      <TabsList>
        {TabArr?.map((e) => (
          <TabsTrigger value={e?.value}>{t(e?.value)}</TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="description">
        <ActivetyTemplate />
      </TabsContent>
      <TabsContent value="diseases">
        <Diseases />
      </TabsContent>
      <TabsContent value="reels">
        <Reels />
      </TabsContent>
      <TabsContent value="fertilizations">
        <Fertilizers />
      </TabsContent>
    </Tabs>
  );
}
