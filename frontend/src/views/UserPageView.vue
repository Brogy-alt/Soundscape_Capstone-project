<template>
  <NavbarC />
                <SpinnerC v-if="isSpinning" />
                <div>
                    
                    <p class="message m-2">{{ user?.firstName }}</p>
                    <p class="message m-2">{{ user?.lastName }}</p>
                    <p class="message m-2">{{ user?.cellphoneNumber }} </p>
                    <p class="message m-2">{{ user?.emailAdd }} </p>
                    <p class="message m-2">{{ user?.userRole }} </p>
                    <p class="message m-2">{{ user?.gender }} </p>
                    <p class="message m-2">{{ user?.userProfile}} </p>
                    
                </div>

                <div class="login ms-auto pb-5">
                    <p>Don't have an account?</p> <p href=""></p>
                </div>
<FooterC />
</template>

<script>


import NavbarC from '@/components/NavbarC.vue';
import SpinnerC from '@/components/SpinnerC.vue';
import FooterC from '@/components/FooterC.vue';


export default {
components:{
FooterC,
SpinnerC,
NavbarC
},

created() {
    setTimeout(() => {
        this.isSpinning = false;
    }, 3000);
},
computed: {
    user(){
        return this.$store.state.user
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