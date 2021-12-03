<template>
    <div id="about-us" class="container-about-us">
        <h1 class="title">About Us</h1>
        <div class="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, suscipit? Corporis molestias facilis inventore quasi aspernatur asperiores temporibus voluptatibus. Eligendi molestiae quibusdam ipsa. Autem, minima. Maxime possimus sit ut nihil.
        </div>
        <div class="gallery">
            <img class="image" src="../assets/gallery1.jpg" alt="">
            <img class="image" src="../assets/gallery2.jpg" alt="">
            <img class="image" src="../assets/gallery3.png" alt="">
        </div>
        <a href="#contact" class="button-organization">Contact us</a>
    </div>
</template>
<script>
export default {
    name: 'AboutUs'
}
</script>
<style scoped>
    .container-about-us{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        background: -webkit-linear-gradient(#2c3e50,#3EB8C7);
        height: 100vh;
        margin-top: -1px;
    }
    .title{
        font-size: 3rem;
        margin-bottom: 4rem;
    }
    .content{
        font-size: 2rem;
        font-weight: 600;
        line-height: 2.9rem;
        padding: 0 50px;
        width: 70vw;
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

    .gallery{
        display: flex;
        width: 60vw;
        justify-content: space-around;
        margin-top: 4rem;
    }
    .image{
        width: 27%;
        border-radius: 12px;
    }

    @media(max-width:1400px){
        .title{
            margin-bottom: 1rem;
        }
        .content{
            font-size: 1rem;
            line-height: 1.9rem;
        }
        .gallery{
            margin-top: 2rem;
        }
        .button-organization{
            padding: 6px 26px;
            font-size: 1.3rem;
            margin-top: 2rem;
        }
    }
    @media(max-width:992px){
        .container-about-us{
            height: fit-content;
        }
        .title{
            margin-top: 7rem;
        }
        .content{
            padding: 0;
        }
        .gallery{
            flex-direction: column;
        }
        .image{
            width: 100%;
            margin-top: 2rem;
        }
        .button-organization{
            width: auto;
        }
    }

</style>