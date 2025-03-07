import { ColumnDef } from "@tanstack/react-table";
import { ReelsData } from "./type";
import TableImage from "@/components/table-image";
import TablePopaver from "@/components/table-popaver";

export const ReelsColumns: ColumnDef<ReelsData>[] = [
  {
    accessorKey: "id",
    header: "#ID",
    size: 50,
  },
  {
    id: "main_image",
    header: "image",
    cell: ({ row }) => {
      return (
        <>
          <TableImage url={row.original?.media?.aws_path || null} />
        </>
      );
    },
    size: 100,
  },
  {
    id: "title",
    header: "title",
    accessorKey: "title",
  },
  {
    id: "description",
    header: "description",
    size: 50,
    cell: ({ row }) => {
      return (
        <TablePopaver text={"description"} disc={row.original.description} />
      );
    },
  },
];
