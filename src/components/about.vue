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
    <div class="judul">
        <h1>Tentang Saya</h1>
    </div>
    <div class="isi">
        <p>Saya seorang software engineering dengan pengetahuan
menyeluruh tentang sebuah perangkat lunak. Saya juga berpengalaman dalam koordinasi dengan para pemangku kepentingan.</p>
    </div>
</div>
</template>

<style scope>
.container{
    margin-top: 50px;
}
.judul h1{
    color: white;
}
.isi p{
    color: white;
}
</style>
