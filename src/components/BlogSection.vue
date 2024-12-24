<template>
    <section class="blog-section" id="blog" data-aos="fade-up" data-aos-duration="1500">
      <h2 class="section-title">Latest Articles</h2>
  
      <!-- Two-Column Layout -->
      <div class="blog-content">
        <!-- Left: Featured Blog Post -->
        <div class="featured-post" data-aos="slide-right" data-aos-duration="1000">
          <div class="post-image">
            <img :src="featuredPost.image" :alt="featuredPost.title" />
          </div>
          <div class="post-text">
            <h3>{{ featuredPost.title }}</h3>
            <p class="snippet">{{ featuredPost.snippet }}</p>
            <a :href="featuredPost.url" class="read-more">Read More</a>
          </div>
        </div>
  
        <!-- Right: Recent Blog Posts -->
        <div class="recent-posts" data-aos="slide-left" data-aos-duration="1000">
          <div v-for="(post, index) in recentPosts" :key="index" class="recent-post">
            <div class="recent-post-image">
              <img :src="post.image" :alt="post.title" />
            </div>
            <div class="recent-post-info">
              <h4>{{ post.title }}</h4>
              <a :href="post.url" class="read-more">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        featuredPost: {
          image: 'https://picsum.photos/id/870/536/354?grayscale&blur=2',
          title: 'Featured Blog Post Title',
          snippet: 'This is a brief snippet of the featured post...',
          url: '#featured-post',
        },
        recentPosts: [
          {
            image: 'https://picsum.photos/id/870/536/354?grayscale&blur=2',
            title: 'Recent Post 1',
            url: '#recent-post-1',
          },
          {
            image: 'https://picsum.photos/id/870/536/354?grayscale&blur=2',
            title: 'Recent Post 2',
            url: '#recent-post-2',
          },
          {
            image: 'https://picsum.photos/id/870/536/354?grayscale&blur=2',
            title: 'Recent Post 3',
            url: '#recent-post-3',
          },
          // Add more recent posts as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .blog-section {
    padding: 50px 20px;
    background: #f9f9f9;
    text-align: center;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 40px;
  }
  
  .blog-content {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
  }
  
  .featured-post {
    flex: 1 1 60%;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    transition: transform 0.3s ease;
  }
  
  .featured-post:hover {
    transform: translateY(-5px);
  }
  
  .post-image img {
    width: 100%;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }
  
  .featured-post:hover .post-image img {
    transform: scale(1.05);
  }
  
  .post-text {
    padding-top: 20px;
  }
  
  .post-text h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .snippet {
    font-size: 1rem;
    color: #555;
  }
  
  .read-more {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
  }
  
  .recent-posts {
    flex: 1 1 35%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .recent-post {
    display: flex;
    gap: 15px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 10px;
    transition: transform 0.3s ease;
  }
  
  .recent-post:hover {
    transform: translateY(-5px);
  }
  
  .recent-post-image img {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    object-fit: cover;
  }
  
  .recent-post-info h4 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
  }
  
  .recent-post-info .read-more {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
  }
  
  /* AOS animation effect */
  [data-aos="fade-up"] {
    opacity: 0;
    transition: opacity 1s ease-out;
  }
  
  [data-aos="fade-up"].aos-animate {
    opacity: 1;
  }
  
  [data-aos="slide-left"], [data-aos="slide-right"] {
    opacity: 0;
    transform: translateX(50px);
    transition: transform 1s ease-out, opacity 1s ease-out;
  }
  
  [data-aos="slide-left"].aos-animate, [data-aos="slide-right"].aos-animate {
    opacity: 1;
    transform: translateX(0);
  }
  </style>
  