<template>
    <div class="container-footer">
        
        <img src="../assets/management.png" class="logo">
        <div class="body">
            <div class="socials">
                <h2 class="title">Our social networks</h2>
                <div class="list-links">
                    <a href=""><img class="social" src="../assets/facebook.png" alt=""></a>
                    <a href=""><img class="social" src="../assets/instagram.png" alt=""></a>
                    <a href=""><img class="social" src="../assets/twitter.png" alt=""></a>
                    <a href=""><img class="social" src="../assets/whatsapp.png" alt=""></a>
                </div>
                <div class="final">All rights reserved Administration Comerce</div>
            </div>
        </div>
    </div>

</template>
<script>    
export default {
    name: 'Footer'
}
</script>
<style scoped>
    .container-footer{
        background: #2c3e50;
        width: 100vw;
        height: 200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 80px;
        margin-top: -1px;
    }
    .logo{
        height: 150px;
    }
    .body{
        display: flex;
        align-items: center;        
    }
    .socials{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .social{
        width: 50px;
    }
    .title,.final{
        color: #fff;
    }
    .list-links{
        margin-bottom: 1rem;
        width: 350px;
        display: flex;
        justify-content: space-between;
    }
    @media(max-width:1400px){
        .logo{
            height: 100px;
        }
        .social{
            width: 35px;
        }
        .list-links{
            width: 250px;
        }
    }
    @media(max-width:992px){
        .container-footer{
            flex-direction: column;
            height: fit-content;
        }
        .logo{
            margin-top: 2rem;
            margin-bottom: 2rem;
        }
        .social{
            width: 35px;
        }
        .list-links{
            width: 250px;
        }
    }
</style>