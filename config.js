export default {
  batchSize: 25,
  rpcDelayMs: 5000,

  collections: [
    {
      name: "Collection One",
      address: "0xYourContractAddressHere",
      recentBlocks: 1000000
    },
    {
      name: "Collection Two",
      address: "0xYourContractAddressHere",
      recentBlocks: 500000
    }
  ]
};
