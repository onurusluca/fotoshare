<template>
  <div id="home">
    <h1><a class="logo" href="/">FotoShare</a></h1>
    <div v-show="!start & !img">
      <h3>Upload a Photo</h3>
      <input
        class="btn"
        type="button"
        id="get-file"
        value="Choose a file"
        @click="chooseFile"
      />
      <input
        type="file"
        id="my-file"
        @change="prevImg"
        accept="image/*"
        hidden
      />
      <p style="color: red">
        This is a test app. Please do not share private photos.
      </p>
    </div>
    <transition name="fade-in">
      <div v-if="start">
        <Progress :value="uploadValue" /></div
    ></transition>

    <transition name="fade-in">
      <div v-if="img">
        <Image :src="picture" />
      </div>
    </transition>
    <div class="b-text">
      <p>
        Handcrafted with love and care by
        <a target="_blank" href="https://onurusluca.me/">Onur Usluca</a>
      </p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyABmL3Ko7YZKogXTFEJz42iD31KTp4yj5s",
  authDomain: "foto-share-b7456.firebaseapp.com",
  databaseURL: "https://foto-share-b7456.firebaseio.com",
  projectId: "foto-share-b7456",
  storageBucket: "foto-share-b7456.appspot.com",
  messagingSenderId: "752423214389",
  appId: "1:752423214389:web:47d5f5cadedfb41109007c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let uuid = require("uuid");

import Image from "./Image";
import Progress from "./Progress";
export default {
  name: "Home",
  components: {
    Progress,
    Image,
  },
  data() {
    return {
      selectedFile: null,
      start: false,
      img: false,
      picture: null,
      images: [],
      uploadValue: 0,
    };
  },
  methods: {
    chooseFile() {
      document.querySelector("#my-file").click();
    },
    onFileSelect(event) {
      this.selectedFile = event.target.files[0];
    },
    prevImg() {
      this.uploadValue = 0;
      this.picture = null;
      this.selectedFile = event.target.files[0];
      this.onUpload(this.selectedFile);
    },
    onUpload(file) {
      console.log(file);
      this.start = true;

      const storageRef = firebase
        .storage()
        .ref(` ${this.selectedFile.name} `)
        .put(this.selectedFile);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(this.uploadValue);
        },
        (error) => {
          console.log(error.message + "ERROR!");
        },
        () => {
          this.start = false;
          this.img = true;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.picture = url;
          });
        }
      );
    },
    async afterComplete(upload) {
      var imageName = uuid.v1();
      this.isLoading = true;
      try {
        // save image
        let file = upload;
        var metadata = {
          contentType: "image/png",
        };
        var storageRef = firebase.storage().ref();
        var imageRef = storageRef.child(`images/${imageName}.png`);
        await imageRef.put(file, metadata);
        var downloadURL = await imageRef.getDownloadURL();
        this.images.push({ src: downloadURL });
        this.uploadValue = 100;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
#home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
}

h1 {
  position: fixed;
  left: 2vh;
  top: 0vh;
  color: white;
  text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
  font-family: "Lucida Sans Unicode", Verdana, sans-serif;
}
.logo {
  color: white;
  text-decoration: none; /* no underline */
}

.logo:hover {
  text-decoration: none; /* no underline */
}

h3 {
  margin-top: -20vh;
  padding-bottom: 3vh;
}

.btn {
  outline: none;
  cursor: pointer;
  width: 20vh;
  height: 4vh;
  font-weight: bold;
  border: none;
  border-radius: 2px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
  transition: all 100ms ease-in-out;
}
.btn:hover {
  background: #222;
  color: #fff;
}

.fade-in-enter-active {
  transition: opacity 1s ease;
}
.fade-in-leave-active {
  transition: opacity 0.1s ease;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}

.b-text {
  position: absolute;
  bottom: 0vh;
}
p {
  font-size: 2vh;
  font-style: italic;
}
</style>