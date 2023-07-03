<script>
</script>

<div class="content">
  <div class="sidebar">
    <slot name="sidebar" />
  </div>
  <div class="welcome">
    <slot name="welcome" />
  </div>
  <div class="about-me">
    <slot name="about-me" />
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
    grid-template-rows: auto 1fr 1fr;
    grid-template-areas:
      ". welcome sidebar"
      ". about-me sidebar"
      ". blog-posts sidebar";
    grid-gap: 20px;
    border: 2px solid red;
    row-gap: 10px;
  }

  .sidebar {
    grid-area: sidebar;
  }

  .welcome {
    grid-area: welcome;
  }

  .about-me {
    grid-area: about-me;
  }

  .blog-posts {
    grid-area: blog-posts;
  }

  @media (max-width: 768px) {
    .content {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto;
      grid-template-areas:
        "welcome"
        "sidebar"
        "about-me";
    }
  }
</style>
