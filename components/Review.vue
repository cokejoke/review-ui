<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    artist: {
      type: String,
    },
    reviewer: {
      type: String,
    },
    smartlink: {
      type: String,
    },
    hashtags: {
      type: String,
    },
  },
});
</script>

<template>
  <div class="review">
    <div class="row">
      <div class="col-12 right">
        <span class="published">20.10.2021</span>
        <i class="material-icons">schedule</i>
      </div>
      <div class="col-12">
        <h1 id="title">{{ title }}</h1>
      </div>
      <div v-html="content" class="col-12"></div>
      <div class="col-12">
        <h4>Support:</h4>
      </div>
      <div class="col-2 col-12-sm">
        <Button :link="reviewer" bg="#5d3779">BETTOGH</Button>
      </div>
      <div class="col-2 col-12-sm">
        <Button :link="artist" bg="#5d3779">Artist</Button>
      </div>
      <div class="col-4 col-12-sm center">
        <Button :link="smartlink" bg="#773572">SmartLink</Button>
      </div>
      <div class="col-4 col-12-sm right">
        <ShareButtons :title="title" :hashtags="hashtags" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.review {
  margin: 10px 0;
  border-radius: 15px;
  padding: 25px;
  background-color: var(--bg-secondary);
  color: var(--color-secondary);
  #title {
    color: var(--color-primary);
  }
  .published,
  .material-icons {
    color: var(--color-light);
    vertical-align: middle;
  }

  .published {
    margin-right: 8px;
  }

  .material-icons {
    font-size: 20px;
  }
}
</style>
