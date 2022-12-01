import React, {FC} from "react";

type CopyToClipboardProps = {
  title: string;
  text: string;
};

export const CopyToClipboard: FC<CopyToClipboardProps> = ({
  title,
  text,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-bold">{title}</span>
      <div className="relative  bg-parragraf max-w-sm p-2">
        <p className="truncate w-11/12 text-background">{text}</p>
        <button
          className="absolute right-2 top-2"
          onClick={() => {
            navigator.clipboard.writeText(text);
          }}
        >
          <svg
            className="h-6 w-6 text-background"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 9v4m0 0h3m-3-4H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2h-3m0 0V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2h-3z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
