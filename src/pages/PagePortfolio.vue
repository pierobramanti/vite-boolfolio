<script>
import ProjectCard from '../components/ProjectCard.vue';


import axios from 'axios';

export default {
  components:{
    ProjectCard,

  },
  data() {
    return {
      projects: [],
      last_page: null,
      current_page:null,
    }
  },
  created() {
    this.getAllProjects(); 
  },
  methods: {
    getAllProjects() {  
      axios.get('http://127.0.0.1:8000/api/projects')  
        .then(response => {
          this.projects = response.data.results.data; 
          this.last_page = response.data.results.last_page;
          this.current_page = response.data.results.current_page;
        });
    },
    goToPage(page){
      axios.get('http://127.0.0.1:8000/api/projects?page=' + page)  
        .then(response => {
          this.projects = response.data.results.data; 
          this.current_page = response.data.results.current_page;
        });
    }
  }
}
</script>

<template>

  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">Elenco Progetti</h1>
      </div>
      <div class="col-12">
        <!-- ELENCO DEI PROGETTI -->
        <div class="row gy-4">
          <ProjectCard v-for="proj in projects" :key="proj.id" :project="proj"/>
        </div>
      </div>  
      <nav aria-label="Page navigation example" class="mt-4">
        <ul class="pagination d-flex justify-content-center">
          <li class="page-item"><a class="page-link" href="#" @click="goToPage(current_page - 1)">Previous</a></li>
          <li class="page-item" v-for="i in last_page"><a class="page-link" href="#" @click="goToPage(i)">{{i}}</a></li>
          <li class="page-item"><a class="page-link" href="#" @click="goToPage(current_page + 1)">Next</a></li>
        </ul>
      </nav>    
    </div>
</div>

</template>

<style lang="scss">

</style>
