<template>
  <footer class="footer">
    <div class="image-container">
      <img :src="imagenpath" alt="Mascota del Footer" class="footer-image" />
    </div>
    
    <div class="footer-content">
      <div class="contact-info">
        <a v-if="email" :href="`mailto:${email}`" class="contact-link">
          <i class="fas fa-envelope footer-icon"></i>
          <span class="contact-text">{{ email }}</span>
        </a>
        <a v-if="phone" :href="`tel:${phone}`" class="contact-link">
          <i class="fas fa-phone-alt footer-icon"></i>
          <span class="contact-text">{{ phone }}</span>
        </a>
      </div>

      <div class="social-media">
        <a v-if="instagram" :href="instagram" target="_blank" rel="noopener noreferrer" class="social-link">
          <i class="fab fa-instagram footer-icon"></i>
        </a>
        <a v-if="github" :href="github" target="_blank" rel="noopener noreferrer" class="social-link">
          <i class="fab fa-github footer-icon"></i>
        </a>
      </div>
    </div>
    <div class="copyright">
      <span>&copy; {{ new Date().getFullYear() }} {{ copyright }}</span>
    </div>
  </footer>
</template>

<script setup>

const props = defineProps({
  email: {
    type: String,
    required: false,
    default: '',
  },
  phone: {
    type: String,
    required: false,
    default: '',
  },
  instagram: {
    type: String,
    required: false,
    default: '',
  },
  github: {
    type: String,
    required: false,
    default: '',
  },
  copyright:{
    type: String,
    required: false,
    default: 'Mi App. Todos los derechos reservados.',
  },
  imagenpath:{
    type: String,
    required: false,
    default:'/TETO.PNG',
  },
});
</script>

<style scoped>
.footer {
  background-color: #605c5c;
  color: #ecf0f1;
  padding: 1rem;
  margin-top: auto; 
  text-align: center;
  position: relative;
  padding-top: 1rem;
}

.image-container {
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.footer-image {
  width: 120px;
  height: auto;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.contact-info, .social-media {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.contact-link, .social-link {
  color: #ecf0f1;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
}

.contact-link:hover, .social-link:hover {
  color: #3498db;
}

.footer-icon {
  font-size: 1.2rem;
  margin-right: 0.5rem;
}

.social-link .footer-icon {
  margin-right: 0;
}

.contact-text {
  font-size: 1rem;
}

.copyright {
  font-size: 0.8rem;
  color: #bdc3c7;
  border-top: 1px solid #4a667a;
  padding-top: 1.5rem;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>
