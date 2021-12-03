<template>
    <div id="banner" class="container-banner">
        <div class="body">
            <img class="icon" src="../assets/management.png" alt="">
            <h1 class="title">Administration Comerce</h1>
            <div class="content">The best option to manage the organizations that are under your administration</div>
            <a href="#about-us" class="button-organization">View more</a>
        </div>
        <img class="image"  src="../assets/banner.jpg">
    </div>
</template>
<script>
    export default {
        name: 'Banner',
    }
</script>
<style scoped>
    .container-banner{
        display: flex;
        align-items: center;
        width: 100vw;
       /* position: absolute;
        top: 104px;*/
        background: -webkit-linear-gradient(#3EB8C7,#2c3e50);
        height: 87vh;
    }
    .icon{
        width: 80px;
        margin-bottom: 1.5rem;
    }
    .title{
        font-size: 3rem;
    }
    .body{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        align-items: center;
    }
    .content{
        font-size: 1.6rem;
        font-weight: 600;
        padding: 0 50px;
    }
    .button-organization{
        font-size: 1.6rem;
        background: #42b983;
        border-radius: 10px;
        padding: 15px 55px;
        font-weight: 600;
        border: none;
        color: #ffff;
        width: 38%;
        margin-top: 3rem;
        text-decoration: none;
    }
    .image{
        height: 50vh;
        border-radius: 12px;
    }
    @media(max-width:1400px){
        .container-banner{
            height: 100vh;
        }
        .title{
            font-size: 2.3rem;
        }
        .content{
            font-size: 1.2rem;
            padding: 0 100px;
        }
        .button-organization{
            padding: 6px 26px;
            font-size: 1.3rem;
            margin-top: 2rem;
        }
    }
    @media(max-width:992px){
        .container-banner{
            flex-direction: column;
            height: fit-content;
        }
        .icon{
            margin-top: 4rem;
        }
        .image{
            height: auto;
            width: 100vw;
        }
        .title{
            font-size: 2rem;
        }
        .content{
            padding: 0;
            font-size: 1rem;
        }
        .button-organization{
            width: auto;
            margin-bottom: 1rem;
        }
    }

</style>