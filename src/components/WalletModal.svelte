<script land="ts">
    import { ethereumAccount, solanaAccount } from "../store/account";
    import { walletModalStatus } from "../store/walletModal";
    import displayEthereumAddress from "../utils/displayEthereumAddress";
    import displaySolanaAddress from "../utils/displaySolanaAddress";
    import CopyClipBoard from "./CopyClipBoard.svelte";
    import ConnectEthereumWallet from "./buttons/ConnectEthereumWallet.svelte";
    import ConnectSolanaWallet from "./buttons/ConnectSolanaWallet.svelte";
    import { fly } from 'svelte/transition'
    
    //function to copy ethereum address or solana aaddress to clipboard
    const copy = () =>{
        
    }
</script>

<div 

id="myModal" class="modal" style="display:{$walletModalStatus}">
    <!-- <span class="close">&times;</span> -->

    <div id="walletButtons">
        <div>
       
       <br>
     
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
        position: absolute;
        height:85%;
        background-color: rgba(63, 63, 63, 0.95);
        top: 70px;
        border: 1px solid white;
        border-radius:20px;
        /* border: 2px solid rgb(1, 1, 1); */
        margin-bottom: 5px;
        z-index: 1000;
        /* width: 100%; */
        margin-left: 68%;
      
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
        z-index:1000;
    }

    @media screen and (max-width: 600px) {
        #myModal {
           top:150px;
           margin-left:0%;
           width:100%;
        }
    }
</style>
