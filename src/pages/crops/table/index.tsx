import { parseAsInteger, useQueryState } from "nuqs";

import { DataTable } from "@/components/ui/data-table";

import { paymentColumns } from "./columns";
import Filters from "./filters";
import useCrops from "./queries";

export default function Page() {
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(10));
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [search] = useQueryState("search");
  const { data, isLoading } = useCrops({
    queries: {
      pagination: { pageSize: limit, page },
      populate: "*",
      sort: "createdAt:desc",
      filters: {
        name: {
          $containsi: search || undefined,
        },
      },
    },
  });

  return (
    <div className="p-5">
      <Filters />
      <DataTable
        isLoading={isLoading}
        columns={paymentColumns}
        data={data?.items ?? []}
        pageCount={data?.meta.totalPages}
      />
    </div>
  );
}
