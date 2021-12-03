<template>
  <div>
    <Header/>
    <Banner/>
    <AboutUs/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>

import Header from '../components/header.vue';
import Banner from '../components/banner.vue';
import AboutUs from '../components/about-us.vue';
import Contact from '../components/contact.vue';
import Footer from '../components/footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Banner, 
    AboutUs,
    Contact, 
    Footer
  }
}
</script>

