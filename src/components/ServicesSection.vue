<template>
    <section class="services" id="services" data-aos="fade-up" data-aos-duration="1500">
      <div class="services-container">
        <!-- Service Cards -->
        <div class="service-card" data-aos="flip-left" data-aos-duration="1000">
          <div class="icon">
            <font-awesome-icon :icon="['fas', 'code']" />
          </div>
          <h3>Web Development</h3>
          <p>Building fast, responsive websites using the latest web technologies.</p>
        </div>
  
        <div class="service-card" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200">
          <div class="icon">
            <font-awesome-icon :icon="['fas', 'laptop-code']" />
          </div>
          <h3>UI/UX Design</h3>
          <p>Creating intuitive and aesthetically pleasing user interfaces and experiences.</p>
        </div>
  
        <div class="service-card" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="400">
          <div class="icon">
            <font-awesome-icon :icon="['fas', 'user-tie']" />
          </div>
          <h3>Consultation</h3>
          <p>Providing expert advice to help you plan and execute your digital projects.</p>
        </div>
  
        <!-- Add more cards if necessary -->
      </div>
    </section>
  </template>
  
  <script>
  import AOS from 'aos';
  import 'aos/dist/aos.css'; // AOS CSS file
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  
  export default {
    components: {
      FontAwesomeIcon
    },
    mounted() {
      AOS.init();
    },
  };
  </script>
  
  <style scoped>
  .services {
    padding: 80px 20px;
    background-color: #f4f4f4;
    text-align: center;
  }
  
  .services-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    justify-items: center;
  }
  
  .service-card {
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
    width: 100%;
    max-width: 350px;
  }
  
  .service-card .icon {
    margin-bottom: 20px;
    font-size: 3rem;
    color: #42b883;
  }
  
  .service-card h3 {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  .service-card p {
    font-size: 1rem;
    color: #555;
  }
  
  .service-card:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  .service-card:hover .icon {
    transform: scale(1.1);
  }
  
  .service-card:hover p {
    color: #42b883;
  }
  
  @media (max-width: 768px) {
    .services-container {
      grid-template-columns: 1fr 1fr;
    }
  }
  </style>
  