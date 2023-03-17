<template lang="">
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand" style="padding-left: 20px"><img class="logo" src="../assets/Imgs//logo_transparent.png"><img/>Virtuverse</span>
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

  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" >
            <!-- sign in -->
             <!-- links should be added -->
    <a class="account" href="/userpage">Account</a>
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
</style>