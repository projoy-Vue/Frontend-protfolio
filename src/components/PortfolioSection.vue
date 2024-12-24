<template>
    <section class="portfolio" id="portfolio" data-aos="fade-up" data-aos-duration="1500">
        <!-- Filter Bar -->
        <div class="filter-bar">
            <button v-for="category in categories" :key="category" @click="filterProjects(category)"
                :class="{ active: currentCategory === category }">
                {{ category }}
            </button>
        </div>

        <!-- Masonry Grid Layout -->
        <div class="portfolio-grid">
            <div v-for="project in filteredProjects" :key="project.id" class="portfolio-item" data-aos="fade-up"
                data-aos-duration="1000">
                <div class="portfolio-item-thumbnail">
                    <img :src="project.thumbnail" :alt="project.title" />
                    <div class="overlay">
                        <h3>{{ project.title }}</h3>
                        <p>{{ project.tags.join(', ') }}</p>
                        <button @click="openModal(project)">View More</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div v-if="modalOpen" class="modal-overlay" @click="closeModal">
            <div class="modal-content" @click.stop>
                <h2>{{ modalProject.title }}</h2>
                <img :src="modalProject.thumbnail" :alt="modalProject.title" />
                <p>{{ modalProject.description }}</p>
                <div class="tech-stack">
                    <span v-for="tag in modalProject.tags" :key="tag">{{ tag }}</span>
                </div>
                <button @click="closeModal">Close</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            categories: ['All', 'Web Development', 'UI Design', 'Mobile Apps'],
            currentCategory: 'All',
            projects: [
                {
                    "id": 1,
                    "title": "Vue.js Project",
                    "description": "A web application built with Vue.js.",
                    "tags": ["Vue.js", "Web Development"],
                    "thumbnail": "https://picsum.photos/536/354",
                    "category": "Web Development"
                },
                {
                    "id": 2,
                    "title": "UI Design Project",
                    "description": "A modern UI design for a mobile app.",
                    "tags": ["UI Design", "Figma"],
                    "thumbnail": "https://picsum.photos/536/354",
                    "category": "UI Design"
                },
                {
                    "id": 3,
                    "title": "React Project",
                    "description": "A complex React-based project with advanced features.",
                    "tags": ["React", "Web Development"],
                    "thumbnail": "https://picsum.photos/536/354",
                    "category": "Web Development"
                },
                {
                    "id": 4,
                    "title": "Python Data Analysis",
                    "description": "Data analysis and visualization using Python.",
                    "tags": ["Python", "Data Analysis"],
                    "thumbnail": "https://picsum.photos/536/354",
                    "category": "Data Science"
                },
                {
                    "id": 5,
                    "title": "E-commerce Platform",
                    "description": "A scalable e-commerce application built with Next.js.",
                    "tags": ["Next.js", "Web Development"],
                    "thumbnail": "https://picsum.photos/536/354",
                    "category": "Web Development"
                },
                {
                    "id": 6,
                    "title": "Dashboard UI Design",
                    "description": "A clean and professional dashboard UI concept.",
                    "tags": ["UI Design", "Adobe XD"],
                    "thumbnail": "https://picsum.photos/536/354",
                    "category": "UI Design"
                },
                {
                    "id": 7,
                    "title": "Machine Learning Model",
                    "description": "A machine learning model for predicting customer churn.",
                    "tags": ["Machine Learning", "Python"],
                    "thumbnail": "https://picsum.photos/536/354",
                    "category": "Data Science"
                },
                {
                    "id": 8,
                    "title": "Responsive Website Design",
                    "description": "A fully responsive and accessible website.",
                    "tags": ["HTML", "CSS", "JavaScript"],
                    "thumbnail": "https://picsum.photos/536/354",
                    "category": "Web Development"
                },
                {
                    "id": 9,
                    "title": "Mobile App UI Kit",
                    "description": "A complete UI kit for designing mobile apps.",
                    "tags": ["UI Design", "Sketch"],
                    "thumbnail": "https://picsum.photos/536/354",
                    "category": "UI Design"
                },
                {
                    "id": 10,
                    "title": "Data Visualization Dashboard",
                    "description": "An interactive data visualization dashboard using Tableau.",
                    "tags": ["Data Visualization", "Tableau"],
                    "thumbnail": "https://picsum.photos/536/354",
                    "category": "Data Science"
                }
                // More projects...
            ],
            modalOpen: false,
            modalProject: {},
        };
    },
    computed: {
        filteredProjects() {
            return this.currentCategory === 'All'
                ? this.projects
                : this.projects.filter(project => project.category === this.currentCategory);
        },
    },
    methods: {
        filterProjects(category) {
            this.currentCategory = category;
        },
        openModal(project) {
            this.modalProject = project;
            this.modalOpen = true;
        },
        closeModal() {
            this.modalOpen = false;
        },
    },
};
</script>

<style scoped>
/* Filter Bar */
.portfolio{
    padding: 40px 20px;
}
.filter-bar {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}

.filter-bar button {
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    background-color: #ddd;
    cursor: pointer;
}

.filter-bar button.active {
    background-color: #42b883;
    color: white;
}

/* Masonry Grid Layout */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.portfolio-item {
    position: relative;
    background-color: #f9f9f9;
    border-radius: 8px;
    overflow: hidden;
}

.portfolio-item-thumbnail {
    position: relative;
    overflow: hidden;
}

.portfolio-item-thumbnail img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
}

.portfolio-item-thumbnail:hover img {
    transform: scale(1.05);
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.portfolio-item-thumbnail:hover .overlay {
    opacity: 1;
}

.overlay h3 {
    margin: 10px 0;
}

.overlay p {
    margin: 5px 0;
}

.overlay button {
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #42b883;
    color: white;
    border: none;
    cursor: pointer;
}

/* Modal Styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}

.modal-content {
    background-color: white;
    padding: 20px;
    max-width: 800px;
    width: 100%;
    border-radius: 8px;
    text-align: center;
}

.modal-content img {
    max-width: 100%;
    margin: 20px 0;
}

.modal-content .tech-stack {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.modal-content .tech-stack span {
    background-color: #42b883;
    color: white;
    padding: 5px 10px;
    border-radius: 20px;
}

.modal-content button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #f44336;
    color: white;
    border: none;
    cursor: pointer;
}
</style>