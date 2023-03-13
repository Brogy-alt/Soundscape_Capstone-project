<template>
  <NavbarC />
    <section>
     
          <div loading="lazy" class="video-container">
          <video autoplay muted loop id="myVideo" src="../assets/Videos/Interfaces.mp4" type="video/mp4"></video>   
          
        </div>    
    </section>
  <FooterC />
</template>
<script>
import NavbarC from '@/components/NavbarC.vue';
import FooterC from '@/components/FooterC.vue';
export default {
  components: {
    NavbarC,
    FooterC
  }
}
</script>
<style scoped>

.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  z-index: 1;
  
}

.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}

.inner-header {
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}


/* home heading */
.flex {
  /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

}

.flex h1 {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 65px;
  color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    z-index: 2;
}



</style>

