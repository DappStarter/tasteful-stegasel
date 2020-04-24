require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remind hub grace deposit fresh slogan'; 
let testAccounts = [
"0x5bf0f0c041f0a0c21cfa94a45cc50892c64e372b8700d681026b0cf904a4070a",
"0x8c78c7e3be3e8a75a81e41c7738eef002c6fcf2fe39973209606c93b7d136ba3",
"0x8a074d2ea41de99922729b2df0352b2ba1af4d081953bb0e790c4bbe8fbfbd50",
"0x2047fa69084b5f37f0e37d697c4280671e52c67f96774b7266f09c40b092315f",
"0x1d4f3968a015d874da389f42e64dbc3719e6cb3b0f3c6992f22bbd111a4210b9",
"0x661e1d5f808960941f4ee24236c3785c8229d5dfc5d8422f15105fa2aa2613d0",
"0x4140194ecfde03c7d5605eaa79738da8ea9fb55a9abbfb773c8bfdb3960f86f6",
"0xa14368a0403ed1cbfabece472651cd3dae977b23205959ae1870181273acc318",
"0xb6172193a4d9de906bf532e378321e834705da02db402d7ab87a525c4a633cb5",
"0xb908354091e7a5c1ae9237c83f1db09773b9210152e47e8f36866ccd5ad89745"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
