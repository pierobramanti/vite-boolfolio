<script>
import ProjectCard from './components/ProjectCard.vue';

import axios from 'axios';
export default {
  components:{
    ProjectCard
  },
  data() {
    return {
      projects: []
    }
  },
  created() {
    this.getAllProjects(); 
  },
  methods: {
    getAllProjects() {  
      axios.get('http://127.0.0.1:8000/api/projects')  
        .then(response => {
          this.projects = response.data.results; 
        });
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center"> Elenco Progetti</h1>
      </div>
      <div class="col-12">
        <!-- ELENCO DEI PROGETTI -->
        <div class="row gy-4">
          <ProjectCard  v-for="proj in projects" :key="proj.id" :project="proj"/>
        </div>
      </div>      
    </div>
  </div>
</template>

<style lang="scss">
@import './styles/generals.scss';
</style>
