<script>
export default {
    props:{
        menu: Array
    }
}
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-between align-items-center py-3">
                    <ul class="nav-list">
                        <li v-for="(item, index) in menu" :key="index">
                          <router-link :to="{ name: item.name }">{{ item.label }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="">
    
</style>