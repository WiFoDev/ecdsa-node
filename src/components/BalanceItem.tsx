import React, {FC} from "react";

type BalanceItemProps = {
  address: string;
  balance: string;
};

export const BalanceItem: FC<BalanceItemProps> = ({
  address,
  balance,
}) => {
  return (
    <li>
      <div className="flex justify-between gap-6">
        <span>{address}</span>
        <span>{balance} ALC</span>
      </div>
    </li>
  );
};
