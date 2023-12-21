
<template>
    <div class="video_portafolio">
        <video id="video" class="video-js vjs-theme-city" :poster="posterVideo">
            <source :src="videoItem">
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
            video: String,
            posterVideo: String,
        },
        data() {
            return {
                videoItem: this.video,
                width: 0,
            }
        },
        methods:{
            
            
            video_item(){

                VideoJS('#video', {
                    autoplay: false,
                    muted: false,
                    controls: true,
                    loop: true,
                    preload: true,
                    sources: [
                        {
                            src: this.videoItem,
                            type: `video/${this.videoItem?.split('.').pop()}`
                        }, 
                    ]
                });

            },

        },
        mounted() {

            this.video_item();

        },

    }

</script>
