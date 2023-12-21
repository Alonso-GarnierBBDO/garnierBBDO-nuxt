
<template>
    <div class="video_home" ref="videoHome">
        <video id="video" class="video-js vjs-theme-city" :poster="posterVideo">
            <source :src="width <= 550 ? videoMobile : videoDesk">
        </video>
    </div>
</template>

<script lang="ts">

    import VideoJS from 'video.js';
    import 'video.js/dist/video-js.css';
    // City
    import '@videojs/themes/dist/city/index.css';

    export default{
        name: 'VideoPlayer',
        props: {
            videoDesk: String,
            posterVideo: String,
            videoMobile: String
        },
        data() {
            return {
                videoItem: this.videoDesk,
                width: 0,
            }
        },
        methods:{
            video_item(){
                
                VideoJS('#video', {
                    autoplay: 'muted',
                    controls: true,
                    loop: true,
                    preload: true,
                });

            },

            height_video(){

                const element : HTMLElement = this.$refs.videoHome as HTMLElement;
                const heightElement : number = window.innerHeight;
                element.style.height = `${heightElement - 50}px`;

            }

        },
        mounted() {

            this.width = window.innerWidth;

            this.video_item();
            this.height_video();

        },

    }

</script>
