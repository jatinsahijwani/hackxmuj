module.exports = {
  compilers: {
    solc: {
      version: "0.8.0",   // Use a specific version of Solidity (e.g. 0.8.0)
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",   // Localhost (default: none)
      port: 7545,          // Standard Ethereum port (default: none)
      network_id: "*",     // Any network (default: none)
    },
  },
  // Other configurations
};
  