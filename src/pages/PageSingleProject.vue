<script>
import axios from 'axios';
import { store } from '../store.js'; 

export default {
    data(){
        return{
            store,
            project: null,
        }
    },
    methods:{
        getProject(){
            axios.get(`${store.url}/projects/${this.$route.params.slug}`).then(res => {  
                if(res.data.success){
                    this.project = res.data.results;
                }
                else{
                  
                }
            });
        }
    },
    created(){
        this.getProject();
    }
}
</script>

<template>
   <div class="container mt-5">
    <div class="row d-flex align-items-start">
        <div class="col-md-4">
            <img class="img-fluid" :src="project.image != null ? 'http://127.0.0.1:8000/storage/' + project.image : 'https://picsum.photos/200/200'" alt="Immagine del progetto">
        </div>
        <div class="col-md-8">
            <div class="content p-4 ">
                <h1 class="display-4">{{ project.title }}</h1>
                <p><strong>Tipologia:</strong> 
                    <span class="badge bg-info text-dark">{{ project.type != null ? project.type.name : 'nessuna tipologia' }}</span>
                </p>
                <p v-if="project.technologies.length > 0">
                    <strong>Tecnologie:</strong>
                    <span class="badge bg-secondary me-2" v-for="tech in project.technologies">{{ tech.name }}</span>
                </p>
                <p v-else>
                    <span class="text-muted">nessuna tecnologia</span>
                </p>
                <p class="mt-4">{{ project.description }}</p>
            </div>
        </div>
    </div>
   </div>
</template>

<style lang="scss" scoped>
    
</style>
