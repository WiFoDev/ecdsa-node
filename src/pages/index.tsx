import type {NextPage} from "next";

import {Card, WalletForm} from "@/components";

const Home: NextPage = () => {
  return (
    <section>
      <Card title="Your Wallet">
        <WalletForm />
      </Card>
    </section>
  );
};

export default Home;
