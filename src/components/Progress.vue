<template>
  <div id="progress">
    <p>Uploading... Please wait.</p>
    <progress max="100" :value="value"></progress>
    <p>{{ Math.floor(value) }}%</p>
  </div>
</template>

<script>
export default {
  name: "Progress",
  props: ["value"],
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
#progress {
      margin-top: -20vh;

}
</style>