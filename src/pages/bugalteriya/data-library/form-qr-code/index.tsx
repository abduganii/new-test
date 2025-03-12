import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

import { useDataLibrary,useDataLibraryId } from "./actions";
import CropFormContent from "./CropContent";
import { CropFormType, CropSchema } from "./schema";

const ActionPageQrCode = () => {
  const form = useForm<CropFormType>({
    resolver: zodResolver(CropSchema),
  });
  const { id } = useParams();
  const { data } = useDataLibraryId({
    id: id != "new" ? id : undefined,
  });

  const { mutate } = useDataLibrary({
    onSuccess: () => {
      if (id == "new") {
        toast.success("savedSuccessfully");
      } else {
        toast.success("updatedSuccessfully");
      }
    },
  });

  useEffect(() => {
    if (data) {
      form.reset({
        name: data?.name || "",
        });
    }
  }, [data]);

  return (
    <FormProvider {...form}>
      <form
      className="w-full  max-w-[335px] h-full"
        onSubmit={form.handleSubmit((data) => {
          mutate({ data: data, id: id !== "new" ? id : undefined });
        })}
      >
        <CropFormContent />
      </form>
    </FormProvider>

  );
};

export default ActionPageQrCode;
