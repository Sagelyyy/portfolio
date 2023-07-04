<script>
</script>

<div class="content">
  <div class="sidebar">
    <slot name="sidebar" />
  </div>
  <div class="welcome">
    <slot name="welcome" />
  </div>
  <div class="projects">
    <slot name="projects" />
  </div>
  <div class="blog-posts">
    <slot name="blog-posts" />
  </div>
</div>

<style>
  .content {
    max-width: 70rem;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 150px 2fr 1fr;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      ". welcome sidebar"
      ". projects sidebar"
      ".  blog-posts sidebar";
    grid-gap: 20px;
    row-gap: 10px;
  }

  .sidebar {
    grid-area: sidebar;
  }

  .welcome {
    grid-area: welcome;
  }

  .welcome:hover {
    cursor: pointer;
  }

  .projects {
    grid-area: projects;
  }

  .blog-posts {
    grid-area: blog-posts;
  }

  @media (max-width: 768px) {
    .content {
      margin: 0 auto;
      grid-template-columns: 50px 1fr 50px;
      grid-template-rows: 1fr;
      grid-template-areas:
        ". welcome ."
        ". projects ."
        ". about-me ."
        ". blog-posts ."
        ". sidebar .";
    }
  }
</style>
