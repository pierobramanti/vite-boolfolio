<script>
import {store} from './store.js';
import AppHeader from './components/AppHeader.vue';

import axios from 'axios';

export default {
  components:{
    AppHeader
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
<AppHeader :menu="store.menu" />
<router-view></router-view>


</template>

<style lang="scss">
@import './styles/generals.scss';
</style>
