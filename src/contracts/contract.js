import { ethers } from "ethers";

export const MoodContractAddress = "0xcEBdc2c4Bdb458Ed84b79E1e9DAFCE3a13bCc3f3";
export const MoodContractABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_mood",
        type: "string",
      },
    ],
    name: "setMood",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMood",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
export let MoodContract, signer;

export const provider = new ethers.providers.Web3Provider(
  window.ethereum,
  "goerli"
);

/*
    1. For metamask request the account permission
    2. List accounts will return array of account
    3. Set signer as the first metamask account
    4. Inside the MoodContract, pass the contract address, contract interface and the signer
*/
provider.send("eth_requestAccounts", []).then(() => {
  provider.listAccounts().then((accounts) => {
    signer = provider.getSigner(accounts[0]);
    MoodContract = new ethers.Contract(
      MoodContractAddress,
      MoodContractABI,
      signer
    );
  });
});

export async function getMood() {
  const getPromise = MoodContract.getMood();
  const Mood = await getPromise;

  const dispalyMood = document.getElementById("dispalyMood");
  dispalyMood.textContent = Mood;

  setTimeout(() => {
    dispalyMood.style.display = "none";
  }, 5000);
}

export async function setMood() {
  const mood = document.getElementById("mood").value;
  const setMoodPromise = MoodContract.setMood(mood);
  await setMoodPromise;
}
