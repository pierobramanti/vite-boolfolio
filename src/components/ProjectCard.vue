<script>
export default {
    name: 'ProjectCard',
    props:{
        project: Object
    },
    methods:{
        truncateText(text){
            return text.substr(0, 50) + '...';  
        }
    }
}
</script>

<template>
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
          <img :src="project.image ? `http://127.0.0.1:8000/storage/${project.image}` : 'https://picsum.photos/200/200'" alt="Project Image" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p v-if="project.type"><strong>Type:</strong> {{ project.type.name }}</p>
            <p class="card-text">{{ truncateText(project.description) }}</p> 
            <ul v-if="project.technologies" class="list-unstyled d-flex flex-wrap gap-2">
                <li v-for="tech in project.technologies" :key="tech.id" class="badge bg-primary">
                  {{ tech.name }}
                </li>
            </ul>
          </div>
          <div class="card-footer">
            <small class="text-muted">Date: {{ project.date }}</small>
          </div>
        </div>
    </div>
</template>

<style scoped>
    
</style>
