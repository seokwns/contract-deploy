import { HardhatUserConfig } from "hardhat/config";
import "hardhat-abi-exporter";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
import "@nomicfoundation/hardhat-verify";

const { ENDURANCE_DEPLOYER, TEST_1, TEST_2, TEST_3, TEST_4, TEST_5 } = process.env;

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    endurance: {
      url: "https://endurance2-rpc-partner.archivenode.club/",
      chainId: 648,
      accounts: [ENDURANCE_DEPLOYER!, TEST_1!],
    },
    kairos: {
      chainId: 1001,
      url: "https://kaia-kairos.blockpi.network/v1/rpc/public",
      gasPrice: 25000000000,
      accounts: [TEST_1!, TEST_2!, TEST_3!, TEST_4!, TEST_5!],
    },
    kaia: {
      chainId: 8217,
      url: "https://public-en.node.kaia.io",
      gasPrice: 25000000000,
      accounts: [TEST_1!, TEST_2!, TEST_3!, TEST_4!, TEST_5!],
    },
    hashkey: {
      url: "https://hashkeychain-testnet.alt.technology",
      chainId: 133,
      accounts: [ENDURANCE_DEPLOYER!],
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.4.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.5.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.2",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
    overrides: {
      "@pancakeswap/v3-core/contracts/libraries/FullMath.sol": {
        version: "0.7.6",
        settings: {},
      },
      "@pancakeswap/v3-core/contracts/libraries/TickBitmap.sol": {
        version: "0.7.6",
        settings: {},
      },
      "@pancakeswap/v3-core/contracts/libraries/TickMath.sol": {
        version: "0.7.6",
        settings: {},
      },
      "@pancakeswap/v3-periphery/contracts/libraries/PoolAddress.sol": {
        version: "0.7.6",
        settings: {},
      },
      "contracts/libraries/PoolTicksCounter.sol": {
        version: "0.7.6",
        settings: {},
      },
    },
  },
  etherscan: {
    apiKey: "Y4A5HJURG69NR77IGE8YZWZDZZMDFX3JNQ",
    customChains: [
      {
        network: "endurance",
        chainId: 648,
        urls: {
          apiURL: "https://explorer-endurance.fusionist.io/api",
          browserURL: "https://explorer-endurance.fusionist.io",
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  abiExporter: {
    path: "./abi",
    clear: true,
    flat: false,
  },
};

export default config;
