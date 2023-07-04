<script>
  export let showModal;
</script>

<div class="modal-container">
  <div>
    <slot name="title" />
  </div>
  <div class="modal-content">
    <slot name="content" />
    <slot />
  </div>
</div>

<style>
  .modal-container {
    position: absolute;
    top: 35%;
    left: 0;
    width: 300px;
    height: 300px;
  }
</style>
