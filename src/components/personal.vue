<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
 
<div class="container">

  <div class="info">
    <div class="nama">
      <h2>I'm <b>Muhammad Alvin</b></h2>
      <p>Web Developer</p>
    </div>
  </div>

  <div class="info1">
      <div class="kiri">
      <h1>Umur</h1>
      <h1>Alamat</h1>
      <h1>Email</h1>
      <h1>Kontak</h1>
    </div>
    <div class="kanan">
      <h1>17 Tahun</h1>
      <h1>Depok, Jawa Barat</h1>
      <h1>alvinmhmd36@gmail.com</h1>
      <h1>0888-1404-833</h1>
    </div>
    </div>
</div>
  
</template>

<style>

.container{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 100px 0 0 -100px;
  /* background-color: bisque; */
  color: rgb(192, 181, 181);
}
.info1{
  display: flex;
  gap: 5rem;
  /* font-size: 13px; */
}
.nama{
  font-size: 20px;
}
.nama p{
  font-size: 20px;
}
.nama h2{
  color: white;
  font-size: 50px;
}
.nama b{
  font-weight: bold;
}
.kiri h1{
  font-size: 30px;
  font-weight: bold;
}
.kiri{
  color: white;
}
.kanan h1{
  font-size: 30px;
}

</style>
