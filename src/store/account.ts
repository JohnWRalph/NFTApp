import { writable } from "svelte/store"; 

const ethereumAccount = writable<string> ();

const solanaAccount = writable<string> ();
const searchedAddress = writable<boolean> (false);
export {ethereumAccount, solanaAccount, searchedAddress};