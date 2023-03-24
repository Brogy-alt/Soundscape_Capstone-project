<template>
    <NavbarC />

    <div class="acccount pt-4 pb-5">
        <h2>Your account</h2>
    </div>


    <div class="container-fluid ">
        <div class="row align-items-center">
            <div class="col-sm-6 ">


                <div class="pb-5">
                    <img class="user" :src="$store.state.user?.userProfile" alt="profile placeholder"
                        style="border-radius: 50%; border: 2px solid black;">

                </div>


            </div>

            <div class="col-sm-6">

                <div>
                    <h5 class="account-heading pt3 pb-1">
                        Firstname:
                    </h5>
                    <p class="message m-2">{{ $store.state.user?.firstName }}</p>

                    <h5 class="account-heading pt3 pb-1">
                        Lastname:
                    </h5>
                    <p class="message m-2">{{ $store.state.user?.lastName }}</p>

                    <h5 class="account-heading pt3 pb-1">
                        CellphoneNumber :
                    </h5>

                    <p class="message m-2">{{ $store.state.user?.cellphoneNumber }} </p>

                    <h5 class="account-heading pt3 pb-1">
                        EmailAdd :
                    </h5>

                    <p class="message m-2">{{ $store.state.user?.emailAdd }} </p>

                    <h5 class="account-heading pt3 pb-1">
                        Gender :
                    </h5>

                    <p class="message m-2">{{ $store.state.user?.gender }} </p>


                </div>




            </div>

        </div>
    </div>


    <FooterC />
</template>

<script>


import NavbarC from '@/components/NavbarC.vue';
// import SpinnerC from '@/components/SpinnerC.vue';
import FooterC from '@/components/FooterC.vue';
import { onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
    components: {
        FooterC,
        // SpinnerC,
        NavbarC

    },
    setup() {
        const store = useStore()

        onMounted(async () => {
            await store.dispatch('fetchUser')
        })
    }




}


</script>
<style scoped>
.account-heading {
    font: bolder;

}

.user{
    width: 320px;


}

@media screen and (max-width: 300px) {
    .user {
        width: 100px !important;
  }
}
</style>