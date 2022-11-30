import type {NextPage} from "next";

import {Card, WalletForm} from "@/components";
import {TransactionForm} from "@/components/TransactionForm";

const Home: NextPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <Card title="Your Wallet">
        <WalletForm />
      </Card>
      <Card title="Send Transaction">
        <TransactionForm />
      </Card>
    </section>
  );
};

export default Home;
