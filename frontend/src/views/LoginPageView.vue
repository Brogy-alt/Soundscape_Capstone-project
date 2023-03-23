<template>
      <NavbarC />

<section class="container">

    <div class="account-heading pt-4 pb-3 ">
      <h2>Login</h2>
    </div>

            <div class="contact">
                <h2 class="text-light">Contact us </h2>

                
            

                <form @submit.prevent="login" ><br>
                    <div class="form-group">
                     
                        <label for="exampleInputPassword1">Email</label>
                        <input type="email" v-model="payload.emailAdd"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>

                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" v-model="payload.userPass" class="form-control"   placeholder="Enter password" required>

                    </div>
                    <div class="button pt-4 pb-4">
                        <button class="btn btn-dark" type="submit" @click.prevent="login">Login </button>
                    </div>
                    <br>

                    <SpinnerC v-if="isSpinning" />
                
                    <div v-else>
                        <p  class="message m-2" >{{ user?.firstName }} {{ user?.lastName }} {{ message }} </p>
                        
                    </div>

                    <div class="login ms-auto pb-5">
                        <p>Don't have an account?</p> <a href="/signup">Sign up</a>
                    </div>
                    
                </form>
                
            </div>
        
</section>


    <!-- <FooterC /> -->
</template>

<script>


import NavbarC from '@/components/NavbarC.vue';
import SpinnerC from '@/components/SpinnerC.vue';
// import FooterC from '@/components/FooterC.vue';

export default {
    components:{
    // FooterC,
    SpinnerC,
    NavbarC
    },
    data() {
        return{
        payload: {
            emailAdd: '',
            userPass: '',
            isSpinning: true
            }
        }
    },
    created() {
        setTimeout(() => {
            this.isSpinning = false;
        }, 3000);
    },
    computed: {
        message() {
            return this.$store.state.message
        },
        user(){
            return this.$store.state.user
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
  margin-top: 70px;
  justify-content: center;
  align-items: center;
  height: 50vh; 
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

textarea {
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border-radius: 4px;
    resize: none;
}

.button{
    padding-bottom: 2rem;
}


    
</style>