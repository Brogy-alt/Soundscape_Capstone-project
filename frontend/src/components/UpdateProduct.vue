<template>
<!-- Button trigger modal -->
<button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Edit
</button>


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Create/Edit product</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
                    <div class="form-outline mb-4">
                        <!-- product name -->
                        <input id="product name" name="productname" type="text" placeholder="Enter product name" class="form-control" required>
                    </div>
                    
                    <div class="form-outline mb-4">
                        <!-- product category -->
                        <input id="product category" name="product category" type="text" placeholder="Enter product category" class="form-control" required>
                    </div>

                    <div class="form-outline mb-4">
                        <!-- product price -->
                        <input id="product price" name="product price" type="number" placeholder="Enter product price" class="form-control" required>
                    </div>

                    <div class="form-outline mb-4">
                        <!-- product type -->
                        <input id="product type" name="product type" type="text" placeholder="Enter product type" class="form-control" required>
                    </div>
                    
                    <div class="form-outline mb-4">
                        <!-- product Quantity -->
                        <input id="product quantity" name="product quantity" type="text" placeholder="Enter product quantity" class="form-control" required>
                    </div>

                    <div class="form-outline mb-4">
                        <!-- Product Image -->
                        <input id="product image" name="product image" type="text" placeholder="Add your product image (only accepts post image links)" class="form-control" required>
                    </div>
      </div>
      <div class="modal-footer">
        <!-- <button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Light</button> -->
        <button type="button" class="btn btn-light" data-bs-toggle="modal">Close</button>
        <button type="button" class="btn btn-dark">Save changes</button>
      </div>
    </div>
  </div>
</div>

</template>

<script>

export default {
    Name: 'UpdateProduct'
}
</script>
<style>
    
</style>