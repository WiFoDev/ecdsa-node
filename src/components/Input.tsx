import React, {FC} from "react";

type InputProps = {
  label: string;
  placeholder: string;
  type: string;
  min?: number;
  step?: number;
};

export const Input: FC<InputProps> = ({
  label,
  placeholder,
  type,
  min,
  step,
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
      />
    </label>
  );
};
