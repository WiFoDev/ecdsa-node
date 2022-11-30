import React, {FC} from "react";

type InputProps = {
  label: string;
  placeholder: string;
  type: string;
};

export const Input: FC<InputProps> = ({label, placeholder, type}) => {
  return (
    <label className="text-xs flex flex-col">
      <span>{label}</span>
      <input
        className="border border-parragraf rounded-md p-2"
        placeholder={placeholder}
        type={type}
      />
    </label>
  );
};
