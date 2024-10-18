const Web3 = require('web3');
const web3 = new Web3(process.env.SCROLL_RPC_URL);

// Process donation transaction on the Scroll blockchain
const processDonation = async (userId, charityId, amount) => {
  // Example function to send a transaction on the Scroll network
  const transactionHash = await web3.eth.sendTransaction({
    from: userId,
    to: charityId,
    value: web3.utils.toWei(amount.toString(), 'ether')
  });

  return transactionHash.transactionHash;  // Return the transaction hash
};

module.exports = { processDonation };
