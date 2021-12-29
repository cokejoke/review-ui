<template>
  <div>
    <div class="row">
      <div class="col-12">
        <Input v-model="title" type="text" placeholder="Title" />
      </div>
      <div class="col-12">
        <div id="editor">
          <medium-editor v-model="content" :options="options" />
        </div>
      </div>
      <div class="col-12 right">
        <Button @click="post()" bg="#5d3779">Post</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    post() {
      console.log(this.title);
      console.log(this.content);
    },
  },
  data() {
    return {
      title: "",
      content: "",
      options: {
        uploadUrl: "https://api.imgur.com/3/image",
        uploadUrlHeader: { Authorization: "Client-ID 7940d003b13c677" },
        file_input_name: "image",
        file_size: 1024 * 1024 * 10,
        imgur: true,
        buttons: [
          "bold",
          "italic",
          {
            name: "h1",
            action: "append-h2",
            aria: "header type 1",
            tagNames: ["h2"],
            contentDefault: "<b>H1</b>",
            classList: ["custom-class-h1"],
            attrs: {
              "data-custom-attr": "attr-value-h1",
            },
          },
          {
            name: "h2",
            action: "append-h3",
            aria: "header type 2",
            tagNames: ["h3"],
            contentDefault: "<b>H2</b>",
            classList: ["custom-class-h2"],
            attrs: {
              "data-custom-attr": "attr-value-h2",
            },
          },
          "justifyCenter",
          "quote",
          "anchor",
        ],
      },
    };
  },
});
</script>

<style lang="scss">
.test {
  font-size: 100px;
}
#editor {
  margin: 0;
  padding: 10px 40px;
  background-color: var(--bg-secondary);
  color: var(--color-secondary);
}
</style>
