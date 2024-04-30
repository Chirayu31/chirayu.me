---
title: 'Ethereum'
subtitle: 'Understanding Ethereum in depth'
date: '2024-04-29'
published: true
image: 'https://images.unsplash.com/photo-1500099817043-86d46000d58f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
categories:
  - coding
  - latest
---

Ethereum is a decentralized, open-source blockchain platform that enables developers to build and deploy smart contracts and decentralized applications.

### The computer science "**_technical_**" definition:

**Ethereum** is a deterministic but practically unbounded state machine, consisting of a globally accessible singleton state and a virtual machine that applies changes to that state.

Let's break down the definition:

1. **Deterministic**:
   - In computer science, determinism means that given the same inputs, the system will always produce the same outputs. In the context of Ethereum, this means that if you provide the same transactions and data to the network, the resulting state of the Ethereum blockchain will be the same every time. There's no randomness involved in the execution of transactions and smart contracts.
2. **Practically Unbounded State Machine**:
   - Ethereum is often referred to as a "state machine" because it maintains a state that changes over time based on the execution of transactions and smart contracts. The term "practically unbounded" means that Ethereum can handle a vast amount of data and execute a large number of transactions and smart contracts, theoretically without an upper limit. This scalability is essential for Ethereum to support a wide range of applications and users.
3. **Globally Accessible Singleton State**:
   - The "globally accessible singleton state" refers to the state of the Ethereum blockchain, which is accessible to all participants in the network. This state includes information such as account balances, smart contract code, and storage contents. "Singleton" means that there is only one instance of this state, and it is shared among all nodes in the Ethereum network.
4. **Virtual Machine**:
   - Ethereum has a virtual machine called the Ethereum Virtual Machine (EVM). A virtual machine is a software emulation of a physical computer that can execute programs and run applications. In the case of Ethereum, the EVM is responsible for executing smart contracts and processing transactions. It operates on the globally accessible state of the Ethereum blockchain and applies changes to that state based on the instructions contained within transactions and smart contracts.
5. **Applies Changes to That State**:
   - The virtual machine (EVM) applies changes to the globally accessible state of Ethereum based on the transactions and smart contracts it processes. When transactions are executed or smart contracts are invoked, they can modify the state of the Ethereum blockchain by updating account balances, changing smart contract storage, or performing other actions specified in the code.

## Ethereum Storage

two types of trees are popularly used by the Bitcoin and Ethereum blockchains: Merkle trees and Patricia Merkle tries. Patricia Merkle tries are used predominantly in Ethereum in order to keep track of various states by simply committing a tree root hash and keeping all of the raw data readily available off-chain (in a full node, for example).

## Ethereum == A Computer

Think of Ethereum as a computer you might have at home, just like your laptop or smartphone. But here's the twist: this Ethereum computer isn't as speedy as the devices we're used to. In fact, when it comes to running programs, it's much slower—like 5 to 100 times slower than what you might expect from regular computers.

And there's another catch: using this Ethereum computer can be pretty pricey! Imagine something as simple as adding 5 and 5 together on your phone—it's quick, right? But on Ethereum, that same calculation could cost you a few dollars. Essentially, performing even basic tasks on the Ethereum computer—like computing stuff, storing data, or remembering things—can be as expensive as if you were using a computer from the 1950s.

## Then why to use ethereum

The Ethereum platform empowers developers to create robust decentralized applications with integrated economic features, all while ensuring high availability, transparency, and neutrality.

Ethereum isn't primarily focused on being fast or inexpensive; its core objective is trustworthiness. Any application running on the Ethereum network operates consistently across all nodes, ensuring uniformity and reliability. Moreover, data stored on Ethereum is accessible globally and remains permanently recorded. That's the essence of a remarkable computing system!

## EVM, Gas and Fork

The Ethereum Virtual Machine (EVM) acts like a simulator for running code in a specific environment. It's similar to using software that lets you run macOS on a Windows computer, or the Java Virtual Machine (JVM) that allows you to run Java code across different systems without worrying about hardware details.

