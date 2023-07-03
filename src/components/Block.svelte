<script>
</script>

<div class="block-container">
  <div class="block-title">
    <slot name="title" />
  </div>
  <div class="block-content">
    <slot name="content" />
    <slot />
  </div>
</div>

<style>
  .block-container {
    display: flex;
    flex-direction: column;
    border: 2px solid gray;
    border-radius: 5px;
    background-color: var(--bg-primary);
  }

  .block-title {
    padding: 5px;
    color: var(--font-primary);
    letter-spacing: 2px;
    font-size: 1.5rem;
  }

  .block-content {
    padding: 5px;
    color: white;
  }
</style>
