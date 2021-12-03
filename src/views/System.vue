<template>
    <div>
        <Header :system="true"/>
        <div class="header">
        <div class="title">Your registered organizations</div>
        <div class="box-button">
            <b-button variant="success" v-on:click="showForm()">New organization</b-button>
        </div>
        </div>
        <div class="table">
            <Table :data="organizations"/>
        </div>
        <div class="container-form" v-if="show">
            <FormOrganization @closeForm="closeForm"  @addOrganization="addOrganization"/>
        </div>
    </div>
</template>
<script>
import Table from '../components/table.vue'
import Header from '../components/header.vue'
import FormOrganization from '../components/formOrganization.vue'
import axios from 'axios'

export default {
    name: 'System',
    components:{
        Table,
        Header,
        FormOrganization
    },
    data (){
        return{
            show: false,
            organizations:[]
        }
    },
    mounted(){
        this.getOrganizations();
    },
    methods:{
    closeForm(e){
        this.show = e;
    },
    showForm(){
        this.show = !this.show;
    },
    addOrganization(organization){
        let newOrganization = {
            id: this.organizations.length + 1,
            ...organization
        }
        this.organizations.push(newOrganization);
        this.showForm();
    }
    ,
    async getOrganizations(){
        let resp = await axios.get('http://1o36d.mocklab.io/organizations');
        console.log(resp)
        this.organizations = resp.data;
    }
  }

}
</script>
<style scoped>
    .header{
        display: flex;
        justify-content: space-between;
        padding: 0 60px;
        position: relative;
        top: 60px;

    }
    .container-form{
        position: relative;
        z-index: 5;
        width: 100vw;
        display: flex;
        justify-content: center;
    }
    .box-button{
        display: flex;
        top: 40px;
    }
    .title{
        font-size: 3rem;
        text-align: start;
    }
    .table{
        position: relative;
        top: 30px;
        padding: 0 60px;
    }
    @media(max-width:992px){
        .header{    
            flex-direction: column;
            padding: 0 30px;
            align-items: center;
        }
        .title{
            font-size: 2rem;
            line-height: 2.2rem;
            margin-bottom: 1rem;
            text-align: center;
        }
        .table{
            padding: 0 30px;
        }
    }
</style>
