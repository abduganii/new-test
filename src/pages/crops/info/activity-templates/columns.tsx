import { ColumnDef } from "@tanstack/react-table";
import TableAction from "@/components/table-action";
import { apiRoutes } from "@/service/apiRoutes";
import { ActivityTemplatesData } from "./type";
import TablePopaver from "@/components/table-popaver";

export const ActivityTemplatesColumns: ColumnDef<ActivityTemplatesData>[] = [
  {
    accessorKey: "id",
    header: "#ID",
    size: 50,
  },
  {
    accessorKey: "activity_type.name",
    header: "name",
    cell: ({ row }) => {
      return <p>{row.original?.activity_type?.name}</p>;
    },
  },
  {
    accessorKey: "start_date",
    header: "startDate",
  },
  {
    accessorKey: "end_date",
    header: "endDate",
  },
  {
    accessorKey: "cycle",
    header: "cycle",
  },
  {
    id: "comment",
    header: "comment",
    size: 50,
    cell: ({ row }) => {
      return <TablePopaver text={"comment"} disc={row.original.comment} />;
    },
  },
  {
    id: "actions",
    enableHiding: true,
    header: () => <div className="text-right">{"actions"}</div>,
    size: 50,
    cell: ({ row }) => {
      return <TableAction url={apiRoutes.crops} id={row.original?.id} />;
    },
  },
];
