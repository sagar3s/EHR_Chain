module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // or the port number specified by your Ganache instance
      network_id: "*" // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "0.8.9", // Specify the Solidity compiler version here
    }
  }
};