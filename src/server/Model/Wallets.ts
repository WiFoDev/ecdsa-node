export default class Wallet {
  constructor(public address: string, public balance: number) {}

  static create(address: string, balance: number) {
    return new Wallet(address, balance);
  }

  toPrimitives() {
    return {
      address: this.address,
      balance: this.balance,
    };
  }
}
