<script lang="ts">
  import FilterNfTsByType from "./buttons/filterNFTsByType.svelte";
  import ConnectWallet from "./buttons/ConnectWallet.svelte";

  import nfts from "../store/nfts";
  // import { searchEthereumAddress } from "../utils/searchEthereumAddress";
  import fetchNFTsByAddress from "../utils/fetchNFTsByAddress";
  import { ethers } from "ethers";
  import {
    ethereumAccount,
    searchedAddress,
    solanaAccount,
  } from "../store/account";
  import fetchSolanaNfts from "../utils/fetchSolanaNfts";
  import pushNFTsToCollection from "../utils/pushNFTsToCollection";
  import { visible } from "../store/visible";
  import { fade } from "svelte/transition";
  import displayEthereumAddress from "../utils/displayEthereumAddress";
  import ConnectEthereumWallet from "./buttons/ConnectEthereumWallet.svelte";
  import displaySolanaAddress from "../utils/displaySolanaAddress";
  import ConnectSolanaWallet from "./buttons/ConnectSolanaWallet.svelte";
  let walletAddress = "";

  export const searchEthereumAddress = async (address: string) => {
    //if address starts with 0x
    if ($nfts && $nfts.length) {
      nfts.set([]);
      // pushNFTsToCollection(nfts, []);
    }

    if (address.startsWith("0x")) {
      const provider = new ethers.providers.JsonRpcProvider(
        import.meta.env.VITE_RPC_URL
      );
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
    <div class="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Page content here -->
        <label
          on:click={() => visible.set(true)}
          for="my-drawer-4"
          class="drawer-button btn btn-primary">Wallets</label
        >
      </div>
      {#if $visible}
        <div out:fade class="drawer-side">
          <label
            on:click={() => visible.set(false)}
            for="my-drawer-4"
            class="drawer-overlay"
          />

          <ul class="menu bg-base-200 text-base-content">
            <!-- Sidebar content here -->
            <li>
              {#if $ethereumAccount}
                <div
                  style=" margin-top:0; width:100%;word-wrap:break-word; background-color:black;color:white;width:90%;border-radius:15px; text-align:center;margin-left:5%"
                >
                  {displayEthereumAddress($ethereumAccount)}
                </div>
                <!-- <DisconnectEthereum/> -->
              {:else}
                <ConnectEthereumWallet />
              {/if}
            </li>
            <li>
              {#if $solanaAccount}
                <div
                  style=" margin-top:0; width:100%;word-wrap:break-word; background-color:black;color:white;width:90%;border-radius:15px; text-align:center;margin-left:5%"
                >
                  {displaySolanaAddress($solanaAccount)}
                </div>
              {:else}
                <ConnectSolanaWallet />
              {/if}
            </li>
            <div class="divider"></div> 
            <p>No Wallet? Try these:</p>
            <p>Ethereum:</p>
            <p style="word-break:break-all">0x9552cfce60429863D4A7D8205457EC4AC05857dC</p>
            <p>Solana</p>
            <p style="word-break:break-all">6yqm5QUft621gmuVFht6USz1CbkZUwprUpa45HnvrG1m</p>
          </ul>
        </div>
      {/if}
    </div>
  </div>
</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  .drawer-content {
    display: flex;
    justify-content: right;
  }
  .menu {
    height: 90%;
    margin-top: 2.5%;
    margin-right: 20px;
    width: 300px;
    border-radius: 30px;
    gap: 10px;
  }
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
      top: 0px;
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
