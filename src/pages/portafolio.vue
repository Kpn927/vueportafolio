<template>
  <div class="portfolio-page">
    <Navbar :buttons="navButtons" />
    <main class="content">
      <h1>Mi Portafolio</h1>
      <p>Aquí se aprecian mis habilidades y experiencia. Esta es una página simple de ejemplo.</p>
      <section class="skills-section">
        <h2>Mis Habilidades</h2>
        <div class="pie-chart-wrapper">
          <PieChart :skills="skillsData" :size="300" />
        </div>
      </section>
      
      <div class="portfolio-items">
        <div v-for="(project, index) in projectsData" :key="index" class="project-container">
          <Slideshow :items="project.slideshowItems" />
          <button class="project-info-button" @click="openPopup(project)">
            {{ project.infoButtonText }}
          </button>
        </div>
      </div>
    </main>

    <ProjectPopup 
      v-if="showPopup"
      :project="selectedProject"
      @close="closePopup"
    />

    <Footer 
      email="danielsosapenso@gmail.com"
      phone="+584246011527"
      instagram="https://www.instagram.com/kyu_kur/"
      github="https://github.com/Kpn927/"
      copyright="Mi portafolio, hecho por Daniel Sosa."
      imagenpath="teto.png"
      imageRoute="/teto"
    />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Slideshow from '../components/slideshow.vue';
import PieChart from '../components/graph.vue'; 
import ProjectPopup from '../components/popup.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoggedIn = ref(true);
const showPopup = ref(false);
const selectedProject = ref(null);

const handleLogout = () => {
  localStorage.removeItem('user_session');
  isLoggedIn.value = false;
  
  if (router) {
    router.push('/login');
  } else {
    console.error('Error: El objeto del enrutador no est\xE1 disponible.');
  }
};

const openPopup = (project) => {
  selectedProject.value = project;
  showPopup.value = true;
};

const closePopup = () => {
  showPopup.value = false;
  selectedProject.value = null;
};

const projectsData = [
  {
    slideshowItems: [
      { type: 'image', src: 'https://placehold.co/800x450/ecf0f1/2c3e50?text=Proyecto+Principal' },
      { type: 'youtube', src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'image', src: 'https://placehold.co/800x450/f39c12/ecf0f1?text=Imagen+del+Proyecto+Principal' },
    ],
    infoButtonText: 'Información del Proyecto Principal',
    description: 'Este es el proyecto principal, un ejemplo de mis habilidades más destacadas. Utiliza Vue.js, Node.js y MongoDB.'
  },
  {
    slideshowItems: [
      { type: 'image', src: 'https://placehold.co/800x450/5E96C3/FFFFFF?text=Proyecto+A' },
      { type: 'youtube', src: 'https://www.youtube.com/watch?v=8-Y7p2y_9iE' },
    ],
    infoButtonText: 'Información del Proyecto A',
    description: 'El proyecto A es una aplicación web para gestión de tareas. Se desarrolló con React y Firebase para la base de datos.'
  },
  {
    slideshowItems: [
      { type: 'image', src: 'https://placehold.co/800x450/F85E00/FFFFFF?text=Proyecto+B' },
      { type: 'image', src: 'https://placehold.co/800x450/A6B7FF/FFFFFF?text=Imagen+del+Proyecto+B' },
    ],
    infoButtonText: 'Información del Proyecto B',
    description: 'El proyecto B es un e-commerce simplificado. Se implementó con Django y PostgreSQL para el manejo de productos y usuarios.'
  },
  {
    slideshowItems: [
      { type: 'image', src: 'https://placehold.co/800x450/2E8B57/FFFFFF?text=Proyecto+C' },
    ],
    infoButtonText: 'Información del Proyecto C',
    description: 'El proyecto C es una herramienta de visualización de datos. Se usaron bibliotecas como D3.js y Chart.js para crear gráficos interactivos.'
  },
  {
    slideshowItems: [
      { type: 'image', src: 'https://placehold.co/800x450/B8B8B8/333333?text=Proyecto+D' },
      { type: 'youtube', src: 'https://www.youtube.com/watch?v=84xI8jY7G_g' },
    ],
    infoButtonText: 'Información del Proyecto D',
    description: 'El proyecto D es un blog personal. Se construyó con Gatsby y GraphQL para una experiencia de usuario rápida y fluida.'
  },
  {
    slideshowItems: [
      { type: 'image', src: 'https://placehold.co/800x450/FFD700/000000?text=Proyecto+E' },
    ],
    infoButtonText: 'Información del Proyecto E',
    description: 'El proyecto E es un juego sencillo basado en el navegador. Se creó usando JavaScript puro y la API de Canvas.'
  },
];

const navButtons = computed(() => {
  return [
    { id: 'home', name: 'Inicio', route: '/' },
    { id: 'logout', name: 'Cerrar Sesi\xF3n', action: handleLogout },
  ];
});

const skillsData = [
  { title: 'Vue.js', percentage: 90 },
  { title: 'JavaScript', percentage: 85 },
  { title: 'HTML/CSS', percentage: 95 },
  { title: 'Node.js', percentage: 70 },
  { title: 'MongoDB', percentage: 65 },
];
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.portfolio-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
  padding: 2rem;
  text-align: center;
}

/* Estilos de la secci\xF3n de habilidades para dar espacio al gr\xE1fico */
.skills-section {
  margin-bottom: 3rem;
}

.pie-chart-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.portfolio-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.project-info-button {
  background-color: #2c3e50;
  color: #ecf0f1;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.project-info-button:hover {
  background-color: #3498db;
}
</style>
