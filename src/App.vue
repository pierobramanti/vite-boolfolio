<script>
import axios from 'axios';
export default {
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
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4" v-for="proj in projects" :key="proj.id">
            <div class="card">
              <img :src="proj.image ? `http://127.0.0.1:8000/storage/${proj.image}` : 'https://picsum.photos/200/200'" alt="Project Image" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ proj.title }}</h5>
                <p class="card-text">{{ proj.description }}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Date: {{ proj.date }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  </div>
</template>

<style lang="scss">
@import './styles/generals.scss';
</style>
