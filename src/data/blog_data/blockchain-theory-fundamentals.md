---
title: 'Blockchain Fundamentals'
subtitle: 'Blockchain theory 101'
date: '2024-04-24'
published: true
image: 'https://images.unsplash.com/photo-1610296669228-602fa827fc1f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
categories:
  - coding
  - latest
  - web3
---

Blockchain is a digital ledger that records transactions. But what is ledger, well think of it as a record keeping book. So blockchain is a book which contains records of transactions. Blockchain is decentralized and distributed.

So in better words, A blockchain is a decentralized, distributed ledger technology that records transactions across a network of computers. Each transaction is grouped into a “block” and linked together in a chronological “chain”.

Let’s understand how blockchain works first:

- Blockchain is decentralized, i.e. there is no central authority. Instead information is stored on many computers known as nodes all around the world.
- Transactions are the building blocks of blockchain. When you make a transaction, like spending some digital currency, a block is created. When a block is created it receives a hash that includes timestamp, info about prev block and transaction data.
- Before the block is added to the blockchain, it needs to be verified by the network. Once the block is verified by most of the nodes it is added to the blockchain.
- Each block in the blockchain contains the hash of the previous block. This creates a chain of blocks, hence the name "blockchain".
- Once a block is added to the blockchain, it's extremely difficult to change or remove it. This is because changing any block would require changing all subsequent blocks and getting the consensus of the majority of the network, which is practically impossible in a decentralized system.

### Double spending problem

Consider you have digital coinand you buy something from a shop showing that you have that amount of money but before the transaction is processed and added to the ledger, you try to spend it on something else on another shop as well, so you spent same currency twice. If both transactions go through before anyone realizes what's happening, you've essentially managed to buy two items from same coin, this is known as double spending problem.

So, in simple terms, the double spending problem is the risk that digital currency could be spent more than once before transactions are properly recorded and verified.

**how does blockchain solves it:**

Blockchain solves it using **Consensus Algorithm.** Before a transaction is added to the blockchain, it needs to be validated by the majority of nodes in the network.

Different blockchain networks use various consensus mechanisms, such as Proof of Work (PoW) or Proof of Stake (PoS), to ensure agreement on the validity of transactions. This prevents double spending by requiring consensus among participants before a transaction is confirmed.

### Byzantine General’s Problem

This illustrates the challenge of achieving consensus among group of participants who may not all agree or trust each other.

The problem is named after the "Byzantine Generals" because it's often explained using a scenario where a group of generals, commanding different divisions of an army, need to coordinate their attack or retreat. However, some of these generals may be traitors who send conflicting messages.

In the context of distributed systems, such as blockchain networks, the Byzantine Generals' Problem arises when nodes in the network need to agree on a single value or decision, despite the possibility of some nodes being faulty or malicious. These faulty nodes may send conflicting information or fail to relay messages accurately.

The challenge is to design algorithms and protocols that allow the honest nodes to reach a consensus decision, even in the presence of faulty or malicious nodes.

Various consensus mechanisms, such as Proof of Work (PoW), Proof of Stake (PoS), and Practical Byzantine Fault Tolerance (PBFT), have been developed to address the Byzantine Generals' Problem in different ways.

### Cryptographic Wallets

Cryptographic wallets, often referred to simply as crypto wallets, are digital tools used to store, send, and receive cryptocurrencies like Bitcoin, Ethereum, or other digital assets. They use cryptographic techniques to secure your private keys and enable you to interact with blockchain networks.

Every cryptocurrency wallet contains a pair of cryptographic keys: a public key and a private key. The public key is like your wallet address, which you can share with others to receive payments. The private key is like your password, and it's used to access and control your funds. It's crucial to keep your private key secure, as anyone with access to it can control your funds.

There are different types of crypto wallets, including:

1. **Hardware Wallets**: These are physical devices, like USB drives, designed specifically for storing cryptocurrency keys offline, making them very secure.
2. **Software Wallets**: These are applications or software programs that you can download and install on your computer or smartphone. They can be further categorized into:
   1. **Desktop Wallets**: Installed on your computer.
   2. **Mobile Wallets**: Installed on your smartphone.
   3. **Online Wallets**: Hosted on the internet and accessible through a web browser. They're convenient but less secure than hardware wallets.
3. **Paper Wallets**: A form of cold storage where your keys are printed on a piece of paper. It's offline and considered very secure if generated and stored properly.

### Blocks are not created immediately

In most blockchain networks, including Bitcoin and Ethereum, blocks are not created immediately after each transaction. Instead, blocks are created periodically at set intervals, and each block can contain multiple transactions that have been verified within that time period.

Here's how it typically works:

1. **Transaction Pool**: When you initiate a transaction in a blockchain network, it enters a pool of unconfirmed transactions known as the "mempool." These transactions are waiting to be included in the next block.

2. **Block Creation**: Miners, who are participants in the network responsible for creating new blocks, gather transactions from the mempool and verify their validity. They then compete to solve a complex mathematical puzzle known as the "proof-of-work" or another consensus mechanism depending on the blockchain network.

3. **Block Propagation**: Once a miner successfully solves the puzzle, they broadcast the new block to the network. Other nodes in the network validate the block and its transactions.

4. **Block Confirmation**: After the block is validated by a majority of nodes, it is added to the blockchain, and the transactions it contains are considered confirmed. This process typically takes a few minutes.

5. **Block Interval**: In networks like Bitcoin, new blocks are created approximately every 10 minutes, regardless of the number of transactions. This means that transactions accumulate in the mempool until a new block is created.

### How Bitcoin Mining Works:

1. **Transaction Verification**: When someone makes a Bitcoin transaction, it needs to be verified by the network. Miners collect these transactions into blocks.

2. **Creating a Block**: Miners bundle these transactions into a block and compete to solve a complex mathematical puzzle associated with that block. This puzzle is known as the "proof-of-work" problem.

3. **Proof-of-Work**: The proof-of-work puzzle requires miners to find a specific value called a "nonce" that, when combined with the block's data, produces a hash (a unique string of characters) that meets certain criteria, such as having a specific number of leading zeros.

4. **Nonce**: The nonce is a random number added to the block's data that miners change over and over again until they find a hash that meets the difficulty target set by the network. It's like a lottery where miners keep guessing numbers until they find the winning ticket.

5. **Finding the Solution**: Miners use their computational power to guess different nonce values, which results in generating countless hashes. The goal is to find a hash that meets the difficulty requirement. This process is computationally intensive and requires a lot of energy.

6. **Adding the Block to the Blockchain**: Once a miner finds a valid hash, they broadcast the new block to the network. Other nodes in the network verify the validity of the block and its transactions. If valid, the block is added to the blockchain, and the miner is rewarded with newly minted bitcoins (known as the block reward) and transaction fees.

7. **Block Reward Halving**: Approximately every four years, the block reward is halved. This is programmed into the Bitcoin protocol and is designed to limit the total supply of bitcoins to 21 million, making it a deflationary currency.
