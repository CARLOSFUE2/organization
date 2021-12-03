<template>
<div class="container-header">
    <div class="logo">
        <a href="#banner" v-if="!system">
        <img src="../assets/management.png" alt="">
        </a>
        <router-link to="/" v-if="system">
        <img src="../assets/management.png" alt="">
        </router-link>
    </div>
    <div class="links-list" >
        <a href="#about-us" class="no-mobile" v-if="!system">About us</a>
        <a href="#contact" class="no-mobile" v-if="!system">Contact</a>
        <router-link to="/system" v-if="!system">Enter System</router-link>
    </div>
        <router-link to="/" v-if="system">Go home</router-link>
</div>
    
</template>
<script>
export default {
    name : 'Header',
    props:{
        system:{
            type: Boolean,
            default: false
        }
    }
}
</script>
<style scoped>
    .container-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
        height: fit-content;
        position: fixed;
        top: 0;
        padding: 20px 50px; 
        background: #2c3e50;
    }
    .logo img{
        width: 60px;
    }
    .links-list{
        width: 40%;
        display: flex;
        justify-content: space-around;
    }
     a{
        text-decoration: none;
        color: #42b983;
        font-size: 1.2rem;
        font-weight: 600;
    }
    @media(max-width:992px){
        .container-header{
            padding: 20px 25px;
        }
        .no-mobile{
            display: none;
        }
    }

</style>