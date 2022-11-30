const wallets = [
  {
    address: "0x1",
    balance: 100,
  },
  {
    address: "0x2",
    balance: 50,
  },
  {
    address: "0x3",
    balance: 25,
  },
];

export const getWallet = (address: string) => {
  return wallets.find((wallet) => wallet.address === address);
};
