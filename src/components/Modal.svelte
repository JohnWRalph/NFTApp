<script>
    import { shown } from "../store/nftModal";

    export function show() {
        console.log();
        shown.set(true);
    }
    export function hide() {
        shown.set(false);
    }
</script>

<svelte:window
    on:keydown={(e) => {
        if (e.keyCode == 27) {
            hide();
        }
    }}
/>

{#if $shown}
    <div class="modal-wrapper">
   

        
        <!-- <span class="close" >&times;</span> -->
        <slot />
    </div>
{/if}

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .modal-wrapper {
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.6);
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        
    }

    .close {
        float: right;
        cursor: pointer;
        position: absolute;
    }
 
    .close:hover {
        font-weight: bold;
    }
    @media screen and (max-width: 600px) {
        .modal-wrapper {
            width: 90%;
            height: 90%;
            left:50%;
            /* transform: translate(-50%); */
            top:50%;
            transform: translate(-50%,-50%);
        }
       
    }
</style>
