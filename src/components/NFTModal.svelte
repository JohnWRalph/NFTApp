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
        <button on:click={() => hide()} class="btn btn-square closeButton">
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
        <div id="modalTop">
            <img id="modalImage" src={$nftModalImage} alt="nft image here" />
        </div>
        <div class="overflow-x-auto modalDetails">
            <table class="table table-zebra">
                <thead style="background-color:grey;color:white;">
                    <tr style="background-color:grey;color:white;">
                        <th style="background-color:grey;color:white;">Name</th>
                        {#if $nftModalName}
                            <th style="background-color:grey;color:white;"
                                >{$nftModalName}</th
                            >
                        {:else}
                            <td>-</td>
                        {/if}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Collection:</th>
                        {#if $modalTitle}
                            <td>{$modalTitle}</td>
                        {:else}
                            <td>-</td>
                        {/if}
                    </tr>

                    <tr style="background-color:grey;color:white;">
                        <th>Created by:</th>
                        {#if $nftModalCreator}
                            <td>{$nftModalCreator}</td>
                        {:else}
                            <td>-</td>
                        {/if}
                    </tr>

                    <tr>
                        <th>Description:</th>
                        {#if $nftModalDescription}
                            <td>{$nftModalDescription}</td>
                        {:else}
                            <td>-</td>
                        {/if}
                    </tr>

                    <tr style="background-color:grey;color:white;">
                        <th>External Link:</th>
                        {#if $nftModalExternalUrl.length}
                            <td>{$nftModalExternalUrl}</td>
                        {:else}
                            <td>-</td>
                        {/if}
                    </tr>

                    <tr>
                        <th>Creator:</th>
                        {#if $nftModalCreator}
                            <td>{$nftModalCreator}</td>
                        {:else}
                            <td>-</td>
                        {/if}
                    </tr>
                    <tr />
                </tbody>
            </table>
            {#if $nftModalAttributes && $nftModalNftType === 2}
                <div style="text-align:center; margin-top:20px;">
                    <h1 style="font-size:1.5rem;">Attributes</h1>
                    <div id="attributeContainer">
                        {#each $nftModalAttributes as attribute}
                            <NfTattributes {attribute} />
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
    </div>
</Modal>

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
    .closeButton {
        position: absolute;
        right: 20px;
        top: 20px;
        z-index: 100;
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
    .modalDetails {
        width: 50%;
    }
    #modalNFT {
        width: 1100px;
        /* min-width: 600px; */
        height: 90%;
        background-color: rgb(59, 54, 54);
        overflow-x: hidden;
        overflow-y: auto;
        scrollbar-width: thin;
        border-radius: 10px;
        color: white;
        display: flex;
        flex-direction: row;
        position: relative;
        border-bottom-right-radius: 200px;
        box-shadow: 6px 6px 2px 1px rgba(0, 0, 0, 0.7);
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
        height: 100%;
        /* width:450px; */
        background-color: black;
        display: flex;
        justify-content: center;
        position: relative;
    }
    #modalBottom {
    }
    #modalImage {
        /* height: 100%; */
        width: 100%;
    }

    @media screen and (max-width: 600px) {
        #modalNFT {
            width: 100%;
        }
        #modalTop {
            width: 100%;
        }
    }
</style>
