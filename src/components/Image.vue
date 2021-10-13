<template>
  <div id="image">
    <h2>Upload Successful</h2>
    <a class="link" target="_blank" :href="src">Image Link</a>

    <a target="_blank" :href="urlShare">
      <img :src="src" alt="Uploaded Picture" />
    </a>
  </div>
</template>

<script>
export default {
  name: "Image",
  props: ["src"],
  data() {
    return {
      urlShare: null,
      showShort: false,
      copied: false,
    };
  },

  methods: {
    copyURL() {
      let testingCodeToCopy = document.querySelector("#copyCode");
      testingCodeToCopy.setAttribute("type", "text");
      testingCodeToCopy.select();

      try {
        var successful = document.execCommand("copy");
        var msg = successful ? "successful" : "unsuccessful";
        console.log(msg);
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 3000);
      } catch (err) {
        alert("Oops, unable to copy");
      }
    },
  },
};
</script>

<style>
#image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5vh;
}
img {
  height: 20em;
  width: auto;
  margin: 5vh;
  box-shadow: 0px 13px 22px 0px rgba(0, 0, 0, 0.75);
}
h2 {
  padding-bottom: 1vh;
  color: rgb(8, 185, 8);
}
button {
  outline: none;
  cursor: pointer;
  width: 20vh;
  height: 4vh;
  font-weight: bold;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.75);
}

.copy {
  width: 25vh;
  outline: none;
  cursor: text;
  padding: 1vh;
}

span {
  padding-top: 1vh;
  cursor: pointer;
  padding-bottom: 2vh;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.link {
  color: blue;
  text-decoration: none; /* no underline */
  padding: 2vh 0;
}

a:hover {
  text-decoration: underline;
}
.copied {
  padding: 0.5vh 0 0 0;
  margin: 0;
  color: rgb(103, 105, 106);
  position: absolute;
  align-self: center;
  top: 3vh;
  transition: all 200ms;
}
</style>