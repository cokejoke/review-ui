<template>
  <div class="shareButtons">
    <ShareNetwork
      network="twitter"
      :url="url"
      :title="title"
      :hashtags="hashtags"
    >
      <span class="social-icons">A</span>
    </ShareNetwork>
    <ShareNetwork
      network="facebook"
      :url="url"
      :title="title"
      :quote="title"
      :hashtags="hashtags"
    >
      <span class="social-icons">B</span>
    </ShareNetwork>
    <ShareNetwork network="reddit" :url="url" :title="title">
      <span class="social-icons">Q</span>
    </ShareNetwork>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      url: "",
    };
  },
  mounted() {
    this.url = window.location.href;
  },
  props: ["title", "hashtags"],
});
</script>

<style lang="scss">
@font-face {
  font-family: SocialType;
  src: url("~/assets/fonts/SocialType.ttf");
}

.shareButtons {
  a {
    text-decoration: none;
  }
  .social-icons {
    font-family: SocialType;
    font-size: 50px;
    color: var(--color-primary);
  }
}
</style>
