<template>
  <NavbarC />
  <div>
    <section>
     
        <div loading="lazy" class="img1">
          <div class="header">
            <div class="row d-flex flex-column flex-md-row">
            <div class="inner-header flex">
              <h1>EXPLORE.
                DISCOVER.
                CREATE.</h1>
              </div>
            </div>
        </div>
      </div>
    </section>
  </div>
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
/* landing page img */
.img1 {
  width: 100vw;
  height: 100vh;
  background: url(https://i.postimg.cc/ZKgNT8tz/landing-1.jpgy);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.img1 {
  max-width: 100%;
  height: auto;
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
  color: #ffffff;
}

/* @media (min-width: 300px) {
  .img1 {
    max-width: 100%;
    height: auto;
  }
}
@media (max-width: 720px) {
  .img1 {
    max-width: 100%;
    height: auto;
  }
}
@media (max-width: 1080px) {
  .img1 {
    max-width: 100%;
    height: auto;
  }
} */
</style>