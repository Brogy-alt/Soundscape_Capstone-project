<template>
  <NavbarC />
  <!-- home video -->
  <section class="home-vid">

    <div loading="lazy" class="video-container">
      <video autoplay muted loop id="myVideo" src="../assets/Videos/canvavideo1.mp4" type="video/mp4"></video>
    </div>
    <img class="landing-img img-fluid" src="../assets/Imgs/Enter-the-Virtuverse.jpg" alt="background-img">


  </section>

  <!-- text heading section -->
  <section class="home">

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
              ENJOY.</h1>
          </div>

        </div>
      </div>
    </div>

  </section>

  <!-- about section -->
  <section class="about">

    <h2 class="about-heading pt-4 text-light">About Virtuverse</h2>

    <div class="about-content">

      <div class="container text-light">
        <div class="row align-items-center">
          <div class="col-sm-6 text-start">

            <img class="img-fluid" style="height: 20rem; width: 25rem;" src="../assets/Imgs/logo_transparent.png"
              alt="img">


          </div>

          <div class="col-sm-6">
            <div class="about-p">
             Welcome to our company, a leading provider of cutting-edge VR products designed to
              revolutionize the way people experience immersive entertainment, education, and training.<br>

             We are dedicated to creating high-quality VR products that offer unparalleled levels of immersion,
              interactivity, and realism. Our product line includes state-of-the-art VR headsets, controllers, and
              accessories that provide users with a truly immersive experience that transports them to new worlds and
              enables them to interact with virtual environments in ways that were previously impossible.<br><br>

              Our VR products are perfect for a wide range of applications, from gaming and entertainment to education and
              training. They are designed to provide users with an incredibly lifelike experience that allows them to
              explore new worlds, learn new skills, and have fun in ways that were previously unimaginable.<br><br>

            At our company, we are committed to innovation and constantly striving to push the boundaries of what is
              possible with VR technology. Our team of experts is dedicated to designing and developing the best VR
              products on the market, and we are proud to offer our customers a truly unique and unforgettable experience.<br><br>

            Whether you are a gamer, educator, or training professional, our VR products are sure to exceed your
              expectations and provide you with an unparalleled level of immersion and interactivity. Join us on our
              journey as we continue to push the boundaries of what is possible with VR technology.





            </div>

          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- cards section -->
  <section id="cards" style="padding-top: 5rem;">
    <div class="container">
      <div class="heading-product">
        <h2 class="products pb-4">Products in demand</h2>
      </div>
      <div class="row"  style="gap:2rem">
        <div class="col-sm">
          <div class="card">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="https://i.postimg.cc/tTwdky11/Oculus-Quest-2.jpg" class="img-fluid" />
              <a href="#!">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
              </a>
            </div>
            <div class="card-body">
              <h5 class="card-title">Oculus Quest 2</h5>
              <p class="card-text">he Oculus Quest 2 is a powerful and versatile VR headset that provides a high-quality immersive experience for users. Its standalone design and inside-out tracking make it easy to use and set up, while its powerful hardware and large library of VR games and applications.
                content.</p>
              <a href="#!" class="btn btn-dark">Purchase</a>
            </div>
          </div>
        </div>

        <div class="col-sm">
          <div class="card">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="https://i.postimg.cc/6QSnV7hN/HTC_Vive_Cosmos_Elite.jpg" class="img-fluid" />
              <a href="#!">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
              </a>
            </div>
            <div class="card-body">
              <h5 class="card-title">HTC Vive Cosmos Elite</h5>
              <p class="card-text">Overall, the HTC Vive Cosmos Elite has high-resolution display, wide field of view, advanced audio and tracking technologies, and comfortable design make it a great choice for VR gaming, simulation, and other applications that require a high level of immersion and precision.
                content.</p>
              <a href="/products" class="btn btn-dark">Purchase</a>
            </div>
          </div>
        </div>

        <div class="col-sm">
          <div class="card">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="https://i.postimg.cc/qq66QZSj/Valve-Index.jpg" class="img-fluid" />
              <a href="/products">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
              </a>
            </div>
            <div class="card-body">
              <h5 class="card-title">Valve Index</h5>
              <p class="card-text">The Valve Index is a high-quality VR headset designed for architectures who have the digital skills to create designs with VR. Its high-resolution display, wide field of view, advanced audio and tracking technologies, and comfortable design making it great for architecture.
              </p>
              <a href="/products" class="btn btn-dark">Purchase</a>
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
    FooterC,

  }
}
</script>
<style scoped>
.about-home {
  height: 100vh;
  width: 100wv;
  padding-top: 1rem;
}

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
.home {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about {
  background: #8E2DE2;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #3a03a9, #903dda);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #321076, rgb(70, 17, 116));
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 100vh;

}

.about-content {
  align-items: center;
  align-content: center;
  padding-top: 1rem;
}

.about p {
  justify-content: center;
  padding: 11rem;

}

.about-p {
  padding: 50px !important;
  word-wrap: break-word;
}

#cards {
  height: 100vh;
}



/* about section text */
@media screen and (max-width: 600px) {
  .text-container {
    padding: 10px;
  }

  .text-container {
    font-size: 1rem;
    line-height: 1.2;
  }
}


/* h1 resposiveness */
@media screen and (max-width: 700px) {
  .flex h1 {
    font-size: 40px;
    gap: 10rem !important;
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
    gap: 7rem !important;
  }
}

@media screen and (max-width: 400px) {
  .flex h1 {
    font-size: 30px;
    gap: 6rem !important;
  }
}

@media screen and (max-width: 300px) {
  .flex h1 {
    font-size: 30px;
    gap: 5rem !important;
  }
}

/* video */
@media screen and (max-width: 600px) {

  .video-container,
  video {

    display: none;
  }
}

@media screen and (min-width:600px) {
  .landing-img {
    display: none;

  }
}

@media screen and (max-width:600px) {
  .landing-img {
    display: block;

  }
}

@media screen and (max-width:300px) {
  .about {
    height: 100%
  }
}

@media screen and (max-width:600px) {
  .about {
    height: 100%
  }
}

@media screen and (max-width:900px) {
  .about {
    height: 100%
  }
}</style>

