import { writable } from "svelte/store";

export const showModal = writable({
  open: false,
  title: null,
  subtitle: null,
  content: null,
  preview: null,
  repo: null,
  img: null,
});
