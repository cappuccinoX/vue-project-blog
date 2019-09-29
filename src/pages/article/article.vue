<template>
    <div class="article-card-container">
        <Button @click="draw">click</Button>
        <Button @click="rotate">rotate</Button>
        <canvas id="canvasId" width="400" height="400"></canvas>
<!--        <article-card></article-card>-->
    </div>
</template>
<script>
    import articleCard from './components/articleCard'
    export default {
        components: {
            articleCard
        },
        data() {
            return{}
        },
        created () {
            this.createImage()
        },
        methods: {
            draw() {
                console.log(111)
                const canvas = document.querySelector("canvas");
                const ctx = canvas.getContext('2d')
                const img  =  new Image();
                img.src = "https://at-common-service-dev.atfxdev.com/api/v1/uploads/imgPreview/1569739323617991.jpeg";
                ctx.drawImage(img,0 ,0)
            },
            rotate() {
                console.log(22)
                const canvas = document.querySelector('canvas')
                const ctx = canvas.getContext('2d')
                ctx.toDataURL()
            },
            createImage() {
                const canvas = document.createElement('canvas')
                const ctx = canvas.getContext('2d')
                console.log(ctx)
                const img = new Image()
                img.src = "http://avatar.csdn.net/5/6/7/1_jslang.jpg";
                ctx.drawImage(img, 0, 0)
            }
        }
    }
</script>
<style>

</style>
