const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*",
        },
        dashboard: {},
        inf_Flashloan_goerli: {
            network_id: 5,
            gasPrice: 100000000000,
            provider: new HDWalletProvider(
                fs.readFileSync("/Users/vasilis/Desktop/Untitled.env", "utf-8"),
                "https://goerli.infura.io/v3/96346f647a814969b475e42c0df6c955"
            ),
        },
    },
    compilers: {
        solc: {
            version: "0.8.13",
        },
    },
    db: {
        enabled: false,
        host: "127.0.0.1",
    },
};
