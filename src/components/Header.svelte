<script lang="ts">
  import FilterNfTsByType from "./buttons/filterNFTsByType.svelte";
  import ConnectWallet from "./buttons/ConnectWallet.svelte";

  import nfts from "../store/nfts";
  // import { searchEthereumAddress } from "../utils/searchEthereumAddress";
  import fetchNFTsByAddress from "../utils/fetchNFTsByAddress";
  import { ethers } from "ethers";
  import { searchedAddress } from "../store/account";
  import fetchSolanaNfts from "../utils/fetchSolanaNfts";
  import pushNFTsToCollection from "../utils/pushNFTsToCollection";
  let walletAddress = "";
  //0x9552cfce60429863d4a7d8205457ec4aco5857dc
  //0x9552cfce60429863D4A7D8205457EC4AC05857dC
  // async function pushToCollection(address) {
  //   await fetchNFTsByAddress(address).then((data) => {
  //     // ToDo: Refactor
  //     console.log("data", data);

  //     function pushNFTsToCollection($nfts, data) {
  //       if ($nfts && $nfts.length) {
  //         $nfts = $nfts.concat(data);
  //         $nfts.forEach(function (nft, index) {
  //           nft.index = index;
  //         });
  //       } else {
  //         nfts.set(data);
  //       }
  //     }
  //     pushNFTsToCollection($nfts, data);
  //   });
  // }

  export const searchEthereumAddress = async (address: string) => {
    //if address starts with 0x
    if ($nfts && $nfts.length) {
      nfts.set([]);
      // pushNFTsToCollection(nfts, []);
    }

    if (address.startsWith("0x")) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log("provider", provider);
      // console.log("address",ethers.utils.getAddress(address))
      if (address.length !== 42) {
        return false;
      }
      try {
        console.log("address", address);
        // ethers.utils.getAddress(address);
        await fetchNFTsByAddress(address).then((data) => {
          // ToDo: Refactor
          console.log("data", data);
          console.log("nfts", $nfts);
          function pushNFTsToCollection($nfts, data) {
            if ($nfts && $nfts.length) {
              $nfts = $nfts.concat(data);
              $nfts.forEach(function (nft, index) {
                nft.index = index;
              });
            } else {
              nfts.set(data);
            }
          }
          pushNFTsToCollection(nfts, data);
        });
        // console.log("NFTs", $nfts)
        return true;
      } catch (e) {
        return false;
      }
    } else {
      fetchSolanaNfts(address).then((data) => {
        console.log("data", data);
        console.log("nfts", $nfts);
        function pushNFTsToCollection($nfts, data) {
          if ($nfts && $nfts.length) {
            $nfts = $nfts.concat(data);
            $nfts.forEach(function (nft, index) {
              nft.index = index;
            });
          } else {
            nfts.set(data);
          }
        }
        pushNFTsToCollection(nfts, data);
      });
    }
  };
</script>

<div style="background-color:grey;" class="navbar">
  <div style="display:flex;flex-direction:column;" class="navbar-start">
    <a class="normal-case text-xl">NFT Viewer</a>
  </div>

  <div class="navbar-center">
    <div style="display:flex; flex-direction:row;">
      <input
        bind:value={walletAddress}
        style="background-color: black;
        color: white;width:300px;"
        type="text"
        placeholder="Search Ethereum or Solana Address"
        class="input input-bordered input-ghost"
      />
      <button
        class="btn btn-ghost btn-circle"
        on:click={() => searchEthereumAddress(walletAddress)}
        on:click={() => searchedAddress.set(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          /></svg
        >
      </button>
    </div>
  </div>
  <div class="navbar-end">
    <ConnectWallet />
  </div>
</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .navbar {
    position: fixed;
    z-index: 100;
  }
  .navbar-start {
    align-items: flex-start;
  }

  @media screen and (max-width: 600px) {
    .navbar {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 150px;
      position: absolute;
      /* width:400px; */
    }
    .navbar-start {
      display: flex;
      justify-content: center;
      align-items: center;
      /* text-align: center; */
    }
    .navbar-center {
      display: flex;
      justify-content: center;
      align-items: center;
      /* text-align: center; */
    }
    .navbar-end {
      display: flex;
      justify-content: center;
      align-items: center;
      /* text-align: center; */
    }
  }
</style>
