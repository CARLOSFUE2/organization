<template>
    <div id="contact" class="container-contact">
        <div class="body">
            <h1 class="title">Contact us</h1>
            <div class="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni sint, dolores facere, commodi magnam vel sit laboriosam voluptatem quae aliquam provident veritatis. Totam explicabo perspiciatis necessitatibus dolorum recusandae, officiis similique?</div>
        </div>
        <div class="box-form">
            <h2 class="title-from">We have a team attentive to your request!</h2>
            <form class="form-contact" action="">
                <label >Name</label>
                <input class="form-control-input" type="text">
                <label >Email</label>
                <input class="form-control-input" type="email">
                <label >Message</label>
                <textarea class="form-control-textarea" rows="6"></textarea>
                <button class="button-organization" type="submit">Send</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name:'Contact'
}
</script>
<style scoped>
    .container-contact{
        display: flex;
        align-items: center;
        width: 100vw;

        background: -webkit-linear-gradient(#3EB8C7,#2c3e50);
        height: 100vh;
        margin-top: -1px;
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

        margin: auto;
        margin-top: 2rem;
    }
    .box-form{
        width: 50vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }
    .title-from{
        font-size: 2.2rem;
    }
    .form-contact{
        width: 70%;
        display: flex;
        flex-direction: column;
        align-content: center;
        background: #ffff;
        border-radius: 12px;   
        padding: 50px;
    }
    label{
        font-size: 1.6rem;
        font-weight: 600;
        width: fit-content;
        margin-bottom: 0.5rem;
    }
    .form-control-input{
        border: none;
        border-bottom: #2c3e50 solid 2px;
        margin: 20px 0;
        font-size: 1.4rem;
    }
    .form-control-input:focus-visible{
        outline: none;
    }
    .form-control-textarea{
        border: #2c3e50 solid 2px;
        outline-offset:0px;
    }
    .form-control-textarea:focus-visible{
        outline: none;
        margin: 20px 0;
        font-size: 1.4rem;
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
        label{
            font-size: 1rem;
        }
        .form-control-input{
            margin: 5px 0;
        }
        .title-from{
            font-size: 1.5rem;
        }
    }
    @media(max-width:992px){
        .container-contact{
            height: fit-content;
            flex-direction: column;
            padding-top: 2rem;
        }
        .body{
            width: 80%;
        }
        .title{
            font-size: 2.2rem;
        }
        .content{
            padding: 0;
        }
        .box-form{
            margin-top: 1rem;
            width: 100%;
        }
        .form-contact{
            width: 90%;
        }
        .title-from{
            display: none;
        }
        .button-organization{
            width: auto;
        }
        label{
            font-size: 1rem;
        }
        .form-control-input{
            margin: 5px 0;
        }
        .title-from{
            font-size: 1.5rem;
        }
    }

</style>