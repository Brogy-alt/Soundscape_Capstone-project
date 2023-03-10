<template>
    <NavbarC/>
    <div>
        <section id="home">
        <div class="container-fluid">
        <div class="row d-flex flex-column flex-md-row">
            <div loading="lazy" class="img1">
                <div class="home-text col">
                    <!-- <h1 id="heading-homepage" class="lead">The New Wave Of Sound Ready For Your Use</h1> -->
                    <!-- <p class="home-p-text col">Welcome to my beat store! This was created for you are the writer, the performer, the beat maker, the producer, the engineer, the record label, the publisher, the videographer, the artist and the CREATOR. Music is the universal language that connects us across the globe. Music brings out our human emotions and music is the unified voice of the people and 
                    this site allows anyone to get all my creations and to hopefully work together in the future.
                    </p> -->

                </div>
            </div>
            </div>
        </div>
    </section>
    
</div>
<FooterC/>
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
    background-position: center 
    
}

/* landing page text */
#heading-homepage {
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-size: 72px;
    color: #FDF7FF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
 
}
    
</style>