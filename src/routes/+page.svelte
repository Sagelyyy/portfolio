<script>
  import "../global.css";
  import Content from "../components/Content.svelte";
  import Block from "../components/Block.svelte";
  import Title from "../components/Title.svelte";
  import Copyright from "../components/Copyright.svelte";
  import Project from "../components/Project.svelte";

  let titleClicks = 0;

  function counter() {
    if (titleClicks > 10) {
      alert("stop it");
    } else {
      titleClicks = titleClicks + 1;
    }
  }
</script>

<Title>
  <h1 id="title" slot="page-title">
    ChrisCanCod<span
      role="button"
      tabindex="0"
      on:keydown={(e) => {
        e.key === "Enter" ? counter() : null;
      }}
      class={titleClicks >= 10 ? "broken-e" : "title-e"}
      on:click={counter}>e</span
    >
  </h1>
</Title>

<Content>
  <Block slot="welcome">
    <h1 slot="title" class="block-title">Welcome</h1>
    <p slot="content">
      Hey <span class="wave">👋</span> my name is Chris Weiskopf and I'm a full stack
      developer. This is my personal website and blog.
    </p>

    <p>
      I love to program things that I enjoy, or things I feel would be useful.
      Here is some fun stuff I have done!
    </p>

    <ul>
      <li>
        Experimenting with arduinos and raspberry pi devices to grasp the
        physical applications of code.
      </li>
      <li>
        Developing a Python-based web scraper using Selenium, designed to
        extract Dungeons & Dragons spells from websites for my personal Discord
        bot.
      </li>
      <li>
        Building aesthetically pleasing and responsive websites, demonstrating a
        knack for blending creativity with logic and design with functionality.
      </li>
    </ul>
  </Block>
  <Block slot="sidebar">
    <h1 slot="title" class="block-title">Guestbook</h1>
    <p slot="content">Maybe a guestbook?</p>
  </Block>
  <Block slot="projects">
    <h1 slot="title" class="block-title">Projects</h1>
    <div class="project-container">
      <Project>
        <h5>Holoscript</h5>
      </Project>
      <Project>
        <h5>Waldo</h5>
      </Project>
      <Project>
        <h5>Bookshelf</h5>
      </Project>
      <Project>
        <h5>Kindness</h5>
      </Project>
      <Project>
        <h5>DnD Bot</h5>
      </Project>
      <Project>
        <h5>Blog</h5>
      </Project>
    </div>
  </Block>
  <Block slot="blog-posts">
    <!--GET Blog data, iterate, anchor tag with link by ID-->
    <h1 slot="title" class="block-title">Blog Posts</h1>
    <ul>
      <li>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
        aperiam.
      </li>
      <li>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
        accusantium!
      </li>
      <li>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ex.
      </li>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
        recusandae hic porro iusto aspernatur ad.
      </li>
    </ul>
  </Block>
</Content>

<Copyright />

<style>
  :global(:root) {
    --bg-primary: #111324;
    --bg-offset: #373d75;
    --font-primary-color: #85c7f2;
    --font-primary-family: "Inter", sans-serif;
    --radius: 5px;
  }

  :global(html, body) {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: black;
  }

  :global(body) {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.75;
    background-image: url("/images/pixelbg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: contrast(1.2);
  }
  :global(.block-title) {
    align-self: left;
    color: var(--font-primary-color);
    font-family: "Pixeboy", "Inter", sans-serif;
    letter-spacing: 2px;
    font-size: 2.5rem;
    padding-left: 10px;
  }

  p,
  li {
    padding: 5px;
  }

  #title {
    margin: 10px;
    text-shadow: 1px 1px 5px black;
    margin-right: 120px;
    user-select: none;
  }

  .title-e {
    user-select: none;
  }

  .title-e:hover {
    cursor: pointer;
  }

  .broken-e {
    transition: all 0.5s;
    display: inline-block;
    animation: fly 3s linear 1s 1 normal forwards;
    color: #1a1e3a;
  }

  .wave:hover {
    display: inline-block;
    animation: wave 1.5s linear 0.3s infinite alternate;
  }

  .project-container {
    justify-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(10deg);
    }
    75% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-10deg);
    }
  }

  @keyframes fly {
    0% {
      transform: rotate(10deg);
    }

    25% {
      transform: translateY(10vh) rotate(70deg);
    }

    50% {
      transform: translateY(50vh) rotate(90deg);
    }

    100% {
      transform: translateY(90vh);
      opacity: 0;
    }
  }
</style>
