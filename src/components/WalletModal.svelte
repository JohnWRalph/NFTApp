<script land="ts">
    import { ethereumAccount, solanaAccount } from "../store/account";
    import { walletModalStatus } from "../store/walletModal";
    import displayEthereumAddress from "../utils/displayEthereumAddress";
    import displaySolanaAddress from "../utils/displaySolanaAddress";
    import CopyClipBoard from "./CopyClipBoard.svelte";
    import ConnectEthereumWallet from "./buttons/ConnectEthereumWallet.svelte";
    import ConnectSolanaWallet from "./buttons/ConnectSolanaWallet.svelte";
    
    
    //function to copy ethereum address or solana aaddress to clipboard
    const copy = () =>{
        
    }
</script>

<div id="myModal" class="modal" style="display:{$walletModalStatus}">
    <!-- <span class="close">&times;</span> -->

    <div id="walletButtons">
        <div>
            {#if $ethereumAccount}
            <div style=" margin-top:0; width:100%;word-wrap:break-word; background-color:black;color:white;width:90%;border-radius:15px; text-align:center;margin-left:5%">

                {"Connected Ethereum Account: " +
                    displayEthereumAddress($ethereumAccount)}
            </div>
                <!-- <DisconnectEthereum/> -->
            {:else}
                <ConnectEthereumWallet />
            {/if}
       <br>
            {#if $solanaAccount}
            <div style=" margin-top:0; width:100%;word-wrap:break-word; background-color:black;color:white;width:90%;border-radius:15px; text-align:center;margin-left:5%">
                {"Connected Solana Account: " +
                    displaySolanaAddress($solanaAccount)}
            </div>
                
            {:else}
                <ConnectSolanaWallet />
            {/if}
        </div>
        <div />
    </div>
    <br>
    <h1 style=" margin-top:0; width:100%;word-wrap:break-word; background-color:black;color:white;width:90%;border-radius:15px; text-align:center;margin-left:5%;">Don't have a wallet?</h1>
    <h2 style=" margin-top:0; width:100%;word-wrap:break-word; background-color:black;color:white;width:90%;border-radius:15px; text-align:center;margin-left:5%">Sample Addresses:</h2>
    <div style="font-size:20px; margin-top:0; width:100%;word-wrap:break-word; background-color:black;color:white;width:90%;border-radius:15px; text-align:center;margin-left:5%">
        Ethereum:<br>0x9552cfce60429863D4A7D8205457EC4AC05857dC
    </div>
    <br>
    <div style="font-size:20px; margin-top:0; width:100%;word-wrap:break-word;background-color:black;color:white;width:90%;border-radius:15px; text-align:center;margin-left:5%">
        Solana:<br>6yqm5QUft621gmuVFht6USz1CbkZUwprUpa45HnvrG1m
        </div>
</div>

<style>
    #myModal {
        position: fixed;
        background-color: rgba(63, 63, 63, 0.95);
        top: 64px;
        border: 1px solid white;
        /* border: 2px solid rgb(1, 1, 1); */
        margin-bottom: 5px;
        z-index: 100;
        /* width: 100%; */
        margin-left: 70%;
      
    }

    .modal {
    
        width: 30%;
        height: 100%;
        transition: transform 1s ease-out, opacity 1s ease-out;
    }
 

    #walletButtons {
        display: flex;
      text-align: center;
      align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 600px) {
        #myModal {
           top:150px;
           margin-left:0%;
           width:100%;
        }
    }
</style>
