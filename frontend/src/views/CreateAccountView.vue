<template>
   <NavbarC />
  <div>
    <div class="container">
    <div class="account-heading pt-4 pb-3 ">
      <h2>Create an account</h2>
    </div>

    
      <form @submit.prevent="userRegister">
          <div class="form-outline mb-4">
              <!-- firstname -->
              <input id="firstName" v-model="payload.firstName" name="firstname" type="text" placeholder="Enter your name" class="form-control" required>
          </div>
          
          <div class="form-outline mb-4">
              <!-- lastname -->
              <input id="lastName" v-model="payload.lastName" name="lastName" type="text" placeholder="Enter your lastName" class="form-control" required>
          </div>

          <div class="form-outline mb-4">
              <!-- cellphone no -->
              <input id="cellphoneNumber" v-model="payload.cellphoneNumber" name="cellphoneNumber" type="number" placeholder="Enter your cellphoneNumber" class="form-control" required>
          </div>

          <div class="form-outline mb-4">
              <!-- email -->
              <input id="emailAdd" v-model="payload.emailAdd" name="emailAdd" type="email" placeholder="Enter your email" class="form-control" required>
          </div>
          
          <div class="form-outline mb-4">
              <!-- userPass -->
              <input id="userPass"  v-model="payload.userPass" name="userPass" type="password" placeholder="Enter your password" class="form-control" required>
          </div>

          <div class="form-outline mb-4">
              <!-- userRole -->
              <input id="userRole" v-model="payload.userRole" name="userRole" type="text" placeholder="Enter your user role" class="form-control" required>
          </div>

          <div class="form-outline mb-4">
              <!-- gender" -->
              <input id="gender"  v-model="payload.gender" name="gender" type="text" placeholder="Enter your gender" class="form-control" required>
          </div>

          <div class="form-outline mb-4">
              <!--  userProfile -->
              <input id=" userProfile" v-model="payload.userProfile" name=" userProfile" type="text" placeholder="Add your image" class="form-control" required>
          </div>
          <div>
            <button type="submit" class="btn btn-dark">Submit</button>

          </div>
      </form>  
    </div>
        
  </div>
  <FooterC />
 
</template>
<script>

import NavbarC from '@/components/NavbarC.vue';
import FooterC from '@/components/FooterC.vue';


export default {
  components: {
    NavbarC,
    FooterC,

  },

  data() {
      return{
          payload: {
              firstName: '',
              lastName: '',
              cellphoneNumber : '',
              emailAdd: '',
              userPass: '',
              userRole : 'User' ,
              gender: '',
              userProfile : 'https://i.postimg.cc/pTLmhdpj/placeholder-person.jpg'
           

          }
      }
  },
  computed: {
      message() {
          return this.store.state.message
      }
  },
  methods: {
      userRegister() {
          console.log('Debug', this.payload);
          this.$store.dispatch('userRegister', this.payload)
      }
  }

}
</script>
<style scoped>
  .container{
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