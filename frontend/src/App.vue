<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300&display=swap');
#app {
  font-family: 'Manrope', sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}



*,
::after,
::before{
  padding : 0;
  margin: 0;
  box-sizing: border-box;
  --bs-gutter-x:0 !important;
}

p{
 font-size: 18px; 
}

h2{
  font-size: 35px; 
}
</style>
