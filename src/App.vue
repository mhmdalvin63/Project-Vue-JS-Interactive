<script setup>
  import {
    RouterLink,
    RouterView
  } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/cvalvin.jpg" width="300" />

    <div class="wrapper">
      <!-- <HelloWorld msg="Muhammad Alvin" /> -->
      <nav>
        <RouterLink to="/">Profil</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/skill">Skill</RouterLink>
        <!-- <RouterLink to="/sosmed">Sosmed</RouterLink> -->
      </nav>
    </div>


  </header>


  <RouterView />

  <footer>
    <div class="footer-first">
      <div class="footer-sosmed">
        <p>Sosial Media</p>
        <div class="footer-body">
          <div class="isi-footer">
            <img class="logo-footer" src="@/assets/whatsapp.svg" width="20" />
            <a href="">0888-1404-833</a>
          </div>
        </div>

        <div class="isi-footer">
          <img class="logo-footer" src="@/assets/instagram.svg" width="20" />
          <a href="https://www.instagram.com/vinscnd_/">@vinscnd_</a>
        </div>

        <div class="isi-footer">
          <img class="logo-footer" src="@/assets/github.svg" width="20" />
          <a href="https://github.com/mhmdalvin63">github.com/mhmdalvin63</a>
        </div>
      </div>
      <div class="alamat">
         <div class="kanan">
          <p>Jl. Pekapuran No.17a, Sukatani, Kec. Tapos, Kota Depok, Jawa Barat 16454</p>
        </div>
        <div class="kiri">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d542.3183363089207!2d106.88880307183291!3d-6.402076869872888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb3e468bd797%3A0x720e1b57a712363a!2sJl.%20Pekapuran%20No.17a%2C%20Sukatani%2C%20Kec.%20Tapos%2C%20Kota%20Depok%2C%20Jawa%20Barat%2016454!5e1!3m2!1sid!2sid!4v1661237247848!5m2!1sid!2sid"
          width="300" class="maps" style="border:0; " allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
       
        
        
      </div>



      
    </div>


  </footer>

</template>

<style scoped>
  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  .logo {
    display: block;
    /* margin: 0 auto 2rem; */
  }


  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 6rem;
  }

  nav a.router-link-exact-active {
    /* color: var(--color-text); */
    color: white;
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    /* margin-left: 60px; */
  }

  nav a:first-of-type {
    border: 0;
  }

  @media (min-width: 1024px) {
    header {
      /* display: flex; */
      margin: 50px 50px 50px 70px;
      place-items: center;
      padding-right: calc(var(--section-gap) / 10);
    }

    .logo {
      margin: -10px 3rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
      /* background-color: red; */
    }

    nav {
      /* background-color: rgb(114, 27, 27); */
      background-color: #132244;
      color: white;
      position: absolute;
      width: 1200px;
      text-align: left;
      margin-left: -86px;
      font-size: 1rem;

      padding: 30px 0;
      margin-top: -32.5rem;
    }
  }

  /* ===== FOOTER ===== */
  footer {
    background-color: #002B5B;
    height: 200px;
    margin-right: -600px;
    margin-left: -15px;
    margin-top: -7px;
  }

  footer a{
    text-decoration: underline;
    width: 120px;
    color: white;
    font-size: 15px;
    margin-top: 7px;
  }

  .isi-footer {
    display: flex;
    gap: 1rem;
  }
  .isi-footer img{
    margin-top: 10px;
  }
  .footer-first{
    margin-top: 5px;
    display: flex;
    gap: 10rem;
    /* align-items: flex-end; */
    margin-left: 20%;
  }
  .alamat{
    display: flex;
    /* gap: 1rem; */
    margin-top: 20px;
  }
  .alamat p{
    margin-left: 100px;
    color: white;
    padding-right: 20px;
  }
  .footer-sosmed{
    margin-top: 20px;
  }
  .maps{
    margin-right: 50px;
  }
  .footer-sosmed p{
    color: whitesmoke;
  }
  .footer-body{
    margin-top: -15px;
  }
  
</style>