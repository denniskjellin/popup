<template>
  <div id="app">
    <button @click="openPopup" class="open-button">Open Popup</button>
    <Popup v-if="isPopupVisible" :jsonData="popupData" @close="closePopup" />
  </div>
</template>

<script>
import Popup from "./components/Popup.vue";

export default {
  name: "App",
  components: {
    Popup,
  },
  data() {
    return {
      isPopupVisible: false,
      popupData: {
        title: "Dynamisk rubrik..",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit congue felis, hendrerit praesent at accumsan tempor phasellus lectus urna malesuada suscipit, quam cras nulla ligula vel eget ac netus. Curae donec metus tincidunt orci, sociis porttitor himenaeos dictumst id, posuere rutrum ornare.",
        linkTitle: "Länk titel",
        link: "/about"
      },
    };
  },
  methods: {
    openPopup() {
      this.isPopupVisible = true;
    },
    closePopup() {
      console.log("closePopup, emit");
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
