<template>
  <div class="front-page">
    <Navbar :buttons="navButtons" />
    
    <main class="content">
      <h1 v-if="isLoggedIn">¡Bienvenido de nuevo!</h1>
      <h1 v-else>¡Bienvenido a nuestra aplicación!</h1>
      <p>Esta es la página principal. Usa la barra de navegación de arriba para explorar.</p>
      
      <button v-if="isLoggedIn" @click="goToPortfolio" class="portfolio-button">
        Mi Portafolio
      </button>
    </main>

    <Footer 
      email="danielsosapenso@gmail.com"
      phone="+584246011527"
      instagram="https://www.instagram.com/kyu_kur/"
      github="https://github.com/Kpn927/"
      copyright="Mi portafolio, hecho por Daniel Sosa."
      imagenpath="teto.png"
    />

  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoggedIn = ref(false);

onMounted(() => {
  if (localStorage.getItem('user_session')) {
    isLoggedIn.value = true;
  }
});

const goToPortfolio = () => {
  if (router) {
    router.push('/portafolio');
  } else {
    console.error('Error: El objeto del enrutador no está disponible.');
  }
};

const handleLogout = () => {
  localStorage.removeItem('user_session');
  isLoggedIn.value = false;
  
  if (router) {
    router.push('/login');
  } else {
    console.error('Error: El objeto del enrutador no está disponible. Asegúrate de que Vue Router esté instalado en tu aplicación principal.');
  }
};

const navButtons = computed(() => {
  if (isLoggedIn.value) {
    return [
      { id: 'portfolio', name: 'Mi Portafolio', route: '/portafolio' },
      { id: 'logout', name: 'Cerrar Sesión', action: handleLogout },
    ];
  } else if (router.currentRoute.value.path === '/portafolio') {
    return [
      { id: 'home', name: 'Inicio', route: '/' },
      { id: 'login', name: 'Login', route: '/login' },
    ];
  } else {
    return [
      { id: 'login', name: 'Login', route: '/login' },
    ];
  }
});
</script>

<style scoped>
.front-page {
  display: flex;
  flex-direction: column;
  min-height: 98vh; 
}

.content {
  flex-grow: 1;
  padding: 2rem;
  text-align: center;
}

.portfolio-button {
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #35393d;
  color: #fff;
  margin-top: 0.4rem;
  font-family: 'Press Start 2P', cursive;
}

.portfolio-button:hover {
  background-color: #69b8ff;
}
</style>
