<template>
    <div>
<!-- Button trigger modal -->

<div class="pt-5">
<button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Add user
</button>
</div>


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add user</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
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
            <div class="modal-footer">
              <!-- <button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Light</button> -->
              <button type="button" class="btn btn-light" data-bs-toggle="modal">Close</button>
              <button type="submit" class="btn btn-dark">Submit</button>

            </div>
        </form>        
    </div>
    </div>
  </div>
</div>

    </div>
</template>
<script>
export default {
    Name:"AddUser",
    data() {
        return{
            payload: {
                firstName: '',
                lastName: '',
                cellphoneNumber : '',
                emailAdd: '',
                userPass: '',
                userRole : '' ,
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
<style>
    
</style>