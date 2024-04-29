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