Initially, Ethereum considered using the JVM, but it needed a setup suitable for a decentralized blockchain. For example, it had to prevent situations where code runs indefinitely. So, they introduced "gas," which is a cost tied to each operation. Gas measures how much computation an operation demands, and you pay for it to ensure fairness and prevent abuse.

Gas costs vary for different operations, categorized into areas like arithmetic, transaction context, memory usage, and control flow. Operations that affect the blockchain's persistent data, like storing values, have higher costs compared to simple calculations.

Determining these costs involves benchmarking and adjusting to match the strain on the network. Ethereum has encountered attacks exploiting these costs, prompting adjustments to the VM via upgrades. These upgrades, suggested through Ethereum Improvement Proposals (EIPs), require nodes to update their client software. Sometimes, these updates are planned improvements, while others are responses to attacks.

When updates occur, it's called a fork. Nodes can choose whether to adopt the changes, leading to different versions of the blockchain. In most cases, everyone updates, but in contentious situations, the network may split into separate chains, as seen in the Ethereum and Ethereum Classic split after the DAO Fork.

## Proof of stake

On September 15th, 2022, Ethereum underwent a significant change known as "The Merge," transitioning from Proof of Work (PoW) to Proof of Stake (PoS). This transition was a major milestone that had always been planned for Ethereum, but it required cooperation from the entire network to implement.

Proof of Work, previously used by Bitcoin and Ethereum, involves significant energy consumption and favors large mining operations. Proof of Stake, on the other hand, offers increased security, reduced energy consumption, and improved scalability for Ethereum.

In Proof of Stake, individuals can become validators with much lower energy requirements compared to PoW mining. Validators stake 32ETH by depositing it into a contract, serving as collateral against any dishonest behavior. Validators are randomly selected to propose blocks every 12 seconds, with others verifying the proposed blocks.

This shift significantly reduces the energy required to mine blocks compared to PoW. Additionally, PoS introduces new levels of block finality for Ethereum developers to consider: "safe" and "finalized" blocks. These blocks have high confidence levels in terms of security and are unlikely to be changed.

Developers can use different block tags, such as "earliest," "finalized," "safe," "latest," and "pending," to request data from the network, depending on their requirements and the level of finality needed for their applications.

This transition to PoS marks a significant milestone for Ethereum, offering increased security and efficiency while presenting new considerations for developers working on the platform.

## Gas fee

Gas prices on the Ethereum network have long been a topic of discussion, often characterized by their unpredictability and occasional spikes to exorbitant levels. However, with the introduction of Ethereum Improvement Proposal 1559 (EIP-1559) in August 2021, significant changes were made to the way gas prices are determined and managed.

EIP-1559 aimed to address the issues surrounding gas prices by introducing a new mechanism for setting them, known as the "base fee" system. This system operates within the broader framework of Ethereum's gas market, where users pay fees to have their transactions processed by miners.

One of the key components of EIP-1559 is the adjustment of gas prices based on the demand for block space. Each block on the Ethereum blockchain has a maximum capacity for gas usage, with a target of 15 million gas per block. The base fee is dynamically adjusted based on how filled the previous block was relative to this target. If a block is above the target, the base fee increases, and if it's below the target, the base fee decreases.

Importantly, under EIP-1559, the base fee is burned rather than being collected by miners. This has several implications: it prevents miners from circumventing payment, creates deflationary pressure on Ether as an asset, and alters the incentives for miners.

In addition to the base fee, users also set a "max fee" when sending transactions. The max fee represents the maximum amount a user is willing to pay for their transaction to be included in a block. However, only the base fee is used for execution, with any excess returned to the sender.

For miners, the primary incentive for including transactions in blocks is now the "miner tip." This tip represents the additional payment a miner receives for processing a transaction beyond the base fee. Despite the burning of the base fee, miners are still incentivized to include transactions in blocks due to the potential for earning tips.

## **Accounts in Ethereum**

In Ethereum, there are two main types of accounts: Externally Owned Accounts (EOAs) and Contract Accounts.

