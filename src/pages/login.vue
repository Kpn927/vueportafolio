<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin" class="login-form">
      <h2>Iniciar Sesión</h2>

      <div class="form-group">
        <label for="username">Usuario:</label>
        <input type="text" id="username" v-model="username" required>
      </div>

      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required>
      </div>

      <button type="submit" class="login-button">Iniciar Sesión</button>
      <button type="button" @click="goToHome" class="back-button">Volver al inicio</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const isLoggedIn = ref(false);

const router = useRouter();

onMounted(() => {
  if (localStorage.getItem('user_session')) {
    isLoggedIn.value = true;
  }
});

const handleLogin = () => {
  const hardcodedUsername = 'user';
  const hardcodedPassword = 'password';

  if (username.value === hardcodedUsername && password.value === hardcodedPassword) {
    console.log('Inicio de sesión exitoso. Redirigiendo...');
    localStorage.setItem('user_session', 'simulated_token_123');

    isLoggedIn.value = true;
    router.push('/');
  } else {
    console.log('Credenciales incorrectas');
    alert('Credenciales incorrectas. Intenta con "user" y "password".');
  }
};

const goToHome = () => {
  router.push('/');
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  color: #000000; 
  font-family: Arial, sans-serif;

}

.login-form {
  width: 100%;
  max-width: 400px;
  min-height: 200px;
  max-height: 360px;
  padding: 2rem;
  background-color: #444;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* Sombra más pronunciada */
  color: #fff;
  border: 1px solid #C9202F; /* Un borde sutil para destacar el formulario */
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #C9202F; /* Color principal de Teto para el título */
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  max-width: 374px;
  padding: 0.75rem;
  border-radius: 5px;
  border: 1px solid #666;
  background-color: #555;
  color: #fff;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus,
input[type="password"]:focus {
  border-color: #C9202F; /* Destaca el input cuando está activo */
  outline: none; /* Elimina el contorno predeterminado del navegador */
}

.login-button, .back-button { 
  display: block;
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
}

.login-button:hover {
  background-color: #E64B4B;
  color: #fff;
}

.login-button {
  background-color: #C9202F;
  color: #fff;
}

.back-button {
  background-color: #6c757d;
  color: #fff;
}

.back-button:hover {
  background-color: #5a6268;
}
</style>