<template >
    <div>
        <NavbarC />
        <div class="container-fluid">
            <table class="table">
                <thead>
                    <tr>
                        <th >Product Name</th>
                        <th >Product Price</th>
                        <th>Product Type</th>
                        <th >Product Quantity</th>
                        <th data-label="Profile">Product Image</th>
                        <th>Remove item</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product">
                        <td data-label="Product name">{{ product.prodName }}</td>
                        <td data-label="Product price" >R{{ product.prodPrice }}</td>
                        <td data-label="Product type" >{{ product.prodType }}</td>
                        <td data-label="Product quantity" >{{ product.prodQuantity }}</td>
                        <td data-label="Product img"><img class="img-fluid" :src="product.imgURL" style="width:210px; height:180px" alt="img"></td>
                        <!-- edit button -->
                        <!-- <td><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Edit</button></td> -->
                        <!-- delete button -->
                        <td> <button @click="deleteProduct(product.productID)" type="submit" class="btn btn-dark">Remove item</button></td>
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

export default {
    components: {
        FooterC,
        NavbarC
    },

}

</script>
<style scoped>
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