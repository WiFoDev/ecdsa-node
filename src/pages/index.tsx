import type {NextPage} from "next";

import {Card} from "@/components";

const Home: NextPage = () => {
  return (
    <section>
      <Card title="Your Wallet">
        <form className="flex flex-col gap-3">
          <label className="text-xs flex flex-col">
            <span>Wallet Address</span>
            <input
              className="border border-parragraf rounded-md p-2"
              placeholder="Type an address, for exampe: 0x1"
              type="text"
            />
          </label>
          <div className="text-sm p-2 bg-parragraf/50 rounded pointer-events-none">
            BALANCE: 0
          </div>
        </form>
      </Card>
    </section>
  );
};

export default Home;
