<template>
  <div>
    <!-- <button @click="openPopup" class="open-button">Open Popup</button> -->
    <Popup v-if="isPopupVisible" :jsonData="popupData" @close="closePopup" />
  </div>
</template>

<script>
import Popup from "./Popup.vue"

export default {
  name: "AppContainer",
  components: {
    Popup,
  },
  data() {
    return {
      isPopupVisible: false,
      popupData: {
        title: "Dynamisk rubrik..",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc sapien ultricies nunc, quis ultricies nisl nunc eget nunc.",
        linkTitle: "Gå till nyhetsbrevet",
        link: "https://www.google.se"
      },
    };
  },
   mounted() {
     setTimeout(() => {
       this.isPopupVisible = true;
     }, 1000);
   },
  methods: {
    openPopup() {
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    },
  },
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #000;
  font-family: Roboto, sans-serif, Arial, Helvetica;
}

.open-button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  outline: none;
}

.open-button:hover {
  background-color: #2980b9;
}
</style>
