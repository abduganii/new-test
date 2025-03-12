import { parseAsInteger, useQueryState } from "nuqs";

import FilterSite from "@/components/filter-site";
import TopSite from "@/components/top-site";
import { DataTable } from "@/components/ui/data-table";

import { ProductColumns } from "./columns";
import useProduct from "./queries";

export default function Page() {
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(10));
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));

  const [search] = useQueryState("search");
  const { data, isLoading } = useProduct({
    queries: {
      limit,
      page,
      search: search || undefined,
    },
  });

  return (
    <>
      <TopSite />
      <FilterSite />
      <DataTable
      className="mx-4"
        isLoading={isLoading}
        columns={ProductColumns}
        data={data?.items ?? []}
        pageCount={data?.meta.totalPages}
      />
    </>
  );
}
