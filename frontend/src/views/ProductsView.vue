<template>
  <NavbarC />

  <div>


    <section class="products-carousel">

      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img src="https://i.postimg.cc/QxWxz2FM/product1.jpg" class="d-block w-100" alt="img1">
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="https://i.postimg.cc/NjKNwx1b/product2.jpg" class="d-block w-100" alt="img2">
          </div>
          <div class="carousel-item">
            <img src="https://i.postimg.cc/W3VywJQV/product3.jpg" class="d-block w-100" alt="img3">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>

    <SpinnerC v-if="isSpinning" />

    <div v-else>
      <input type="text" placeholder="Search Category" v-model="searching">
      <button @click.prevent="priceSort" class="btn btn-dark">Sort</button>
      <div class="row" style="justify-content: center;gap:1rem;">
        <div class="card" style="width: 18rem;" v-for="product in search" :key="product.id">
          <img :src="product.imgURL" class="card-img-top" alt="product img" style="height: 12rem;">

          <div class="card-body">
            <h5 class="card-title">{{ product.prodName }}</h5>
            <p class="card-text">{{ product.prodCategory }}</p>
            <p class="card-text">R{{ product.prodPrice }}</p>
            <router-link :to="{ name: 'display', params: { id: product.productID } }"><button>View</button></router-link>



          </div>
        </div>
      </div>
    </div>

    <!-- this div must always be last -->
  </div>
  <FooterC />
</template>

<script>

import NavbarC from '@/components/NavbarC.vue';
import FooterC from '@/components/FooterC.vue';
import SpinnerC from '@/components/SpinnerC.vue';

export default {
  components: {
    SpinnerC,
    FooterC,
    NavbarC
  },
  mounted() {
    this.$store.dispatch('fetchProducts')
  },
  methods: {

    priceSort() {
      this.$store.commit("sortProductsByprice");
    }
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
    products() {
      return this.$store.state.products;
    },
    search() {
      if (this.searching.trim().length > 0) {
        return this.products.filter((input) => input.prodCategory.toLowerCase().includes(this.searching.trim()
          .toLowerCase()))
      }
      return this.products
    }
  },
}

</script>
<style scoped>
img {
  max-height: 90vh;
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;

}

.products-carousel {
  padding-bottom: 50px;
}
</style>