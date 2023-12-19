<script lang="ts">

    import videojs from 'video.js';
    import 'video.js/dist/video-js.css';


    export default{
        name: 'VideoPlayer',
        props: {
            video: String,
            posterVideo: String,
        },
        data() {
            return {
                player: null as any,
                videoOptions: {
                    autoplay: true,
                    controls: true,
                    loop: true,
                    muted: true,
                    poster: this.posterVideo,
                    sources: [
                        {
                            src: this.video,
                            type: 'video/webm',
                        }
                    ],
                }
            }
        },
        mounted() {

            const element : HTMLVideoElement = this.$refs.videoPlayer as HTMLVideoElement;

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
        <video ref="videoPlayer" class="video-js"></video>
    </div>
</template>