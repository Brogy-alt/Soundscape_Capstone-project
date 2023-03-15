<template>
      <NavbarC />
    <!-- <div class="login-form">
        <form class="container">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> -->

<section class="container">
            <div class="contact">
                <h2 class="text-light">Contact us </h2>
                <form @submit.prevent="login" ><br>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" v-model="payload.passUser" class="form-control"   placeholder="Enter password" required>

                        <label for="exampleInputPassword1">Email</label>
                        <input type="email" v-model="payload.emailAdd"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>
                    </div>

                    <div>
                        <p>{{ message }}</p>
                    </div>
                    
                    <div>
                        <button class="btn btn-danger" type="submit" @click.prevent="login">Login </button>
                    </div>
                    <br>
                </form>
            </div>
</section>


    <FooterC />
</template>

<script>


import NavbarC from '@/components/NavbarC.vue';
import FooterC from '@/components/FooterC.vue';


export default {
    components:{
    FooterC,
    NavbarC
    },
    data() {
        return{
        payload: {
            emailAdd: '',
            userPass: ''
            }
        }
    },
    computed: {
        message() {
            return this.$store.state.message
        }
    },
    methods: {
        login() {
            console.log('Return:', this.payload);
            this.$store.dispatch('login', this.payload)
        }
    }
}
</script>
<style scoped>

.login-form{
    /* height: 100vh; */
    width:100vw;
    border:3px solid black;
}

form{
    margin: auto;
    align-content: center;
    align-items: center;
    
}


.container {
 
  justify-content: center;
  align-items: center;
  /* height: 100vh; or any other height */
  text-align: center;
}

.contact{
    padding: 1rem;
}
input[type=submit] {
    color: rgb(255, 255, 255);
    background-color: #808080;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
}
input[type=text] {
    width: 100%;
    padding: 10px 20px;
    margin: 8px 0px;
    box-sizing: border-box;
}
input[type=number] {
    width: 100%;
    padding: 10px 20px;
    margin: 8px 0px;
    box-sizing: border-box;
}
/* input:hover[type=text] {
    border: none;
    border: 4px;
} */
textarea {
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border-radius: 4px;
    resize: none;
}
/* textarea:hover {
    border: none;
    box-sizing: border-box;
    border-radius: 4px;
    
} */
.button{
    padding-bottom: 2rem;
}


    
</style>