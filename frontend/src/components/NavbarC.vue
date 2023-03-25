<template lang="">
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand"><img class="navlogo" style="margin-left: 2rem" src="../assets/Imgs//logo_transparent.png"><img/>Virtuverse</span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/products">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/admin">Admin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
      <span class="navbar-text" style="display:flex;">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- sign up-->
            <!-- links should be added -->
      <a class="signup" href="/signup">Sign up</a>
    </li>
  </ul>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" >
            <!-- login -->
             <!-- links should be added -->
    <a class="login" href="/login">Login</a>
  </li>
  </ul>
  <router-link :to="{name: 'logout'}">
      
  
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" >
            <!-- login -->
             <!-- links should be added -->
    <a class="login"> Logout</a>
  </li>
  </ul>
   
   
    
  </router-link>

  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" >
            <!-- sign in -->
             <!-- links should be added -->
    <a class="account" href="/userpage">Account</a>
  </li>
  </ul>

  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" >
            <!-- sign in -->
             <!-- links should be added -->
    <a class="checkout" href="/checkout">Checkout</a>
  </li>
  </ul>

  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" >
            <!-- sign in -->
             <!-- links should be added -->
    <a class="cart" href="/cart"><i class="fa-sharp fa-solid fa-cart-shopping"></i></a>
  </li>
  </ul>
  

      </span>
    </div>
  </div>
</nav>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>

.navlogo:hover{
  animation: shake 0.5s;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

@media screen and (max-width: 300px) {
  ul {
    
    padding-right : 0px !important ;
  }
}



ul{
  padding-right : 20px ;
}

.login{
  text-decoration: none;
}

.account{
  text-decoration: none;
}

.signup{
  text-decoration: none;
}

img{
width: 4rem;
padding-right: 10px;
}



@media(max-width: 900px) {
  .navbar-text {
    display:flex;

  }
}

</style>