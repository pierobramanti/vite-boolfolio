<script>
export default {
    
}
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-between align-items-center py-3">
                    <ul class="nav-list">
                        <li><router-link :to="{ name: 'homepage' }">Home</router-link></li>
                        <li><router-link :to="{ name: 'portfolio' }">Projects</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="">
    
</style>