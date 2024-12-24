<template>
    <section class="testimonials" id="testimonials" data-aos="fade-up" data-aos-duration="1500">
      <h2 class="section-title">What People Say</h2>
  
      <!-- Carousel Container -->
      <div class="carousel">
        <div class="carousel-inner" :style="{ transform: 'translateX(-' + currentIndex * 100 + '%)' }">
          <div class="carousel-item" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-card">
              <div class="testimonial-avatar">
                <img :src="testimonial.avatar" :alt="testimonial.name" />
              </div>
              <div class="testimonial-content">
                <h3>{{ testimonial.name }}</h3>
                <p>{{ testimonial.designation }}</p>
                <p class="testimonial-text">"{{ testimonial.text }}"</p>
                <div class="stars">
                  <span v-for="star in 5" :key="star" :class="{ 'filled': star <= testimonial.rating }">★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Carousel Controls -->
        <button class="carousel-control prev" @click="prevSlide">&#10094;</button>
        <button class="carousel-control next" @click="nextSlide">&#10095;</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        testimonials: [
          {
            avatar: 'path/to/avatar1.jpg',
            name: 'John Doe',
            designation: 'CEO, Company A',
            text: 'This service was amazing! It transformed our business.',
            rating: 5,
          },
          {
            avatar: 'path/to/avatar2.jpg',
            name: 'Jane Smith',
            designation: 'Product Manager, Company B',
            text: 'A fantastic experience! Highly recommend it.',
            rating: 4,
          },
          {
            avatar: 'path/to/avatar3.jpg',
            name: 'Mark Johnson',
            designation: 'Designer, Company C',
            text: 'The design was creative and user-friendly!',
            rating: 5,
          },
          // Add more testimonials here
        ],
        currentIndex: 0,
      };
    },
    methods: {
      nextSlide() {
        if (this.currentIndex < this.testimonials.length - 1) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0; // Loop back to the first slide
        }
      },
      prevSlide() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        } else {
          this.currentIndex = this.testimonials.length - 1; // Loop back to the last slide
        }
      },
    },
    mounted() {
      // Auto-scroll carousel every 5 seconds
      setInterval(this.nextSlide, 5000);
    },
  };
  </script>
  
  <style scoped>
  .testimonials {
    padding: 50px 20px;
    background: linear-gradient(135deg, #f8f9fa, #e2e8f0);
    text-align: center;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 40px;
  }
  
  .carousel {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;
  }
  
  .carousel-inner {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-item {
    flex: 0 0 100%;
    padding: 20px;
  }
  
  .testimonial-card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
  }
  
  .testimonial-avatar img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  
  .testimonial-content h3 {
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .testimonial-content p {
    font-style: italic;
    color: #555;
  }
  
  .stars {
    margin-top: 10px;
  }
  
  .stars span {
    color: #ffd700;
    font-size: 1.2rem;
  }
  
  .stars span.filled {
    color: #ffd700;
  }
  
  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 2rem;
  }
  
  .carousel-control.prev {
    left: 10px;
  }
  
  .carousel-control.next {
    right: 10px;
  }
  
  .carousel-control:hover {
    background: rgba(0, 0, 0, 0.7);
  }
  </style>
  