<template>
  <div>
    <Navbar imageName="brand.webp" alt="BETTOGH" />
    <br />
    <Nuxt />
    <br />
    <Footer name="BETTOGH" />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");

body {
  font-family: "Roboto", sans-serif;
  background-color: var(--bg);
  transition: background-color 0.5s;
}
</style>
