import { parseAsInteger, useQueryState } from "nuqs";

import { DataTable } from "@/components/ui/data-table";

import { useParams } from "react-router-dom";
import { useDiseases } from "./queries";
import { DiseasesColumns } from "./columns";

export default function Diseases() {
  const { id } = useParams();
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(10));
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const { data, isLoading } = useDiseases({
    queries: {
      pagination: { pageSize: limit, page },
      populate: "*",
      sort: "createdAt:asc",
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
        columns={DiseasesColumns}
        data={data?.data ?? []}
        pageCount={data?.meta.pagination.pageCount}
      />
    </div>
  );
}
