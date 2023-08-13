<script lang="ts">
  import {walletModalStatus, walletModalText } from "../../store/walletModal";
    import {visible,blur} from "../../store/visible";
  
</script>

<button style="width:150px" id="openWalletButton"
  on:click={async () => {
    console.log($walletModalStatus);
    visible.set(!$visible)
    if ($walletModalStatus === "none") {
      walletModalStatus.set("block");
      walletModalText.set("Close Wallet")
    } else if ($walletModalStatus === "block") {
      walletModalStatus.set("none");
      walletModalText.set("Open Wallet")
    }
  }}>{$walletModalText}</button
>

<style>
#openWalletButton {
  height:40px;
  width:130px;
  min-width: 130px;
  background-color: black;
  color:white;
}
</style>