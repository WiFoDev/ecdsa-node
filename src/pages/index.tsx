import type {NextPage} from "next";

const Home: NextPage = () => {
  return (
    <section>
      <div className="px-6 py-8 bg-white text-background flex flex-col gap-4 min-w-[28rem] rounded border-2 border-parragraf">
        <h1 className="text-2xl font-bold text-background">
          Your Wallet
        </h1>
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
      </div>
    </section>
  );
};

export default Home;
