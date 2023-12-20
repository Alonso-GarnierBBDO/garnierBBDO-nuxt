<script lang="ts">

    import videojs from 'video.js';
    import 'video.js/dist/video-js.css';


    export default{
        name: 'VideoPlayer',
        props: {
            videoDesk: String,
            posterVideo: String,
            videoMobile: String
        },
        data() {
            return {
                player: null as any,
                videoOptions: {
                    autoplay: true,
                    controls: true,
                    loop: true,
                    muted: true,
                    preload: true,
                    poster: this.posterVideo,
                    sources: [
                        {
                            src: this.videoDesk,
                            type: 'video/webm',
                        }
                    ],
                }
            }
        },
        mounted() {

            const element : HTMLVideoElement = this.$refs.videoPlayer as HTMLVideoElement;

            this.videoOptions.sources[0].src = window.innerWidth <= 550 ? this.videoMobile : this.videoDesk;

            if(element){

                this.player = videojs(element, this.videoOptions, () => {
                    this.player.log('onPlayerReady', this);
                });

            }

        },

        beforeDestroy() {

            if (this.player) {
                this.player.dispose();
            }
        }

    }

</script>


<template>
    <div class="video_home">
        <video ref="videoPlayer" class="video-js" :src="videoOptions.sources[0].src" playsinline="true" :type="videoOptions.sources[0].type"></video>
    </div>
</template>