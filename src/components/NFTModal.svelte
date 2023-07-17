<script>
    import Modal from "./Modal.svelte";
    import nfts from "../store/nfts";
    import {
        modalTitle,
        nftModalDescription,
        nftModalImage,
        nftModalName,
        nftModalNftType,
        nftModalCreator,
        nftModalExternalUrl,
        nftModalAttributes,
        shown,
    } from "../store/nftModal";
    import parseImageURL from "../utils/parseImageURL";
    import NfTattributes from "./NFTattributes.svelte";
    let modal;
    function createModal(event) {
        console.log("dffdfdf");
        console.log(event);
        var nftIndex = event.currentTarget.getAttribute("data-index");
        console.log(nftIndex);
        console.log($nfts[nftIndex]);
    }

    export function show() {
        console.log();
        shown.set(true);
    }
    export function hide() {
        shown.set(false);
    }
</script>

<!-- <button on:click={() => modal.show()}>Show Button</button> -->
<Modal bind:this={modal} on:click={createModal}>
    <div id="modalNFT">
        <div id="modalTop">
            <img id="modalImage" src={$nftModalImage} alt="nft image here" />
            <button
            on:click={() => hide()}
            class="btn btn-square closeButton">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    /></svg
                >
            </button>
        </div>
        <div id="nftDetails">
            <div id="modalTitle">
                <h1>{$nftModalName}</h1>
            </div>
        </div>
        <div id="collectionDetails">
            <div id="collectionName">
                <h2>Collection: {$modalTitle}</h2>
            </div>
            {#if $nftModalCreator}
                <div id="creator"><h2>Created by: {$nftModalCreator}</h2></div>
            {/if}
            {#if $nftModalDescription}
                <div id="modalDescription">
                    <h3>{$nftModalDescription}</h3>
                </div>
            {/if}
        </div>
        <div>
            <div id="creatorBox">
                {#if $nftModalExternalUrl.length}
                    <div class="externalLink">
                        <h3>External Link: {$nftModalExternalUrl}</h3>
                    </div>
                {/if}
                <!-- <div class="externalLink">external link</div> -->
            </div>
        </div>
        {#if $nftModalAttributes && $nftModalNftType === 2}
            <div id="attributeContainer">
                {#each $nftModalAttributes as attribute}
                    <NfTattributes {attribute} />
                {/each}
            </div>
        {/if}
        <!-- <div id="contractDetailsSection">
            <div class="contractDetails">Contract Adress</div>
            <div class="contractDetails">TokenType</div>
            <div class="contractDetails">Contract Adress</div>
            <div class="contractDetails">Contract Adress</div>
        </div> -->
        <div>
            <!-- {$nftModalNftType} -->
        </div>
    </div></Modal
>

<style global lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
    #attributeContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        margin-left: 10%;
        margin-top: 10px;
    }
    .closeButton{
        position:absolute;
      right:20px;
        top:20px;
    }
    #creator {
        width: 100%;
    }
    #collectionDetails {
        width: 100%;

        text-align: center;
    }
    #collectionName {
        width: 100%;
    }
    #creator {
        width: 100%;
    }
    #creatorBox {
        display: flex;
        flex-direction: row;
        text-align: center;
    }
    #contractDetailsSection {
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        height: 110px;
    }

    .contractDetails {
        width: 100%;
        border: 1px solid white;
        height: 25px;
    }
    #details {
        display: flex;
        flex-direction: row;
    }
    .externalLink {
        width: 100%;
    }
    #modalNFT {
        width: 600px;
        /* min-width: 600px; */
        height: 90%;
        background-color: rgb(59, 54, 54);
        overflow-x: hidden;
        overflow-y: auto;
        scrollbar-width: thin;
        border-radius: 10px;
        color: white;
    }
    textarea {
        position: fixed;
    }
    #modalTitle {
        text-align: center;
    }

    #modalDescription {
        margin-top: 5px;
        margin-bottom: 5px;
        text-align: center;
    }
    #collectionName {
        width: 100%;
    }

    #modalTop {
        /* width: 70%; */
        height: 80%;
        background-color: black;
        display: flex;
        justify-content: center;
        position: relative;
    }
    #modalBottom {
        width: 100%;
        height: 30%;
    }
    #modalImage {
        /* height: 100%; */
    }

    @media screen and (max-width: 600px) {
        #modalNFT {
            width: 100%;
           
        }
        #modalTop {
            width:100%;
        }

     
       
    }
</style>
