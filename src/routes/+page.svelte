<script>
  import "../global.css";
  import Content from "../components/Content.svelte";
  import Block from "../components/Block.svelte";
  import Title from "../components/Title.svelte";
  import Copyright from "../components/Copyright.svelte";
  import Project from "../components/Project.svelte";
  import ProjectModal from "../components/ProjectModal.svelte";
  import { showModal } from "../utils/stores";

  let modalData;

  showModal.subscribe((value) => {
    modalData = value;
  });

  let titleClicks = 0;

  function counter() {
    if (titleClicks > 10) {
      alert("stop it");
    } else {
      titleClicks = titleClicks + 1;
    }
  }
</script>

{#if modalData.open}
  <ProjectModal>
    <h1 slot="title">{modalData.title}</h1>
    <a slot="preview" target="_blank" href={modalData.preview}>Preview</a>
    <a slot="repo" target="_blank" href={modalData.repo}>Repo</a>
    <p slot="subtitle">{modalData.subtitle}</p>
    <img slot="media" src={modalData.img} alt="project" />
    <p slot="content">{modalData.content}</p>
  </ProjectModal>
{/if}

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
    <h1 slot="title" class="title">Welcome</h1>
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
    <h1 slot="title" class="title">Guestbook</h1>
    <p slot="content">Maybe a guestbook?</p>
  </Block>
  <Block slot="projects">
    <h1 slot="title" class="title">Projects</h1>
    <div class="project-container">
      <Project
        title="Holoscript"
        content="A fullstack social media app built with React and firebase."
        subtitle="A twitter clone."
        preview="https://sagelyyy.github.io/holoscript/"
        repo="https://github.com/Sagelyyy/holoscript"
        img="https://camo.githubusercontent.com/e1590875694ed0939c7a89d69f5966cf4dca53d637e5f925eee721948d4bf31c/68747470733a2f2f692e696d6775722e636f6d2f6e4d61786856742e706e67"
      />
      <Project
        title="Waldo"
        content="A fullstack game built with react and firebase for scoring"
        subtitle="A puzzle adventure game"
        preview="https://sagelyyy.github.io/wheres-waldo/"
        repo="https://github.com/Sagelyyy/wheres-waldo"
        img="https://camo.githubusercontent.com/fd4a90e2b66db3a35570625334bccaf7c49e48bf3e261e5a599dff476d897d24/68747470733a2f2f692e696d6775722e636f6d2f73364c6c7247762e706e67"
      />
      <Project
        title="Bookshelf"
        content="A fullstack personal library built using react and firebase with google auth to save your books"
        subtitle="A personal bookshelf"
        preview="https://sagelyyy.github.io/react-bookshelf/"
        repo="https://github.com/Sagelyyy/react-bookshelf"
        img="https://camo.githubusercontent.com/112c13846f21a9f14f698439a01cba2f9c8824409c45b6cd986fcf7ee1014b03/68747470733a2f2f692e696d6775722e636f6d2f69494c694542302e6a7067"
      />
      <Project
        title="Kindness"
        content="A small webapp I made to learn postgres and supabase. Built with Svelte and Node.js"
        subtitle="A kind social media."
        preview="https://do-good.netlify.app/"
        repo="https://github.com/Sagelyyy/Kindness-frontend"
        img="#"
      />
      <Project
        title="DnD Bot"
        content="A Discord DnD bot I made for me and my friends."
        subtitle="Get spells and items at your fingertips."
        repo="https://github.com/Sagelyyy/dnd5ebot"
        preview="https://github.com/Sagelyyy/dnd5ebot"
        img="https://github.com/Sagelyyy/dnd5ebot/raw/main/dnd-bot.png"
      />
      <Project title="Blog" />
    </div>
  </Block>
  <Block slot="blog-posts">
    <!--GET Blog data, iterate, anchor tag with link by ID-->
    <h1 slot="title" class="title">Blog Posts</h1>
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
    --font-primary-title: "Pixeboy", "Inter", sans-serif;
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
  :global(.title) {
    align-self: left;
    color: var(--font-primary-color);
    font-family: var(--font-primary-title);
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

  img {
    max-width: 760px;
    height: auto;
  }

  a {
    color: white;
    transition: all 0.5s;
  }

  a:hover {
    color: var(--font-primary-color);
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
