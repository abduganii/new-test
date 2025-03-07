import { parseAsInteger, useQueryState } from "nuqs";

import { DataTable } from "@/components/ui/data-table";

import { useParams } from "react-router-dom";
import { useReels } from "./queries";
import { ReelsColumns } from "./columns";

export default function Reels() {
  const { id } = useParams();
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(10));
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const { data, isLoading } = useReels({
    queries: {
      pagination: { pageSize: limit, page },
      populate: "*",
      sort: "createdAt:asc",
      filters: {
        crop: {
          id: { $in: { 0: id } },
        },
      },
    },
  });

  return (
    <div className=" w-full">
      <DataTable
        isLoading={isLoading}
        columns={ReelsColumns}
        data={data?.data ?? []}
        pageCount={data?.meta?.pagination.pageCount}
      />
    </div>
  );
}
