<script>
  import ProjectModal from "./ProjectModal.svelte";

  export let showModal;

  function handleModal() {
    showModal = !showModal;
  }
</script>

{#if showModal}
  <ProjectModal {showModal}>
    <h1 slot="name">TEST</h1>
    <p slot="content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, iste.
    </p>
  </ProjectModal>
{/if}

<!--|stopPropagation to stop bubbling the click so the flip animation
on the Block component doesn't play-->
<div
  role="button"
  tabindex="0"
  on:keydown={(e) => {
    e.key === "Enter" ? handleModal() : null;
  }}
  class="project"
  on:click|stopPropagation={handleModal}
>
  <slot />
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
