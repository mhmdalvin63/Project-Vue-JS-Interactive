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
        <div class="atas">
            <div class="judul">
                <h1>Tentang Saya</h1>
            </div>
            <div class="isi">
                <p>Saya seorang software engineering dengan pengetahuan
                    menyeluruh tentang sebuah perangkat lunak. Saya juga berpengalaman dalam koordinasi dengan para
                    pemangku kepentingan.
                </p>
            </div>
        </div>

        <div class="bawah">
            <div class="bawah-isi-1">
                <div class="judul-2">
                    <h1>Pendidikan</h1>
                </div>
                <div class="isi-2">
                    <h1>SMK Taruna Bhakti</h1>
                    <p>Rekayasa Perangkat Lunak</p>
                    <p style="margin-top: -10px;">2020 - 2023</p>
                </div>
            </div>

            <div class="bawah-isi-2">
                <div class="judul-2">
                    <h1>Sertifikat</h1>
                </div>
                <div class="isi-2">
                    <p>Sertifikat Teachcast With Oxford</p>
                </div>
            </div>
        </div>

    </div>
</template>

<style scope>
    .container {
        margin-top: 50px;
    }

    .judul h1 {
        font-size: 50px;
        color: white;
    }

    .judul-2 h1 {
        font-size: 30px;
        color: white;
    }
    .bawah{
        margin-top: 30px;
        display: flex;
        gap: 8rem ;
    }
    .isi-2 h1{
        font-size: 20px;
    }
</style>