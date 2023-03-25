<template lang="">
    <NavbarC />
    <div>

        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        
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
    computed: {
        getCart() {
            console.log(this.$store.state.cart);
            return this.$store.state.cart
        }
    },
    mounted() {
        this.$store.dispatch('getCart', this.id)
    }
}
</script>
<style scoped >

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