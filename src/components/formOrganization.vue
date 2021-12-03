<template>
  <div class="card">
    <div class="box-button" v-on:click="closeForm()">
        <img src="../assets/close.png" alt="">
    </div>
    <h1 class="title">Create new organization</h1>
    <b-form  @submit.stop.prevent @submit="onSubmit"  >
        <b-form-group
        label="Name organization"
        >
            <b-form-input 
            v-model="name" 
            :state="validationName"
            placeholder="Enter name of organization"
            required ></b-form-input>
        </b-form-group>
        <b-form-group
        label="Name owner of organization">
            <b-form-input 
            v-model="ownerName" 
            :state="validationNameOwner"
            placeholder="Enter name owner of organization" ></b-form-input>
        </b-form-group>
        <b-form-group
        label="Email owner of organization">
            <b-form-input 
            v-model="ownerEmail" 
            :state="validationEmail"
            placeholder="Enter email owner of organization" ></b-form-input>
        </b-form-group>
        <b-form-group
        label="Number owner of organization">
            <b-form-input 
            v-model="ownerPhone"
            placeholder="Enter number owner of organization"
            type="number"  ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="success">Submit</b-button>
     </b-form>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
      name: 'FormOrganization',
    data() {
      return {
        name: '',
        ownerName:'',
        ownerEmail: '',
        ownerPhone: ''
      }
    },

    methods:{
        onSubmit(event) {
            event.preventDefault()
            if(this.vadilateForm()){
                this.createOrganization();
            }else{
              if(!this.validationName){
                alert("the name of the organization is not valid")
              }else if(!this.validationNameOwner){
                alert("the owner's name is not valid")
              }else{
                alert("the owner's email is not valid")
              }
            }
            
        },
        closeForm(){
            this.$emit('closeForm',false);
        },
        addOrganization(organization){
          this.$emit('addOrganization',organization)
        },
        vadilateForm(){
 
            if(this.validationName && this.validationNameOwner && this.validationEmail){
                return true;
            }else{
                return false;
            }
        },
        createOrganization(){
          let payload ={
              owner:this.ownerName,
              organization:this.name,
              ownerPhone: this.ownerPhone,
              email: this.ownerEmail
          }
        this.addOrganization(payload);
        //this.sendData(payload);
      },
      async sendData(data){
          let resp = await axios.post('http://1o36d.mocklab.io/organization',data)
          console.log(resp);
          return resp;
      }
    },
    computed: {
      validationName() {
        return this.name.length > 3 && this.name.length < 100
      },
      validationNameOwner() {
        return this.ownerName.length > 3 && this.ownerName.length < 100
      },
      validationEmail() {
        if(this.ownerEmail){
            let email = this.ownerEmail;
            let isValid = email.match(/\S+@\S+\.\S+/);
            return isValid ? true : false;
        }else{
            return false;
        }
      }
    }
  }
</script>
<style scoped>
    .card{
        position: fixed;
        top: 30vh;
        width: 50vw;
        padding: 70px 100px;
    }
    .title{
        font-size: 3rems;
    }
    .form-group{
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;

    }
    .box-button{
        position: absolute;
        top: 2rem;
        right: 2rem;
    }
    .box-button img{
        width: 20px;
        height: 20px;
    }
    @media(max-width:992px){
      .card{
        width: 100vw;
        padding: 70px 35px;
      }
    }
</style>