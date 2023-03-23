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
      <div class="products pb-4">
        <select required v-model="prodType">
          <option value="" selected>All categories</option>
          <option value="Gaming">Gaming</option>
          <option value="Production">Production</option>
          <option value="Medical">Medical</option>
          <option value="Architecture and design">Architecture and design</option>
        </select>

        <div class="input-group" style="width: 20%;">
          <input type="search" class="form-control rounded" placeholder="Search Category" v-model="searching">
        </div>

        <button @click.prevent="priceSort" class="btn btn-dark">Sort by price</button>

      </div>
      <div class="row" style="justify-content: center;gap:1rem;">
        <div class="card" style="width: 18rem;" v-for="product in search" :key="product.id">
          <img :src="product.imgURL" class="card-img-top" alt="product img" style="height: 12rem;">

          <div class="card-body">

            <h6 class="card-title">

              <h5>Name : <br></h5> <b>{{ product.prodName }}</b>
            </h6>

            <h6 class="card-text">
              <h5>Category : <br></h5> <b>{{ product.prodCategory }}</b>
            </h6>

            <h6 class="card-text">
              <h5>Price: <br></h5> <b> R{{ product.prodPrice }}</b>
            </h6>
            <router-link :to="{ name: 'singleproduct', params: { id: product.productID } }"><button type="button"
                class="btn btn-dark" v-if="this.$store.state.userAuth">Show product</button>

              
            </router-link>




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
      searching: "",
      prodType: ""

    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    search() {
      let filteredBytype = this.products.filter(item => item.prodType == this.prodType || this.prodType == '')
      if (this.searching.trim().length > 0) {
        return filteredBytype.filter((input) => input.prodCategory.toLowerCase().includes(this.searching.trim().toLowerCase()))
      }
      return filteredBytype
    }
  }
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

.products {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
}
</style>