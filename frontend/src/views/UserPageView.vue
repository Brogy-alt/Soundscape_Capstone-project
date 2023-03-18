<template>
  <NavbarC />
                

                <div class="container-fluid">
                    
                <img src="../assets/Imgs/profile.jpg" alt="profile placeholder" style="border-radius: 50%; border: 2px solid black;width: 100px;">

                </div>
 
                <div>
                    
                    <p class="message m-2">{{ user?.firstName }}</p>
                    <p class="message m-2">{{ user?.lastName }}</p>
                    <p class="message m-2">{{ user?.cellphoneNumber }} </p>
                    <p class="message m-2">{{ user?.emailAdd }} </p>
                    <p class="message m-2">{{ user?.userRole }} </p>
                    <p class="message m-2">{{ user?.gender }} </p>
                    <p class="message m-2">{{ user?.userProfile}} </p>
                    
                </div>

                
                
<FooterC />
</template>

<script>


import NavbarC from '@/components/NavbarC.vue';
// import SpinnerC from '@/components/SpinnerC.vue';
import FooterC from '@/components/FooterC.vue';


export default {
components:{
FooterC,
// SpinnerC,
NavbarC
},
mounted() {
        this.$store.dispatch("fetchUser", this.$route.params.id);
        console.log(this.$route.params.id);
    },
    created() {
        setTimeout(() => {
            this.isSpinning = false;
        }, 3000);
    },
    data() {
        return {
            isSpinning: true,
            searching: ""
        }
    },
    computed: {
       user() {
            return this.$store.state.user;
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