<template>
  <div class="slideshow-container">
    <div class="slideshow-content">
      <img
        v-if="currentSlide.type === 'image'"
        :src="currentSlide.src"
        :alt="currentSlide.caption"
        class="slideshow-image"
      />
      <iframe
        v-else-if="currentSlide.type === 'youtube'"
        class="slideshow-video"
        :src="getYouTubeEmbedUrl(currentSlide.src)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div v-else class="slideshow-placeholder">
        <p>Tipo de contenido no compatible.</p>
      </div>
    </div>

    <div class="slideshow-info">
      <h3 v-if="currentSlide.caption" class="slideshow-caption">
        {{ currentSlide.caption }}
      </h3>
    </div>

    <div class="slideshow-controls">
      <button @click="prevSlide" class="slideshow-button">&lt;</button>
      <button @click="nextSlide" class="slideshow-button">&gt;</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [
      {
        type: 'image',
        src: 'https://placehold.co/800x450/2c3e50/ecf0f1?text=Placeholder+Image',
        caption: 'Imagen de ejemplo 1',
      },
      {
        type: 'youtube',
        src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        caption: 'Video de Rick Astley',
      },
    ],
  },
});

const currentSlideIndex = ref(0);

const currentSlide = computed(() => {
  return props.items[currentSlideIndex.value];
});

const getYouTubeEmbedUrl = (url) => {
  try {
    const urlObj = new URL(url);
    const videoId = urlObj.searchParams.get('v');
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  } catch (e) {
    console.error('URL de YouTube inválida:', url, e);
    return '';
  }
};

const nextSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % props.items.length;
};

const prevSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value - 1 + props.items.length) % props.items.length;
};
</script>

<style scoped>

.slideshow-container {
  max-width: 800px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  background-color: #34495e;
  color: #ecf0f1;
}

.slideshow-content {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2c3e50;
}

.slideshow-image,
.slideshow-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slideshow-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2c3e50;
}

.slideshow-info {
  padding: 1rem;
  text-align: center;
}

.slideshow-caption {
  margin: 0;
  font-size: 1.2rem;
  font-family: Arial, sans-serif;
}

.slideshow-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 1rem;
  box-sizing: border-box;
}

.slideshow-button {
  background-color: rgba(44, 62, 80, 0.7);
  border: none;
  color: #ecf0f1;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  backdrop-filter: blur(5px);
}

.slideshow-button:hover {
  background-color: rgba(52, 152, 219, 0.9);
}

@media (max-width: 600px) {
  .slideshow-button {
    font-size: 1rem;
    padding: 0.3rem 0.6rem;
  }
}
</style>