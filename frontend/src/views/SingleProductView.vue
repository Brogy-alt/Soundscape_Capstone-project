<template>
    <NavbarC />
    <div>
        <SpinnerC v-if="isSpinning" />

    <div v-else>
      <div class="row" style="justify-content: center;gap:1rem;">  
        <div class="card" style="width: 22rem;">
            <img :src="product?.imgURL" class="card-img-top" alt="product img" style="height: 14rem;">
            <div class="card-body">
                <h5 class="card-title">{{ product?.prodName }}</h5>
                <!-- <p class="card-text">{{ product?.prodCategory }}</p> -->
                <!-- <p class="card-text">R{{ product?.prodPrice }}</p> -->
            </div> <p class="card-text">{{ product?.prodDescription }}</p>
        </div>
      </div>
    </div>
    </div>
    <FooterC />
</template>
<script>
import NavbarC from '@/components/NavbarC.vue';
import FooterC from '@/components/FooterC.vue';
import SpinnerC from '@/components/SpinnerC.vue';
// import { useStore } from 'vue';
// import { computed} from '@vue/runtime-core'

export default { 
    components:{
        FooterC,
        NavbarC,
        SpinnerC
    },
    // setup() {
    //     const store = useStore();
    //     const product = computed(() => store.status.product)
    //     const spinner = computed(() => store.status.setSpinner)
    //     return {
    //         product,
    //         spinner
    //     }
    // },
    mounted() {
        this.$store.dispatch("fetchProduct", this.$route.params.id);
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
        product() {
            return this.$store.state.product;
        }
    }
}
</script>
<style scoped>
    
</style>