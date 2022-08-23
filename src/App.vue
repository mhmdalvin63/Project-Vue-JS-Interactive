<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    
    <img  alt="Vue logo" class="logo" src="@/assets/cvalvin.jpg" width="300"  />

    <div class="wrapper">
      <!-- <HelloWorld msg="Muhammad Alvin" /> -->
      <nav>
        <RouterLink to="/">About</RouterLink>
        <RouterLink to="/skill">Skill</RouterLink>
        <!-- <RouterLink to="/sosmed">Sosmed</RouterLink> -->
      </nav>
    </div>
    
    
  </header>
 

  <RouterView />

  <footer>
    <div class="footer-body">
      <div class="isi-footer">
      <img class="logo-footer" src="@/assets/whatsapp.svg" width="20"  />
      <h1>0888-1404-833</h1>
    </div>
    <div class="isi-footer">
      <img class="logo-footer" src="@/assets/instagram.svg" width="20"  />
      <h1>@vinscnd_</h1>
    </div>
    <div class="isi-footer">
      <img class="logo-footer" src="@/assets/github.svg" width="20"  />
      <h1>0888-1404-833</h1>
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
footer{
  background-color: #002B5B;
  height: 100px;
  margin-right: -600px;
  margin-left: -15px;
  margin-top: -7px;
}
footer h1{
  padding: 2;
  color: white;
  font-size: 15px;
  /* text-align: center; */
  margin-top: 7px;
}
.isi-footer{
  display: flex;
  gap: 1rem;
  margin-left: 20px;
}

</style>
