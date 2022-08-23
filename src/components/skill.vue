<script setup>
// import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
<div class="container-skill">
    <div class="kiri-isi">
        <div class="judul">
           <h1 class="judul-1">SKILL</h1>
        </div>
        <div class="isi-judul">

           <h1>UI/UX Design</h1>
           <div class="progress">
           <div class="progress-bar" role="progressbar"          style="width: 80%;" aria-valuenow="25"          aria-valuemin="0" aria-valuemax="100">80%</div>
           </div>

           <h1>HTML</h1>
           <div class="progress">
           <div class="progress-bar" role="progressbar"          style="width: 80%;" aria-valuenow="25"          aria-valuemin="0" aria-valuemax="100">70%</div>
           </div>

           <h1>CSS</h1>
           <div class="progress">
           <div class="progress-bar" role="progressbar"          style="width: 75%;" aria-valuenow="25"          aria-valuemin="0" aria-valuemax="100">70%</div>
           </div>

           <h1>MySQL</h1>
           <div class="progress">
           <div class="progress-bar" role="progressbar"          style="width: 75%;" aria-valuenow="25"          aria-valuemin="0" aria-valuemax="100">70%</div>
           </div>

           <h1>Bootstrap</h1>
           <div class="progress">
           <div class="progress-bar" role="progressbar"          style="width: 85%;" aria-valuenow="25"          aria-valuemin="0" aria-valuemax="100">85%</div>
           </div>

           <h1>Laravel</h1>
           <div class="progress">
           <div class="progress-bar" role="progressbar"          style="width: 80%;" aria-valuenow="25"          aria-valuemin="0" aria-valuemax="100">80%</div>
           </div>
        </div>
    </div>
    <div class="kanan-isi">
        <img class="logo-skill" src="@/assets/logofull.png" alt="" width="250">
    </div>
</div>
</template>

<style>
.container-skill{
    display: flex;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 12px 0 0 -150px;
  /* background-color: bisque; */
  color: rgb(192, 181, 181);
}
.judul{
    font-size: 25px;
}
.judul-1{
    margin-left: 250px;
    text-align: center;
    font-weight: bold;
    font-size: 50px;
}
.isi-judul{
    font-size: 12px;
}
.kiri-isi{
    margin-right: 20px;
    margin-left: -20px;
}
.kanan-isi{
    border: 5px;
    border-radius: 20px;
    background-color: rgb(224, 219, 219);
    margin-top: 90px;
    margin-left: 30px;
    width: 280px;
    height: 220px;
    
}
.logo-skill{
    margin-left: 20px;
    /* margin-top: 0px; */
}
.isi-judul h1{
    font-size: 30px;
}


</style>