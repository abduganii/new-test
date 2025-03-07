import { FormField, FormItem, FormMessage } from "../ui/form";
import { UploadFile } from "@/service/apiHelpers";
import { CloudUpload, Eye, LoaderCircle, Trash2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { useTranslation } from "react-i18next";

interface iProps {
  label: string;
  className?: string;
  acceptTypes: string;
  text: string;
  folder: string;
  name: string;
}

const maxFileSize = 5000000;

export default function FormFileUpload({
  label,
  acceptTypes,
  className,
  name,
  folder,
}: iProps) {
  const [loadingFile, setLoadingFile] = useState<boolean>(false);
  const { t } = useTranslation();
  const { control } = useFormContext();

  const hendleimg = async (
    e: any,
    field: ControllerRenderProps<FieldValues, string>
  ) => {
    setLoadingFile(true);
    if (e.target.files[0] && e.target.files[0]?.size < maxFileSize) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      await UploadFile(formData, folder)
        .then((data) => {
          field.onChange({ id: data.media.id, aws_path: data.media.aws_path });
        })
        .finally(() => setLoadingFile(false));
    } else {
      setLoadingFile(false);
    }
  };
  const hendleRemove = (field: ControllerRenderProps<FieldValues, string>) => {
    field.onChange(undefined);
  };
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("cursor-pointer", className)}>
          <p className="text-[#252C32] text-[13px] leading-[18px] font-normal">
            {t(label)}
          </p>
          {field?.value?.aws_path ? (
            <div className="aspect-video w-full group relative overflow-hidden">
              <img
                src={import.meta.env.VITE_APP_AWS_PATH + field?.value?.aws_path}
                alt="image"
                className="aspect-video w-full"
              />
              <div className="absolute -bottom-[300px] gap-2 group-hover:bottom-0 left-0 w-full flex items-center justify-center h-full z-10 bg-black/80">
                <span onClick={() => hendleRemove(field)}>
                  <Trash2 color="white" />
                </span>
                <Eye color="white" />
              </div>
            </div>
          ) : (
            <label
              className={`flex items-center justify-center aspect-video text-center p-auto w-full cursor-pointer p-[21px] bg-[#F5F5F5] rounded-lg mt-1.5`}
            >
              <div>
                {loadingFile ? (
                  <LoaderCircle />
                ) : (
                  <CloudUpload size={"80"} className="text-2.5 m-auto" />
                )}
                <input
                  className="hidden"
                  type="file"
                  accept={acceptTypes}
                  onChange={(e) => {
                    hendleimg(e, field);
                  }}
                />
                <p>{t("selectFile")}</p>
              </div>
            </label>
          )}
          <FormMessage className="text-sm text-red-500" />
        </FormItem>
      )}
    />
  );
}
