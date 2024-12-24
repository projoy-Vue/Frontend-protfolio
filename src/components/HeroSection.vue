<template>
    <section class="hero" data-aos="fade-up" data-aos-duration="1500">
      <div class="hero-content">
        <h1 class="hero-title" data-aos="fade-up" data-aos-delay="200">
          I’m [Your Name], a Creative Front-End Developer.
        </h1>
        <p class="hero-subtext" data-aos="fade-up" data-aos-delay="400">
          Crafting visually stunning and functional websites.
        </p>
        <div class="cta-buttons">
          <router-link to="/portfolio" class="btn-primary" data-aos="fade-up" data-aos-delay="600">View Portfolio</router-link>
          <router-link to="/contact" class="btn-secondary" data-aos="fade-up" data-aos-delay="800">Get in Touch</router-link>
        </div>
      </div>
      <div class="floating-elements">
        <div class="element-code" data-aos="fade-up" data-aos-duration="1000"></div>
        <div class="element-shape" data-aos="fade-up" data-aos-duration="1200"></div>
      </div>
    </section>
  </template>
  
  <script >
  // Import AOS library
import AOS from 'aos';
import 'aos/dist/aos.css';  // Don't forget to import the AOS CSS
  export default {
    mounted() {
      // Initialize AOS animation library
      AOS.init();
    },
  };
  </script>
  
  <style scoped>
  .hero {
    position: relative;
    height: 100vh;
    background-image: url('https://picsum.photos/536/354'); /* Or a video */
    background-position: center;
    background-size: cover;
    background-attachment: fixed; /* Parallax effect */
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    overflow: hidden;
  }
  
  .hero-content {
    z-index: 2;
    max-width: 900px;
    padding: 20px;
  }
  
  .hero-title {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  
  .hero-subtext {
    font-size: 1.2rem;
    margin-bottom: 30px;
    font-weight: 300;
  }
  
  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .cta-buttons .btn-primary,
  .cta-buttons .btn-secondary {
    padding: 12px 25px;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 30px;
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  
  .cta-buttons .btn-primary {
    background-color: #ff6b6b;
    color: #fff;
  }
  
  .cta-buttons .btn-primary:hover {
    background-color: #ff3b3b;
    transform: scale(1.1);
  }
  
  .cta-buttons .btn-secondary {
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
  }
  
  .cta-buttons .btn-secondary:hover {
    background-color: #fff;
    color: #333;
    transform: scale(1.1);
  }
  
  .floating-elements {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    pointer-events: none;
  }
  
  .element-code {
    position: absolute;
    top: 20%;
    left: 10%;
    width: 150px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    animation: float 6s ease-in-out infinite;
  }
  
  .element-shape {
    position: absolute;
    top: 40%;
    right: 15%;
    width: 100px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    animation: float 8s ease-in-out infinite;
  }
  
  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem;
    }
  
    .hero-subtext {
      font-size: 1rem;
    }
  
    .cta-buttons {
      flex-direction: column;
    }
  
    .cta-buttons .btn-primary,
    .cta-buttons .btn-secondary {
      width: 100%;
      margin-bottom: 10px;
    }
  }
  </style>
  