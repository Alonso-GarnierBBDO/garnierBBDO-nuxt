
<template>
    <div class="video_home">
        
        <video src="" id="video" class="video-js vjs-theme-city">
            <source src="//vjs.zencdn.net/v/oceans.mp4">
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
                video: this.videoDesk,
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

            }
        },
        mounted() {

            this.video = window.innerWidth <= 550 ? this.videoMobile : this.videoDesk;

            this.video_item();

        },

    }

</script>
