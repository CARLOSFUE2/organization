<template>
<div class="container-modal">
    <h1 class="title">successful message sending</h1>
    <div class="content">your contact has been sent successfully we will contact you shortly </div>
    <button class="button-organization" v-on:click="closeModal()">Close</button>
</div>   
</template>
<script>
export default {
    name: 'Modal',
    methods:{
        closeModal(){
            this.$emit('closeModal', false)
        }
    }
}
</script>
<style scoped>
    .container-modal{
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        justify-content: center;
        background: white;
        border-radius: 15px;
        width: 60%;
        padding: 50px;
    }
    .title{
        font-size: 3rem;
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

        margin: auto;
        margin-top: 2rem;
    }
    @media(max-width: 992px){
    .container-modal{
        width: 90%;
    }
    .title{
        font-size: 2rem;
    }
    .content{
        font-size: 1rem;
        padding: 0;
    }
    .button-organization{
        font-size: 1rem;
        width: 50%;
        padding: 15px;
    }
    }
</style>