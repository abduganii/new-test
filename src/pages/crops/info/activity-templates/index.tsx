import { parseAsInteger, useQueryState } from "nuqs";

import { DataTable } from "@/components/ui/data-table";
import { useActivityTemplate } from "./queries";
import { ActivityTemplatesColumns } from "./columns";
import { useParams } from "react-router-dom";
import { useCropById } from "../../form/actions";
import { useTranslation } from "react-i18next";

export default function ActivetyTemplate() {
  const { id } = useParams();
  const { t } = useTranslation();
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(10));
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));

  const { data, isLoading } = useActivityTemplate({
    queries: {
      pagination: { pageSize: limit, page },
      populate: "*",
      sort: {
        id: "asc",
        start_date: "asc",
        end_date: "asc",
      },
      filters: {
        crop: {
          id: id,
        },
      },
    },
  });

  const { data: cropId } = useCropById({
    id: id,
    queries: {
      populate: "*",
    },
  });

  return (
    <div className="flex gap-4">
      <div className="bg-sidebar p-4 w-1/3">
        <img
          src={import.meta.env.VITE_APP_AWS_PATH + cropId?.main_image.aws_path}
          className="w-80 aspect-video mx-auto"
        />

        <h3 className="text-primary text-xl  mt-3">{t("details")}</h3>
        <p className="text-md mb-2">
          {t("name")}: {cropId?.name}
        </p>
        <p className="text-sm mb-2">
          {t("biology_name")}: {cropId?.biology_name}
        </p>
        <p className="text-sm mb-2">
          {t("description")}: {cropId?.description}
        </p>
        <p className="text-sm mb-2">
          {t("crop_code")}: {cropId?.crop_code}
        </p>
        {cropId?.details ? (
          <p className="text-sm mb-2">
            {t("details")}: {cropId?.details}
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="w-full">
        <DataTable
          isLoading={isLoading}
          columns={ActivityTemplatesColumns}
          data={data?.data ?? []}
          pageCount={data?.meta.pagination.pageCount}
        />
      </div>
    </div>
  );
}
