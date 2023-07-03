<script>
  import "../global.css";
  import Content from "../components/Content.svelte";
  import Block from "../components/Block.svelte";
  import Title from "../components/Title.svelte";
</script>

<Title>
  <h1 id="title" slot="page-title">ChrisCanCode</h1>
</Title>

<Content>
  <Block slot="welcome">
    <h1 slot="title" class="block-title">Welcome</h1>
    <p slot="content">
      Hey 👋 my name is Chris Weiskopf and I'm a full stack developer. This is
      my personal website and blog.
    </p>
  </Block>
  <Block slot="sidebar">
    <h1 slot="title" class="block-title">Sidebar</h1>
    <p slot="content">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga repellat
      mollitia dolor? Voluptates nulla enim blanditiis nihil exercitationem
      molestiae ea sed expedita harum tempora eos error reiciendis quod
      assumenda dolor nostrum totam, molestias culpa eum dolore ullam corporis
      ipsa sapiente ducimus. Reiciendis molestiae incidunt at unde aspernatur
      officiis eaque optio?
    </p>
  </Block>
  <Block slot="about-me">
    <h1 slot="title" class="block-title">About me</h1>
    <p slot="content">
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
  <Block slot="blog-posts">
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

<style>
  :global(:root) {
    --bg-primary: #111324;
    --bg-offset: #17181a86;
    --font-primary-color: #85c7f2;
    --font-primary-family: "Inter", sans-serif;
  }

  :global(html, body) {
    height: 100%;
    margin: 0;
    padding: 0;
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
  .block-title {
    align-self: left;
    padding: 5px;
    color: var(--font-primary-color);
    line-gap-override: 5px;
    font-family: "Pixeboy", "Inter", sans-serif;
  }

  p,
  li {
    padding: 5px;
  }

  #title {
    margin: 10px;
    text-shadow: 1px 1px 5px black;
    margin-right: 120px;
  }
</style>
