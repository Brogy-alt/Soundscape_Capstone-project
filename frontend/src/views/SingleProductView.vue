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