import { ColumnDef } from "@tanstack/react-table";
import TableImage from "@/components/table-image";
import { DiseasesData } from "./type";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

export const DiseasesColumns: ColumnDef<DiseasesData>[] = [
  {
    accessorKey: "id",
    header: "#ID",
    size: 50,
  },
  {
    id: "image",
    header: "image",
    cell: ({ row }: any) => {
      return (
        <>
          <TableImage url={row.original?.image?.aws_path || null} />
        </>
      );
    },
    size: 100,
  },
  {
    accessorKey: "name",
    header: "name",
  },
  {
    accessorKey: "crop",
    header: "crop",
    cell: ({ row }) => {
      return <p>{row.original?.crop?.name}</p>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "createdAt",
    cell: ({ row }: any) => {
      return (
        <>
          <p>{format(row.original?.createdAt, "MM-dd-yyyy")}</p>
        </>
      );
    },
  },

  {
    accessorKey: "type",
    header: "type",
    cell: ({ row }: any) => {
      const { t } = useTranslation();
      return (
        <>
          <Badge variant="default" className="px-2 py-1">
            {t(row.original?.type)}
          </Badge>
        </>
      );
    },
  },
];
