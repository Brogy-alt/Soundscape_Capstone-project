<template >
    <NavbarC />
    <div>
      <AddUser/>
      <div class="heading-users">
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
                        <td>{{ user.firstName }}</td>
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.gender }}</td>
                        <td>{{ user.cellphoneNumber }}</td>
                        <td>{{ user.emailAdd }}</td>
                        <!-- <td>{{ user.userPass }}</td> -->
                        <td><img :src="user.userProfile" alt=""></td>
                        <td>{{ user.userRole }}</td>
                        <!-- edit button -->
                        <td><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Edit</button></td>
                        
                        <!-- delete button -->
                        <td> <button type="button" @click="deleteUser(user.userID)" class="btn btn-dark">Delete</button></td>
                        

                      
                    </tr>
                </tbody>
            </table>
        </div>
        <AddProduct/>
        <h2 class="heading-products">Products table</h2>
        <SpinnerC v-if="isSpinning" />

        <div class="container-fluid" v-else>
            <table class="table">
                <thead>
                    <tr>
                        <th >ID</th>
                        <th >Product Name</th>
                        <th >Product Category</th>
                        <th >Product Price</th>
                        <th>Product Type</th>
                        <th >Product Quantity</th>
                        <th data-label="Profile">Product Image</th>
                        
                        
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product">
                        <td data-label="ID" >{{ product.productID }}</td>
                        <td data-label="Product name">{{ product.prodName }}</td>
                        <td data-label="Product Category" >{{ product.prodCategory }}</td>
                        <td data-label="Product price" >R{{ product.prodPrice }}</td>
                        <td data-label="Product type" >{{ product.prodType }}</td>
                        <td data-label="Product quantity" >{{ product.prodQuantity }}</td>
                        <td data-label="Product img"><img class="img-fluid" :src="product.imgURL" style="width:210px; height:180px" alt="img"></td>
                        <!-- edit button -->
                        <!-- <td><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Edit</button></td> -->
                        <td><UpdateProduct/></td>
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
import UpdateProduct from '@/components/UpdateProduct.vue';


export default {
    components: {
        SpinnerC,
        FooterC,
        NavbarC,
        AddUser,
        AddProduct,
        UpdateProduct
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
}

</style>