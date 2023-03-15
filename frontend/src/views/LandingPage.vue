<template>
  <NavbarC />
  <section class="home-vid">

    <div loading="lazy" class="video-container">
      <video autoplay muted loop id="myVideo" src="../assets/Videos/canvavideo1.mp4" type="video/mp4"></video>

    </div>
  </section>

  <section class="home">

    <!-- <div class="header">
            <div class="row d-flex flex-column flex-md-row">
            <div class="inner-header flex">
              <h1>EXPLORE.
                DISCOVER.
                CREATE.</h1>
              </div>
            </div>
        </div> -->

    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="inner-header flex d-flex flex-column flex-md-row justify-content-around justify-content-sm-center">
            <h1>EXPLORE.
            </h1>
            <h1>
              DISCOVER.
            </h1>
            <h1>
              CREATE.</h1>
          </div>

        </div>
      </div>
    </div>


    <!-- <h2 class="heading-about">About </h2> -->

    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="card">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" class="img-fluid" />
              <a href="#!">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
              </a>
            </div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              <a href="#!" class="btn btn-primary">Button</a>
            </div>
          </div>
        </div>

        <div class="col-sm">
          <div class="card">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" class="img-fluid" />
              <a href="#!">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
              </a>
            </div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              <a href="#!" class="btn btn-primary">Button</a>
            </div>
          </div>
        </div>

        <div class="col-sm">
          <div class="card">
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" class="img-fluid"/>
    <a href="#!">
      <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
    </a>
  </div>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#!" class="btn btn-primary">Button</a>
  </div>
</div>
        </div>
      </div>
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
  padding-bottom: 56.25%;
  /* 16:9 aspect ratio */
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
  margin: 0 auto;
  z-index: 2;
}

/* Center the container div */
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;


}

/* h1 resposiveness */
@media screen and (max-width: 700px) {
  .flex h1 {
    font-size: 40px;
  }
}

@media screen and (max-width: 600px) {
  .flex h1 {
    font-size: 40px;
    gap: 10rem !important;
  }
}

@media screen and (max-width: 500px) {
  .flex h1 {
    font-size: 40px;
    gap: 10rem !important;
  }
}

@media screen and (max-width: 400px) {
  .flex h1 {
    font-size: 40px;
    gap: 10rem !important;
  }
}

@media screen and (max-width: 300px) {
  .flex h1 {
    font-size: 40px;
    gap: 10rem !important;
  }
}

/* h1 height responsiveness */
</style>

