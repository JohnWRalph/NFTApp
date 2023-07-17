import { ethers } from "ethers";
import fetchEthereumNfts from "./fetchEthereumNfts";
import fetchNFTsByAddress from "./fetchNFTsByAddress";
import nfts from "../store/nfts";
import pushNFTsToCollection from "./pushNFTsToCollection";
export const searchEthereumAddress = async (address: string) => {
    //convert to checksum address
    nfts.set([]);
    pushNFTsToCollection(nfts,nfts);
    // console.log("address", address.toLowerCase())
    // address = address.toLowerCase();
    // address = ethers.utils.getAddress(address.toLowerCase());
    // // console.log("address",address)
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // console.log("provider", provider)
    // // console.log("address",ethers.utils.getAddress(address))
    // if (address.length !== 42) {
    //     return false;
    // }
    // try {
    //     console.log("address", address)
    //     // ethers.utils.getAddress(address);
    //     await fetchNFTsByAddress(address).then((data) => {
    //         // ToDo: Refactor
    //         console.log("data", data)
    //         console.log("nfts", $nfts)
    //         function pushNFTsToCollection($nfts, data) {
    //             if ($nfts && $nfts.length) {
    //                 $nfts = $nfts.concat(data);
    //                 $nfts.forEach(function (nft, index) {
    //                     nft.index = index;
    //                 });
    //             } else {
    //                 nfts.set(data);
    //             }
    //         }
    //         pushNFTsToCollection($nfts, data);
    //     });
    //         // console.log("NFTs", $nfts)
    //         return true;
    //     } catch (e) {
    //         return false;
    //     }
    }
