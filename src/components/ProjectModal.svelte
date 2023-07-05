<script>
  import { showModal } from "../utils/stores.js";
  import { fly } from "svelte/transition";

  function setModalData() {
    showModal.set({ ...showModal, open: false });
  }
</script>

<div
  tabindex="0"
  role="button"
  on:keydown={(e) => {
    e.key === "Enter" ? setModalData() : null;
  }}
  on:click|stopPropagation={setModalData}
  in:fly={{ x: -200 }}
  out:fly={{ x: -200 }}
  class="modal-container"
>
  <div class="title">
    <slot name="title" />
  </div>
  <div class="links">
    <slot name="preview" />
    <slot name="repo" />
  </div>
  <div class="subtitle">
    <slot name="subtitle" />
  </div>
  <div class="media">
    <slot name="media" />
  </div>
  <div class="modal-content">
    <slot name="content" />
  </div>
</div>

<style>
  .modal-container {
    color: white;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    left: 1%;
    top: 10%;
    display: flex;
    flex-direction: column;
    border: 2px solid gray;
    border-radius: var(--radius);
    background-color: var(--bg-primary);
    padding: 5px;
    height: 80%;
    width: 800px;
    z-index: 10;
  }

  .modal-container:hover {
    cursor: pointer;
  }

  .title {
    font-size: 2rem;
  }
</style>
