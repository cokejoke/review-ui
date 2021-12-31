<script lang="ts">
import Vue from "vue";
import { PropType } from "vue";
import { ReviewDTO } from "dto/ReviewDTO";

export default Vue.extend({
  props: {
    review: {
      type: Object as PropType<ReviewDTO>,
    },
  },
  methods: {
    formatDate(dateString: string): string {
      const date = new Date(dateString);
      const day = ("0" + date.getDate()).slice(-2);
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    },
  },
});
</script>

<template>
  <div class="review">
    <div class="row">
      <div class="col-12 right">
        <span class="published">{{ formatDate(review.date) }}</span>
        <i class="material-icons">schedule</i>
      </div>
      <div class="col-12">
        <h1 id="title">{{ review.title }}</h1>
      </div>
      <div v-html="review.content" class="col-12"></div>
      <div class="col-12">
        <h4>Support:</h4>
      </div>
      <div class="col-2 col-12-sm">
        <Button :link="review.reviewer" bg="#5d3779">BETTOGH</Button>
      </div>
      <div class="col-2 col-12-sm">
        <Button :link="review.artist" bg="#5d3779">Artist</Button>
      </div>
      <div class="col-4 col-12-sm center">
        <Button :link="review.smartlink" bg="#773572">SmartLink</Button>
      </div>
      <div class="col-4 col-12-sm right">
        <ShareButtons :title="review.title" :hashtags="review.hashtags" />
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
@media only screen and (max-width: 719px) {
  .review {
    .center {
      text-align: left;
    }
  }
}
</style>
