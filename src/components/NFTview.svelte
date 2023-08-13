<script land="ts">
   
    import nfts from "../store/nfts";
    import { blur } from "../store/visible";
    import Nft from "./NFT.svelte";
</script>

{#if $nfts && $nfts.length}
<div class="nfts-grid" >
    {#each $nfts as nft}
    
    <Nft {nft}/>
   {/each}
</div>
   
{:else}
    Loading....
{/if}


<style>
    .nfts-grid {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    width: 100%;
    overflow:visible;
    height: fit-content;
    margin-top: 85px;
    margin-left: 120px;
    }
    
    @media screen and (max-width: 600px) {
        .nfts-grid {
            margin-left: 0px;
            margin-top:150px;
            justify-content: center;
        }
    }
</style>