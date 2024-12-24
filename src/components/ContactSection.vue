<template>
    <section class="contact-section" id="contact" data-aos="fade-up" data-aos-duration="1500">
      <h2 class="section-title">Get in Touch</h2>
  
      <div class="contact-content">
        <!-- Left: Contact Form -->
        <form class="contact-form" @submit.prevent="submitForm" data-aos="fade-in" data-aos-duration="1000">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" placeholder="Your Name" required />
  
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" placeholder="Your Email" required />
  
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" placeholder="Your Message" required></textarea>
  
          <label for="inquiry">Inquiry Type</label>
          <select id="inquiry" v-model="form.inquiryType" required>
            <option value="" disabled>Select Inquiry Type</option>
            <option value="General">General</option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
          </select>
  
          <button type="submit" class="submit-button" @mouseover="hoverSubmitButton" @mouseleave="resetSubmitButton">Submit</button>
        </form>
  
        <!-- Right: Contact Details -->
        <div class="contact-details" data-aos="fade-in" data-aos-duration="1000">
          <ul>
            <li><i class="fas fa-envelope"></i> example@email.com</li>
            <li><i class="fas fa-phone"></i> +123 456 7890</li>
            <li><i class="fas fa-map-marker-alt"></i> 123 Main St, City, Country</li>
          </ul>
  
          <!-- Optional Embedded Map -->
          <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=..." width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ContactSection',
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: '',
          inquiryType: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Handle form submission here (e.g., send an email or save the data)
        console.log('Form submitted:', this.form);
        alert('Thank you for your message!');
        // Reset the form after submission
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
        this.form.inquiryType = '';
      },
      hoverSubmitButton() {
        const button = document.querySelector('.submit-button');
        button.classList.add('hovered');
      },
      resetSubmitButton() {
        const button = document.querySelector('.submit-button');
        button.classList.remove('hovered');
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-section {
    padding: 50px 40px;
    background-color: #f4f4f4;
    text-align: center;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 40px;
  }
  
  .contact-content {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    flex-wrap: wrap;
  }
  
  .contact-form {
    flex: 1 1 45%;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .contact-form label {
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  .contact-form input,
  .contact-form textarea,
  .contact-form select {
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }
  
  .contact-form textarea {
    resize: vertical;
    min-height: 150px;
  }
  
  .submit-button {
    padding: 12px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  
  .submit-button.hovered {
    transform: scale(1.05);
  }
  
  .contact-details {
    flex: 1 1 45%;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .contact-details ul {
    list-style-type: none;
    padding: 0;
  }
  
  .contact-details li {
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .contact-details li i {
    font-size: 1.5rem;
    color: #007bff;
  }
  
  .map-container {
    margin-top: 20px;
  }
  
  .map-container iframe {
    border-radius: 8px;
    width: 100%;
  }
  
  /* AOS animation effects */
  [data-aos="fade-up"] {
    opacity: 0;
    transition: opacity 1s ease-out;
  }
  
  [data-aos="fade-up"].aos-animate {
    opacity: 1;
  }
  
  [data-aos="fade-in"] {
    opacity: 0;
    transition: opacity 1s ease-out;
  }
  
  [data-aos="fade-in"].aos-animate {
    opacity: 1;
  }
  
  [data-aos="fade-in"] {
    transform: translateY(20px);
    transition: transform 1s ease-out;
  }
  </style>
  