**Externally Owned Accounts (EOAs)**

These are like your personal wallets in Ethereum. Just like in Bitcoin, you have a private key and a public address. But in Ethereum, the address is a long string of numbers and letters. This address is where you keep your Ether, Ethereum's currency.

What's cool about EOAs is that they have a balance, just like your bank account. Ethereum keeps track of how much Ether each address has. Also, each EOA has something called a "nonce," which is like a transaction counter. It helps prevent someone from sending the same transaction multiple times.

**Contract Accounts**

Now, this is where Ethereum gets really interesting! Contract accounts are like little computer programs running on the Ethereum network. These programs are called "Smart Contracts."

Smart Contracts are written in special languages like Solidity or Vyper. Once you write a Smart Contract, you deploy it to the Ethereum network. It gets its own address and balance just like an EOA, but you can't control it with a private key like your wallet.

Instead, EOAs interact with Smart Contracts by sending them transactions. These transactions can trigger actions or functions inside the Smart Contract. And here's the cool part: Smart Contracts can also talk to each other!

Once a Smart Contract is deployed, its code can't be changed. But you can still update the data it stores through transactions.

## JSON RPCs

Ethereum, the global decentralized computer, operates across thousands of nodes worldwide. But how do we interact with this distributed system? The answer lies in JSON-RPC, a vital communication protocol bridging the gap between Ethereum applications (dApps) and the Ethereum network.

**What We're Building**

Imagine JSON-RPC as the connection between any dApp and an Ethereum node. Whether you're using or building a dApp, JSON-RPC acts as the conduit to access Ethereum's vast capabilities.

**Understanding Ethereum Clients**

To engage with Ethereum, you need to run an Ethereum client. These clients, like Geth or Nethermind, serve as gateways to the Ethereum network. Each client implements JSON-RPC, offering methods like **`eth_getBalance`** or **`eth_blockNumber`** to query Ethereum's data.

**Exploring JSON-RPC**

JSON-RPC, a remote procedure call protocol, simplifies communication with Ethereum nodes. It operates similarly to REST APIs but exclusively uses JSON for data transmission. Essentially, JSON-RPC allows us to request data from an Ethereum node and receive a response in JSON format.

**API Standards: REST vs. JSON-RPC**

Comparing REST and JSON-RPC, both facilitate client-server communication but with different syntaxes. While REST is widespread for CRUD operations, JSON-RPC streamlines remote method calls to Ethereum nodes, enabling seamless interaction with the blockchain.

**Understanding JSON-RPC Request and Response**

A JSON-RPC request comprises the JSON-RPC version, method to execute, and optional parameters. Conversely, a JSON-RPC response includes the JSON-RPC version, the method result, and the request ID. These structures facilitate smooth data exchange between clients and servers.

## **Introduction to Ethereum Transactions**

In Ethereum, transactions are like commands that make things happen. They're the tools people use to change stuff on the Ethereum network.

**What Are Transactions?**

Think of transactions as actions you take on Ethereum. For example, when you send Ether (the cryptocurrency of Ethereum) from your wallet to someone else's, that's a transaction. It's like giving money to someone, but it happens digitally on the Ethereum network.

**How Do Transactions Work?**

Transactions are grouped together into blocks, kind of like putting a bunch of actions into one big package. These blocks are then added to the Ethereum blockchain, which is like a giant ledger that keeps track of all transactions and changes on the network.

**Different Types of Transactions**

There are two main types of transactions in Ethereum:

1. **Creating Contracts:** Sometimes, people want to create smart contracts, which are like self-executing contracts with specific rules. To do this, they send a special type of transaction that tells Ethereum to create a new smart contract.
2. **Regular Transactions:** These are transactions where you send Ether to someone else or interact with existing smart contracts. It's like sending money or doing something specific, like playing a game or buying a digital collectible.

**How Transactions Are Made**

When you want to make a transaction, you need to tell the Ethereum network what you want to do and sign it with your private key to prove it's really you. This signed message is then sent to the network, where it's verified and added to the blockchain.
