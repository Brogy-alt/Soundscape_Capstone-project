<template >
  <NavbarC />
  <div>
    <div class="adduser pt-3 pb-3">
      <AddUser />
    </div>
    <div class="heading-users pb-3">
      <h2>Users table</h2>
    </div>
    <SpinnerC v-if="isSpinning" />

    <div class="container-fluid" v-else>
      <table class="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>cellphoneNumber</th>
            <th>Email Address</th>
            <!-- <th>Password</th> -->
            <th>Profile</th>
            <th>Role</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user">
            <td data-label="Firstname">{{ user.firstName }}</td>
            <td data-label="Lastname">{{ user.lastName }}</td>
            <td data-label="Gender">{{ user.gender }}</td>
            <td data-label="CellphoneNo">{{ user.cellphoneNumber }}</td>
            <td data-label="Email">{{ user.emailAdd }}</td>
            <!-- <td>{{ user.userPass }}</td> -->
            <td data-label="Profile"><img :src="user.userProfile" alt=""></td>
            <td data-label="Role">{{ user.userRole }}</td>
            <!-- edit button -->
            <td>
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-light" data-bs-toggle="modal"
                :data-bs-target="'#exampleModal' + `${user.userID}`">
                Edit
              </button>

              <!-- Modal -->
              <div class="modal fade" :id="'exampleModal' + `${user.userID}`" tabindex="-1"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Update User</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form @submit.prevent="updateUser(user)">
                        <div class="form-row">
                          <input class="form-control my-3" v-model="user.firstName" placeholder="Your Firstname"
                            type="text">
                        </div>

                        <div class="form-row">
                          <input class="form-control my-3" v-model="user.lastName" placeholder=" Your Last Name"
                            type="text">
                        </div>

                        <div class="form-row">
                          <input class="form-control my-3" v-model="user.cellphoneNumber" placeholder="Your Cellphone number"
                            type="text">
                        </div>

                        <div class="form-row">
                          <input class="form-control my-3" v-model="user.emailAdd" placeholder="Your Email"
                            type="text">
                        </div>

                        <div class="form-row">
                          <input class="form-control my-3" v-model="user.userPass" placeholder="Your Password"
                            type="text">
                        </div>

                        <div class="form-row">
                          <input class="form-control my-3" v-model="user.gender"
                            placeholder="Gender" type="text">
                        </div>

                        <div class="form-row">
                          <input class="form-control my-3" v-model="user.userProfile"
                            placeholder="Your Profile" type="text">
                        </div>

                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="submit" class="btn btn-primary">Update Product</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </td>

            <!-- delete button -->
            <td> <button type="button" @click="deleteUser(user.userID)" class="btn btn-dark">Delete</button></td>



          </tr>
        </tbody>
      </table>
    </div>
    <div class="adduser pt-3 pb-3">
      <AddProduct />
    </div>
    <h2 class="heading-products pb-3">Products table</h2>
    <SpinnerC v-if="isSpinning" />

    <div class="container-fluid" v-else>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Price</th>
            <th>Product Type</th>
            <th>Product Quantity</th>
            <th data-label="Profile">Product Image</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product">
            <td data-label="ID">{{ product.productID }}</td>
            <td data-label="Product name">{{ product.prodName }}</td>
            <td data-label="Product Category">{{ product.prodCategory }}</td>
            <td data-label="Product price">R{{ product.prodPrice }}</td>
            <td data-label="Product type">{{ product.prodType }}</td>
            <td data-label="Product quantity">{{ product.prodQuantity }}</td>
            <td data-label="Product img"><img class="img-fluid" :src="product.imgURL" style="width:210px; height:180px"
                alt="img"></td>

            <td>
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-light" data-bs-toggle="modal"
                :data-bs-target="'#exampleModal' + `${product.productID}`">
                Edit
              </button>

              <!-- Modal -->
              <div class="modal fade" :id="'exampleModal' + `${product.productID}`" tabindex="-1"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Update Product</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form @submit.prevent="updateProduct(product)">
                        <div class="form-row">
                          <input class="form-control my-3" v-model="product.prodName" placeholder="Product Name"
                            type="text">
                        </div>

                        <div class="form-row">
                          <input class="form-control my-3" v-model="product.prodCategory" placeholder="Product Category"
                            type="text">
                        </div>

                        <div class="form-row">
                          <input class="form-control my-3" v-model="product.prodPrice" placeholder="Product Price"
                            type="text">
                        </div>

                        <div class="form-row">
                          <input class="form-control my-3" v-model="product.prodType" placeholder="Product Type"
                            type="text">
                        </div>

                        <div class="form-row">
                          <input class="form-control my-3" v-model="product.prodQuantity" placeholder="Product Quantity"
                            type="text">
                        </div>

                        <div class="form-row">
                          <input class="form-control my-3" v-model="product.imgURL"
                            placeholder="Add your product image (only accepts post image links)" type="text">
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="submit" class="btn btn-primary">Update Product</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

            </td>


            <!-- delete button -->
            <td> <button @click="deleteProduct(product.productID)" type="submit" class="btn btn-dark">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
  <FooterC />
