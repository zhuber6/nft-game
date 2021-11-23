const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Mac", "Dennis", "Charlie", "Frank", "Dee"],       // Names
    ["https://www.tvguide.com/a/img/resize/6405d21e299b965a0aca418627793dd90f01ac58/hub/2018/03/16/665ec73c-de9e-4b24-aa39-df9f81018efc/180315-itsalwayssunny-hp-sm.jpg?auto=webp&fit=crop&height=1080&width=1920", // Images
    "https://assets.mycast.io/actor_images/actor-glenn-howerton-203075_large.jpg?1618966961", 
    "http://3.bp.blogspot.com/-f9DVIk4kW9A/Uv6ypIQMKNI/AAAAAAAAEP8/xm-xG71sVSE/s1600/Charlie's_commercial_(widescreen_version).jpg",
    "https://static.wikia.nocookie.net/itsalwayssunny/images/7/72/Frank_Reynolds.jpg/",
    "https://64.media.tumblr.com/353606c4f46969242ae9f1275cb6929a/tumblr_mzooe4zbDA1qzyu6ho4_400.png"
    ],
    [300, 300, 1000, 200, 100],   // HP values
    [100, 25, 25, 5, 1],          // Attack damage values
    "Cricket",                    // Boss name
    // "https://external-preview.redd.it/FOP8p0HgNy8XCqfv4FkdwF5PCifZLVwRvjuf846vx8M.jpg?auto=webp&s=28180629a2fb54edeb014ae53a5f8cf660cc3e8f",  // Boss image
    "https://i.imgur.com/4LDa9Dn.png",  // Boss image
    10000,                        // Boss hp
    50                            // Boss attack damage
  );

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
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