<template>
  <div class="popup">
    <div class="popup-overlay" @click="closePopup"></div>
    <div class="popup-content">
      <button @click="closePopup" class="close-button">&times;</button>
      <div v-if="jsonData">
        <h2 class="popup-title">{{ jsonData.title }}</h2>
        <p class="popup-description">{{ jsonData.description }}</p>
        <router-link :to="jsonData.link" class="navigation-link">
          {{jsonData.linkTitle}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    jsonData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closePopup() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
}

.popup-content {
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 80%;
  position: relative;
  border-radius: 8px;
}

.close-button {
  color: #333;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

.close-button:hover,
.close-button:focus {
  color: #555;
}

.popup-title {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.popup-description {
  color: #555;
  font-size: 1rem;
  line-height: 1.4;
  margin-top: 0;
}

.navigation-link {
  display: inline-block;
  padding: 8px 16px;
  margin-top: 10px;
  text-decoration: none;
  background-color: #3498db;
  color: #fff;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.navigation-link:hover {
  background-color: #2980b9;
}
</style>
