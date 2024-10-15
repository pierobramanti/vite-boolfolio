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
          this.projects=response.data.results
        })
        
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
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img src="" alt="Project Image" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">titolo</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste hic, vitae maxime porro iusto eum iure. Minima distinctio expedita ea, labore necessitatibus, dolores atque nemo repellendus fugit quisquam numquam possimus.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted"></small>
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
