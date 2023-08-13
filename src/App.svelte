<script lang="ts">
  import { fly } from "svelte/transition";
import Header from "./components/Header.svelte";
import NfTview from "./components/NFTview.svelte";
  import WalletModal from "./components/WalletModal.svelte";
import {ethereumAccount, searchedAddress, solanaAccount} from "./store/account";

  import NftModal from "./components/NFTModal.svelte";
    import {visible,blur} from "./store/visible";
    import { fade } from 'svelte/transition';


function swoop() {
  return {
    duration: 1000,

    css: (t,u) => `transform:  translateX(${u * 100}%);`
  }
}
let showing = true
</script>



<div>
<Header/>

</div>

{#if $visible}
<div transition:fly="{{ x: 50, duration: 100 }}">
  <WalletModal/>
</div>
{/if}


{#if $ethereumAccount || $solanaAccount || $searchedAddress}
<NfTview />
{:else}
<!-- <div style="background-color:black; height:100vh; width:100vw;"></div> -->
Connect a Wallet
{/if}

<NftModal/>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>