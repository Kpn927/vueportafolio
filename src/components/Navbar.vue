<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="" class="brand-link">Mi Portafolio</router-link>
    </div>
    <ul class="navbar-nav">
      <li v-for="button in buttons" :key="button.id" class="nav-item">
        <router-link v-if="button.route" :to="button.route" class="nav-link">
          {{ button.name }}
        </router-link>
        <button v-else-if="button.action" @click="button.action" class="nav-link">
          {{ button.name }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  buttons: {
    type: Array,
    required: true,
    default: () => [],
    validator: (value) => value.every(
      button =>
        (button.route && typeof button.route === 'string' || button.action && typeof button.action === 'function') &&
        typeof button.name === 'string' &&
        (typeof button.id === 'string' || typeof button.id === 'number')
    ),
  },
});
</script>

<style scoped>
.navbar {
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #605c5c;
  height: 100%;  
  padding: 1rem 2.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
}

.navbar-brand .brand-link {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.navbar-nav {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  padding: 0.75rem 1.25rem;
  border-radius: 30px;
  background-color: #374759;
  transition: all 0.3s ease;
  font-family: inherit;
  font-size: inherit;
  border: none;
  cursor: pointer;
}

.nav-link:hover {
  background-color: #495d73;
  color: #fff;
}

.nav-link.router-link-active {
  background-color: #4da9ff;
  color: #fff;
  font-weight: 600;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }

  .navbar-nav {
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    gap: 0.5rem;
    align-items: flex-start;
  }

  .nav-item {
    margin-left: 0;
  }

  .nav-link {
    display: block;
    width: 100%;
    text-align: center;
  }
}
</style>
