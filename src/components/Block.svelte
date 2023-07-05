<script>
  let clicked = null;

  function clickBox() {
    clicked = clicked === null ? true : !clicked;
  }
</script>

<section
  role="button"
  tabindex="0"
  on:keydown={(e) => {
    e.key === "Enter" ? clickBox() : null;
  }}
  on:click|stopPropagation={clickBox}
  class={clicked === null
    ? "block-container idle"
    : clicked
    ? "block-container clicked"
    : "block-container reversed"}
>
  <div>
    <slot name="title" />
  </div>
  <div class="block-content">
    <slot name="content" />
    <slot />
  </div>
</section>

<style>
  .block-container {
    display: flex;
    flex-direction: column;
    border: 2px solid gray;
    border-radius: var(--radius);
    background-color: var(--bg-primary);
    transition: all 1.5s;
  }

  .clicked {
    animation: flip 1s linear 0.5s both;
  }

  .reversed {
    animation: flip-reverse 1s linear 0.5s both;
  }

  .block-container:hover {
    cursor: pointer;
    background-color: var(--bg-offset);
  }

  .block-content {
    padding: 5px;
    color: white;
  }
  @keyframes flip {
    from {
      transform: rotate3d(0, 1, 0, 0deg);
    }
    to {
      transform: rotate3d(0, 1, 0, 180deg);
    }
  }

  @keyframes flip-reverse {
    from {
      transform: rotate3d(0, 1, 0, 180deg);
    }
    to {
      transform: rotate3d(0, 1, 0, 0deg);
    }
  }
</style>
