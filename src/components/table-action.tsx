import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MoreHorizontal, Trash2 } from "lucide-react";
import { useQueryState } from "nuqs";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { DeleteData } from "@/service/apiHelpers";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function TableAction({
  url,
  ShowPreview,
  ShowUpdate = true,
  ShowDelete = true,
  id,
}: {
  url: string;
  ShowPreview?: boolean;
  ShowUpdate?: boolean;
  ShowDelete?: boolean;
  id: string;
}) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [, setId] = useQueryState("id");
  const [open, setOpen] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async () => {
      return await DeleteData(url, id);
    },
    onSuccess: () => {
      toast.success(t("deleteToast"));
      queryClient.invalidateQueries({ queryKey: [url] });
      setOpen(false);
    },
  });

  return (
    <div className="text-end">
      <DropdownMenu>
        <DropdownMenuTrigger className="text-end" asChild>
          <Button variant="ghost" className="h-8 text-end w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          {ShowUpdate ? (
            <DropdownMenuItem onClick={() => setId(id)}>
              {t("update")}
            </DropdownMenuItem>
          ) : (
            ""
          )}
          {ShowPreview ? (
            <DropdownMenuItem onClick={() => navigate(`${url}/${id}/info`)}>
              {t("singlePage")}
            </DropdownMenuItem>
          ) : (
            ""
          )}
          {ShowDelete ? (
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger onClick={() => setOpen(true)} className="w-full">
                <p
                  className={
                    "px-[6px] text-start rounded-md hover:bg-muted py-[4px]"
                  }
                >
                  {" "}
                  {t("delete")}
                </p>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-center">
                    {t("deleteConfir")}
                  </DialogTitle>
                </DialogHeader>
                <div className="text-center">
                  <Trash2 size={70} className="m-auto" color="red" />
                </div>
                <DialogFooter className="sm:justify-start  flex gap-2">
                  <DialogClose className="w-full " asChild>
                    <Button type="button" variant="secondary">
                      {t("close")}
                    </Button>
                  </DialogClose>
                  <Button
                    variant={"destructive"}
                    onClick={() => mutate()}
                    className="w-full"
                  >
                    {t("yes")}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ) : (
            ""
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
