import { ColumnDef } from "@tanstack/react-table";
import { FertilizationsData } from "./type";
import TableImage from "@/components/table-image";

export const FertilizersColumns: ColumnDef<FertilizationsData>[] = [
  {
    accessorKey: "id",
    header: "#ID",
    size: 50,
  },
  {
    accessorKey: "fertilizer",
    header: "fertilizer",
    cell: ({ row }) => {
      return <p>{row.original?.fertilizer?.name}</p>;
    },
  },
  {
    id: "dose",
    header: "dose",
    accessorKey: "dose",
  },
  {
    id: "dose_max",
    header: "dose_max",
    accessorKey: "dose_max",
  },
  {
    id: "dose_min",
    header: "dose_min",
    accessorKey: "dose_min",
  },
  {
    id: "useCount",
    header: "useCount",
    accessorKey: "use_count",
  },
];
