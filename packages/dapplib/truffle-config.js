require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grace sell tackle spot crazy razor meadow arrow grid knife army gentle'; 
let testAccounts = [
"0xf1cbb2474026f5922104ded14f90688fe02a8af6c9cc8f78bb6ab4b15859a376",
"0x833ea86c254809782db5333105d935de4e523f98c5ab48d3479eaaf434436b19",
"0xa0ddede368daa68b94c47bf717f723e945e2f09ffcacea9e504a5a2b3fe0762b",
"0xd5c087b7ba3272a1d437c9c2160f1090ab2a20e94119611384de8b2ed921f81a",
"0xd9ae2ae8bcb0a0307c770732689242809714bdb1c55767cef27bf85d4e95e3d5",
"0xaf2e06e561355025faa34df07d092f04c51594e0c0926098b5d402c7c598a8b9",
"0x74fb5e48db568725d080c3c16b83851b63269bd14599a7516359c3b03d4af34d",
"0xc89a6a58494ba5ab5b6f6b0d4771bd83a6a7a0fa590bc1aa3d8baf63f3649ab8",
"0x6e10a8b2dbccb5a1cdd0a477a47373e850200435fac239755e6461d6549be26d",
"0x2b357b464451467c4802a6a07271766ed529e452e60262aabe0b581b2f41cb82"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


