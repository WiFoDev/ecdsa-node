const {
  utils,
  getPublicKey,
} = require("ethereum-cryptography/secp256k1");
const {toHex} = require("ethereum-cryptography/utils");
const {keccak256} = require("ethereum-cryptography/keccak");

const privateKey = utils.randomPrivateKey();

console.log("Private Key:", toHex(privateKey));

const publicKey = getPublicKey(privateKey);

console.log("Public Key:", toHex(publicKey));

const address = keccak256(publicKey.slice(1)).slice(-20);

console.log("Address:", toHex(address));
