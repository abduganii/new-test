import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input, InputProps } from "../ui/input";

interface Props extends InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  classNameInput?: string;
}

export default function FormTextInput({
  name,
  type,
  label,
  placeholder,
  className,
  classNameInput,
  ...props
}: Props) {
  const { control } = useFormContext();
  const { t } = useTranslation();
  // bg-[#EDECE3] text-[15px] leading-[18px] font-medium px-[13px] py-[20px] border-none outline-none rounded-none mb-[54px] w-full max-w-[296px]

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("flex flex-col items-start w-full", className)}>
          {label && (
            <FormLabel className="font-medium text-[#99998C] dark:text-white">
              {t(label)}
            </FormLabel>
          )}
          <FormControl className="w-full">
            <Input
              type={type ?? "text"}
              className={cn("flex flex-col items-start w-full", classNameInput)}
              placeholder={placeholder ? t(placeholder) : ""}
              {...field}
              onChange={(e) => {
                if (type === "number") {
                  if (isNaN(e.target.valueAsNumber)) {
                    field.onChange(null);
                  } else {
                    field.onChange(e.target.valueAsNumber);
                  }
                } else {
                  field.onChange(e.target.value);
                }
              }}
              {...props}
            />
          </FormControl>
          <FormMessage className="text-sm text-red-500" />
        </FormItem>
      )}
    />
  );
}
