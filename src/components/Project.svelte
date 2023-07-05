<script>
  import { showModal } from "../utils/stores.js";

  function setModalData() {
    showModal.set({
      open: true,
      title,
      subtitle,
      content,
      img,
      preview,
      repo,
    });
  }

  export let subtitle;
  export let content;
  export let img;
  export let title;
  export let preview;
  export let repo;
</script>

<div
  tabindex="0"
  role="button"
  on:keydown={(e) => {
    e.key === "Enter" ? setModalData() : null;
  }}
  on:click|stopPropagation={setModalData}
  class="project"
>
  <h5>{title}</h5>
</div>

<style>
  .project {
    border: 1px solid grey;
    transition: all 0.2s;
    margin: 1px;
    width: 100px;
    text-align: center;
    border-radius: var(--radius);
    z-index: 5;
  }

  .project:hover {
    background-color: #bccce0;
    color: var(--bg-primary);
  }
</style>
