<template>
  <div class="portfolio-page">
    <Navbar :buttons="navButtons" />
    <main class="content">
      <h1>Mi Portafolio</h1>
      <p>Aquí puedes mostrar tus proyectos, habilidades y experiencia. Esta es una página simple de ejemplo.</p>
      <div class="portfolio-items">
        <div class="item">
          <h2>Proyecto 1</h2>
          <p>Descripción breve del proyecto 1. ¡Puedes incluir enlaces, imágenes o más detalles aquí!</p>
        </div>
        <div class="item">
          <h2>Proyecto 2</h2>
          <p>Descripción breve del proyecto 2. Destaca lo que hiciste y las tecnologías que usaste.</p>
        </div>
        <div class="item">
          <h2>Proyecto 3</h2>
          <p>Descripción breve del proyecto 3. Destaca lo que hiciste y las tecnologías que usaste.</p>
        </div>
        <div class="item">
          <h2>Proyecto 2</h2>
          <p>Descripción breve del proyecto 2. Destaca lo que hiciste y las tecnologías que usaste.</p>
        </div>
      </div>
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
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoggedIn = ref(true);

const handleLogout = () => {
  localStorage.removeItem('user_session');
  isLoggedIn.value = false;
  
  if (router) {
    router.push('/login');
  } else {
    console.error('Error: El objeto del enrutador no está disponible.');
  }
};

const navButtons = computed(() => {
  return [
    { id: 'home', name: 'Inicio', route: '/' },
    { id: 'logout', name: 'Cerrar Sesión', action: handleLogout },
  ];
});
</script>

<style scoped>

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

.portfolio-items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
}

.item {
  background-color: #000000;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

p {
  line-height: 1.6;
}
</style>