</template>
<script>

import NavbarC from '@/components/NavbarC.vue';
import FooterC from '@/components/FooterC.vue';
import SpinnerC from '@/components/SpinnerC.vue';
import AddUser from '@/components/AddUser.vue';
import AddProduct from '@/components/AddProduct.vue';
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';


export default {
  components: {
    SpinnerC,
    FooterC,
    NavbarC,
    AddUser,
    AddProduct
  },

  setup() {
    const store = useStore()
    store.dispatch("fetchUsers")
    const users = computed(() => store.state.users)
    store.dispatch("fetchProducts")
    const products = computed(() => store.state.products)
    return {
      users, products

    }
  },
  created() {
    setTimeout(() => {
      this.isSpinning = false;
    }, 3000);
  },
  data() {
    return {
      isSpinning: true
    }
  },
  methods: {
    updateProduct: function (product) {
      return this.$store.dispatch('updateProduct', {
        productID: product.productID,
        prodName: product.prodName,
        prodCategory: product.prodCategory,
        prodPrice: product.prodPrice,
        prodQuantity: product.prodQuantity,
        prodType: product.prodType,
        imgURL: product.imgURL

      })
    },
    updateUser: function (user) {
      return this.$store.dispatch('updateUser', {
        userID: user.userID,
        firstName: user.firstName,
        LastName: user.lastName,
        cellphoneNumber: user.cellphoneNumber,
        emailAdd: user.emailAdd,
        gender: user.gender,
        userPass: user.userPass,
        userProfile: user.userProfile
      })
    },
    deleteUser(id) {
      this.$store.dispatch('deleteUser', id)
    },
    deleteProduct(id) {
      this.$store.dispatch('deleteProduct', id)
    }
  }
}



</script>
<style scoped>
td {
  word-break: break-all;
  word-wrap: break-word;
}

img {
  height: 100px;
  width: 100px;
}

/*responsive*/
@media(max-width: 300px) {
  .table {
    height: 100%;
    overflow-y: auto;
  }

  .table thead {
    display: none;
  }

  .table,
  .table tbody,
  .table tr,
  .table td {
    display: block;
    width: 100%;
  }

  .table tr {
    margin-bottom: 15px;
  }

  .table td {
    text-align: right;
    padding-left: 50%;
    text-align: right;
    position: relative;
    width: 100%;
  }

  .table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 15px;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
  }
}

/*responsive*/
@media(max-width: 500px) {
  .table {
    height: 100%;
    overflow-y: auto;
  }

  .table thead {
    display: none;
  }

  .table,
  .table tbody,
  .table tr,
  .table td {
    display: block;
    width: 100%;
  }

  .table tr {
    margin-bottom: 15px;
  }

  .table td {
    text-align: right;
    padding-left: 50%;
    text-align: right;
    position: relative;
    width: 100%;
  }

  .table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 15px;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
  }
}</style>