<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div v-for="review in reviews" :key="review.id">
          <Review :review="review" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ReviewDTO } from "dto/ReviewDTO";

export default Vue.extend({
  async asyncData({ $axios }) {
    const api: string = "/api/review";
    const reviews: ReviewDTO[] = await $axios.$get(api);
    return { reviews };
  },
});
</script>
