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
          console.log(response.data)
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
        <!-- ELENCO DEI PROGETTI-->
        
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './styles/generals.scss';
</style>
