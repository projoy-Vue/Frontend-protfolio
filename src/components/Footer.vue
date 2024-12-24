<template>
    <footer class="footer" data-aos="fade-up">
      <div class="footer-content">
        <div class="footer-left">
          <div class="logo">
            <img src="@/assets/logo.svg" alt="Logo" />
          </div>
          <p class="tagline">Crafting the Future of Web Development</p>
        </div>
        <div class="footer-center">
          <ul class="quick-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
          </ul>
        </div>
        <div class="footer-right">
          <div class="social-icons">
            <a href="https://facebook.com" target="_blank" class="social-icon">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" class="social-icon">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
          <div class="newsletter">
            <p>Subscribe to our newsletter:</p>
            <form @submit.prevent="subscribe">
              <input
                type="email"
                v-model="email"
                placeholder="Your email"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <button class="scroll-top-btn" @click="scrollToTop">
        <i class="fas fa-chevron-up"></i>
      </button>
    </footer>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Footer',
    setup() {
      const email = ref('');
  
      const subscribe = () => {
        console.log(`Subscribed with email: ${email.value}`);
        email.value = ''; // Clear input field after submission
      };
  
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  
      return {
        email,
        subscribe,
        scrollToTop
      };
    }
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #2c3e50;
    color: white;
    padding: 40px;
    position: relative;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .footer-left, .footer-center, .footer-right {
    flex: 1;
  }
  
  .logo img {
    max-width: 150px;
  }
  
  .tagline {
    font-style: italic;
    margin-top: 10px;
  }
  
  .quick-links {
    list-style: none;
    padding: 0;
  }
  
  .quick-links li {
    margin-bottom: 10px;
  }
  
  .quick-links li a {
    color: #ecf0f1;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .quick-links li a:hover {
    color: #3498db;
  }
  
  .social-icons {
    display: flex;
    gap: 20px;
  }
  
  .social-icon {
    color: #ecf0f1;
    font-size: 24px;
    transition: color 0.3s;
  }
  
  .social-icon:hover {
    color: #3498db;
  }
  
  .newsletter p {
    margin-bottom: 10px;
  }
  
  .newsletter form {
    display: flex;
  }
  
  .newsletter input {
    padding: 10px;
    border: none;
    border-radius: 5px;
    flex-grow: 1;
  }
  
  .newsletter button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    margin-left: 10px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .newsletter button:hover {
    background-color: #2980b9;
  }
  
  .scroll-top-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 24px;
    display: none;
    transition: opacity 0.3s;
  }
  
  .scroll-top-btn:hover {
    background-color: #2980b9;
  }
  
  .scroll-top-btn.show {
    display: block;
  }
  
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      text-align: center;
    }
  
    .footer-left, .footer-center, .footer-right {
      flex: none;
      margin-bottom: 20px;
    }
  }
  </style>
  
  