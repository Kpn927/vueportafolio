<template>
  <div class="popup-overlay" @click.self="closePopup">
    <div class="popup-container">
      <button class="close-button" @click="closePopup">
        &times;
      </button>
      <div class="popup-content">
        <h2>{{ project.infoButtonText }}</h2>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(['close']);

const closePopup = () => {
  emits('close');
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-container {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.3s ease-out;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #ecf0f1;
  font-size: 2rem;
  cursor: pointer;
  line-height: 1;
}

.close-button:hover {
  color: #e74c3c;
}

.popup-content {
  text-align: left;
}

.popup-content h2 {
  font-size: 2rem;
  margin-top: 0;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
}

.popup-content p {
  font-size: 1.1rem;
  line-height: 1.6;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
