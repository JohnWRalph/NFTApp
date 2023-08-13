import { writable } from "svelte/store";

const visible = writable<boolean>(false)
const blur = writable<boolean>(false)
export {visible,blur}