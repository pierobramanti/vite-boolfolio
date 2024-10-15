<script>
export default {
    name: 'ProjectCard',
    props:{
        project:Object
    }
}
</script>

<template>
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
          <img :src="project.image ? `http://127.0.0.1:8000/storage/${project.image}` : 'https://picsum.photos/200/200'" alt="Project Image" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Date: {{ project.date }}</small>
          </div>
        </div>
      </div>
</template>

<style scoped>
    
</style>