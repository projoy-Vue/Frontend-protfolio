<template>
    <header :class="{'sticky': isSticky}">
      <nav class="navbar">
        <div class="logo">
          <router-link to="/">My Portfolio</router-link>
        </div>
        <ul :class="['nav-links', { 'active': isMenuOpen }]">
        <router-link to="#home" @click.native="scrollTo('home')">Home</router-link>
        <router-link to="#about" @click.native="scrollTo('about')">About</router-link>
        <router-link to="#portfolio" @click.native="scrollTo('portfolio')">Portfolio</router-link>
        <router-link to="#services" @click.native="scrollTo('services')">Services</router-link>
        <router-link to="#contact" @click.native="scrollTo('contact')">Contact</router-link>
        </ul>
        <div class="menu-toggle" @click="toggleMenu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
        isSticky: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      scrollTo (sectionId) {
          const section = document.getElementById(sectionId);
          section.scrollIntoView({ behavior: 'smooth' });
      },
      handleScroll() {
        if (window.scrollY > 50) {
          this.isSticky = true;
        } else {
          this.isSticky = false;
        }
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #1a1a1a;
    color: #fff;
    position: relative;
    z-index: 10;
    transition: box-shadow 0.3s ease;
  }
  
  .navbar.sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
z-index: 100;
  }
  
  .navbar .logo {
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: 1px;
    color: #fff;
  }
  .navbar .logo a {
    text-decoration: none;
    color: #fff;
  }
  
  .navbar .nav-links {
    list-style-type: none;
    display: flex;
    gap: 3rem;
  }
  
  .navbar .nav-links li {
    font-size: 1rem;
    position: relative;
  }
  
  .navbar .nav-links a {
    color: #fff;
    text-decoration: none;
    padding: 0.5rem;
    transition: color 0.3s ease, transform 0.3s ease;
    display: inline-block;
  }
  
  .navbar .nav-links a:hover {
    color: #61dafb;
    transform: translateY(-2px);
  }
  
  .navbar .menu-toggle {
    display: none;
    flex-direction: column;
    gap: 0.3rem;
    cursor: pointer;
  }
  
  .navbar .menu-toggle .bar {
    width: 30px;
    height: 3px;
    background-color: #fff;
    transition: transform 0.3s ease;
  }
  
  .navbar .nav-links.active {
    display: block;
  }
  
  .navbar .nav-links.active li {
    margin: 1rem 0;
  }
  
  @media (max-width: 768px) {
    .navbar .nav-links {
      display: none;
      position: absolute;
      top: 60px;
      left: 0;
      background-color: #1a1a1a;
      width: 100%;
      height: 100vh;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      text-align: center;
    }
  
    .navbar .menu-toggle {
      display: flex;
    }
  
    .navbar .nav-links.active {
      display: flex;
    }
  }
  </style>
  