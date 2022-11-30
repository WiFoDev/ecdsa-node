import React, {FC} from "react";

type CardProps = {
  children: React.ReactNode;
  title: string;
};

export const Card: FC<CardProps> = ({children, title}) => {
  return (
    <div className="px-6 py-8 bg-white text-background flex flex-col gap-4 min-w-[28rem] rounded border-2 border-parragraf">
      <h2 className="text-2xl font-bold text-background">{title}</h2>
      {children}
    </div>
  );
};
