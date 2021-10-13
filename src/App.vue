<template>
  <Home />
</template>

<script>
import Home from "./components/Home";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1e2b37;

}
body {
  margin: 0 !important;
  padding: 0;
}

</style>
