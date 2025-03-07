import { parseAsInteger, useQueryState } from "nuqs";

import { useFertilizations } from "./queries";
import { FertilizersColumns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { useParams } from "react-router-dom";

export default function Fertilizers() {
  const { id } = useParams();
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(10));
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const { data, isLoading } = useFertilizations({
    queries: {
      pagination: { pageSize: limit, page },
      populate: "*",
      sort: "id:desc",
      filters: {
        crop: {
          id: id,
        },
      },
    },
  });

  return (
    <div className=" w-full">
      <DataTable
        isLoading={isLoading}
        columns={FertilizersColumns}
        data={data?.data ?? []}
        pageCount={data?.meta.pagination.pageCount}
      />
    </div>
  );
}
