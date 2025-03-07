import { TSelectOption } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type ShadcnSelectProps = {
  value?: string;
  onChange: (e: string | undefined) => void;
  isMulti?: boolean;
  defaultValue?: TSelectOption;
  className?: string;
  classNameValue?: string;
  classNameValueSpan?: string;
  classNameContainer?: string;
  classNameItem?: string;
  options: TSelectOption[];
  isLoading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onOpenChange?: () => void;
};
function ShadcnSelect(props: ShadcnSelectProps) {
  const {
    value,
    className,
    classNameValue,
    classNameContainer,
    classNameItem,
    classNameValueSpan,
    options,
    onChange,
    isLoading,
    placeholder,
    disabled,
    onOpenChange,
  } = props;
  return (
    <Select
      value={value}
      onValueChange={onChange}
      onOpenChange={onOpenChange}
      disabled={disabled || isLoading}
    >
      <SelectTrigger
        className={`bg-white outline-none h-10 active:border-none ${className}`}
      >
        <SelectValue className={`${classNameValue}`} placeholder={placeholder}>
          <span
            className={`flex items-center justify-start gap-2 ${classNameValueSpan}`}
          >
            {options.find((i) => i.value == value)?.label}
          </span>
        </SelectValue>
      </SelectTrigger>
      {options ? (
        <SelectContent className={`${classNameContainer} bg-white`}>
          {options?.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className={`${classNameItem}`}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      ) : (
        ""
      )}
    </Select>
  );
}

export default ShadcnSelect;
