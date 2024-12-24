<template>
    <section class="about" id="about" data-aos="fade-up" data-aos-duration="1500">
      <div class="about-container">
        <!-- Left Column: Profile Picture -->
        <div class="about-left" data-aos="slide-right" data-aos-duration="1000">
          <div class="profile-img">
            <img src="https://picsum.photos/536/354" alt="Profile" />
          </div>
        </div>
  
        <!-- Right Column: Text Content -->
        <div class="about-right" data-aos="slide-left" data-aos-duration="1000">
          <h2 class="about-title">About Me</h2>
          <p class="bio">
            I'm a passionate front-end developer focused on creating beautiful, responsive, and user-friendly websites.
            My goal is to craft digital experiences that provide value and delight.
          </p>
  
          <div class="skills">
            <h3>Core Skills</h3>
            <div class="skill-bar">
              <span>HTML</span>
              <div class="progress-bar html"></div>
            </div>
            <div class="skill-bar">
              <span>CSS</span>
              <div class="progress-bar css"></div>
            </div>
            <div class="skill-bar">
              <span>JavaScript</span>
              <div class="progress-bar js"></div>
            </div>
            <div class="skill-bar">
              <span>Vue.js</span>
              <div class="progress-bar vue"></div>
            </div>
          </div>
  
          <!-- Timeline for Achievements -->
          <div class="timeline">
            <h3>My Journey</h3>
            <ul>
              <li>
                <div class="timeline-point"></div>
                <div class="timeline-content">
                  <h4>2019 - Started Learning Web Development</h4>
                  <p>Started with HTML, CSS, and basic JavaScript.</p>
                </div>
              </li>
              <li>
                <div class="timeline-point"></div>
                <div class="timeline-content">
                  <h4>2020 - Built First Portfolio</h4>
                  <p>Created a personal website to showcase my skills and projects.</p>
                </div>
              </li>
              <li>
                <div class="timeline-point"></div>
                <div class="timeline-content">
                  <h4>2021 - Explored Vue.js</h4>
                  <p>Delved into Vue.js and started building dynamic web applications.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  
  export default {
    mounted() {
      AOS.init();
    },
  };
  </script>
  
  <style scoped>
  .about {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 20px;
    background-color: #f4f4f4;
    min-height: 100vh;
  }
  
  .about-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .about-left {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .profile-img {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    transition: transform 0.3s ease;
  }
  
  .profile-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .profile-img:hover {
    transform: rotate(10deg);
  }
  
  .about-right {
    width: 55%;
  }
  
  .about-title {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 20px;
  }
  
  .bio {
    font-size: 1.2rem;
    margin-bottom: 30px;
    font-weight: 300;
  }
  
  .skills {
    margin-bottom: 30px;
  }
  
  .skills h3 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 15px;
  }
  
  .skill-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .skill-bar span {
    font-size: 1.1rem;
    font-weight: 500;
  }
  
  .progress-bar {
    width: 80%;
    height: 10px;
    border-radius: 10px;
    background-color: #ddd;
    position: relative;
  }
  
  .progress-bar::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 10px;
    transition: width 1s ease-out;
  }
  
  .html::after {
    width: 90%;
    background-color: #e44d26;
  }
  
  .css::after {
    width: 85%;
    background-color: #2965f1;
  }
  
  .js::after {
    width: 75%;
    background-color: #f7df1e;
  }
  
  .vue::after {
    width: 80%;
    background-color: #42b883;
  }
  
  .timeline {
    margin-top: 40px;
  }
  
  .timeline h3 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 20px;
  }
  
  .timeline ul {
    list-style: none;
    padding-left: 0;
  }
  
  .timeline li {
    position: relative;
    padding-left: 40px;
    margin-bottom: 20px;
  }
  
  .timeline-point {
    position: absolute;
    left: 0;
    top: 0;
    width: 12px;
    height: 12px;
    background-color: #ff6b6b;
    border-radius: 50%;
  }
  
  .timeline-content h4 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 5px;
  }
  
  .timeline-content p {
    font-size: 1rem;
    color: #555;
  }
  
  @media (max-width: 768px) {
    .about-container {
      flex-direction: column;
      text-align: center;
    }
  
    .about-left,
    .about-right {
      width: 100%;
    }
  
    .profile-img {
      width: 150px;
      height: 150px;
    }
  
    .bio {
      font-size: 1rem;
    }
  
    .skills h3 {
      font-size: 1.5rem;
    }
  }
  </style>
  