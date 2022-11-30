import React, {FC} from "react";

type InputProps = {
  label: string;
  placeholder: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  step?: number;
};

export const Input: FC<InputProps> = ({
  label,
  placeholder,
  type,
  min,
  step,
  value,
  onChange,
}) => {
  return (
    <label className="text-xs flex flex-col">
      <span>{label}</span>
      <input
        className="border border-parragraf rounded-md p-2"
        min={min}
        placeholder={placeholder}
        step={step}
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
