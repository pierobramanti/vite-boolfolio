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
            axios.get('INDIRIZZO').then(res => {  
                if(res.data.success){
                    this.project = res.data.results;
                }
            });
        }
    }
}
</script>

<template>
   <div class="container">
    <div class="row">
        <div class="col-12">
            <img src="" alt="">
        </div>
        <div class="col-12">
            <div class="content">

            </div>
            <h1>Titolo</h1>
            <p><strong>Tipologia:</strong></p>
            <p><strong>Tecnologia:</strong></p> 
        </div>
        <div class="col-12">

        </div>
    </div>
   </div>
</template>

<style lang="scss" scoped>
    
</style>
