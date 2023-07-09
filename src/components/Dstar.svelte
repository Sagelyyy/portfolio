<script>
  import { onMount } from "svelte";
  import { nanoid } from "nanoid";

  let lazers = [];
  let cooldown = 0;

  function firinMahLazer() {
    if (cooldown === 0) {
      let lazer = {
        id: nanoid(),
        x: 90,
        y: Math.random() * -20,
        life: 20,
      };

      lazers = [...lazers, lazer];
      cooldown = 1;
      const cooldownInterval = setInterval(() => {
        cooldown = cooldown - 1;

        if (cooldown === 0) {
          clearInterval(cooldownInterval);
        }
      }, 1000);
      const audio = new Audio("./sound/lazer.wav");
      audio.volume = 0.5;
      audio.play();
    }
  }

  onMount(() => {
    const intervalId = setInterval(() => {
      lazers = lazers.map((lazer) => {
        return {
          ...lazer,
          x: lazer.x + Math.random() * 10,
          life: lazer.life - 1,
        };
      });
      lazers = lazers.filter((lazer) => lazer.life > 0);
    }, 50);

    return () => {
      clearInterval(intervalId);
    };
  });
</script>

<div class="dstar">
  <svg on:click={firinMahLazer} width="100" height="100">
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="lightgrey"
      stroke-width="4"
      fill="darkgrey"
    />
    <circle
      cx="70"
      cy="40"
      r="10"
      stroke="black"
      stroke-width="4"
      fill="grey"
    />
    <line x1="12" y1="55" x2="88" y2="55" stroke="grey" />
  </svg>

  {#if lazers}
    {#each lazers as lazer (lazer.id)}
      <div
        class="lazer"
        style="transform: translate3d(1, 0, 0); position: absolute; left:{lazer.x}px; top:{lazer.y}px"
      >
        <svg width="100" height="100">
          <line x1="12" y1="55" x2="88" y2="55" stroke="lime" />
        </svg>
      </div>
    {/each}
  {/if}
  {#each lazers as lazer}
    {#if lazer.life === 1}
      <div
        style="transform: translate3d(1, 0, 0); position: absolute; left:{lazer.x +
          90}px; top:{lazer.y + 50}px"
      >
        <svg>
          <rect width="10" height="10" fill="red" />
          <rect x="1.5" y="2.5" width="5" height="5" fill="yellow" />
          <rect />
        </svg>
      </div>
    {/if}
  {/each}
</div>

<style>
  .dstar {
    position: absolute;
    left: 20%;
    top: 30%;
  }

  .dstar:hover {
    cursor: pointer;
  }
</style>
