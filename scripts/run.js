const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Mac", "Dennis", "Charlie", "Frank", "Dee"],       // Names
    [
    "QmWiYWiKXsBQzULeEkP5oe6NZQbC4QxF37Wt3PaTLFbwHs", // Mac
    "QmaQELFcUN2dz1HVFh1t83UbXNL466KXjDogGDydFjAyqP", // Dennis
    "QmQLtrXmnSVLTkx5sTvGAyQ4WHqn8VsFw9r9bDzX4kvFgc", // Charlie
    "Qmf9ms1JVDtCo3D3bSSF16QopG5G9m4Wox3qXEvHbeuD4J", // Frank
    "QmQ2nWeLy9oc1HRRKXpU5BpuqZhzfUtWGaD5J24u8usoLj", // Dee
    ],
    [300, 300, 1000, 200, 100],   // HP values
    [100, 25, 25, 5, 1],          // Attack damage values
    "Cricket",                    // Boss name
    "Qma5B4rRnbqYE7CCXNgnGEbHU8wXz4Bqpv3vCAhmnuQVvi",  // Boss image
    10000,                        // Boss hp
    50                            // Boss attack damage
  );

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
  
  let txn;
  // mint index 2 character
  txn = await gameContract.mintCharacterNFT(3);
  await txn.wait();
  
  txn = await gameContract.attackBoss();
  await txn.wait();

  console.log("Done attacking");

  let charURI = await gameContract.tokenURI(1);
  console.log("charURI", charURI);

  let currUser = await gameContract.checkIfUserHasNFT();
  console.log("currUser name:", currUser.name, "HP:", currUser.hp.toString());

  let BigBoss = await gameContract.getBigBoss();
  console.log("BigBoss HP:", BigBoss.hp.toString());
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();