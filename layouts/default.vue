<template>
  <div class="main-wrapper">
    <Navbar imageName="brand.webp" alt="BETTOGH" />
    <div id="content" class="container">
      <Nuxt />
    </div>
    <Footer name="BETTOGH" />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");

body {
  height: 100%;
  font-family: "Roboto", sans-serif;
  background-color: var(--bg);
  transition: background-color 0.5s;
}

#content {
  padding: 100px 0 170px 0;
}

.main-wrapper {
  position: relative;
  min-height: 100vh;
}
</style>
