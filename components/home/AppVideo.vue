
<template>
    <div class="video_home">
        <video id="video" ref="videoHome" class="video-js vjs-theme-city" :poster="posterVideo">
            <source :src="videoItem">
        </video>
    </div>
</template>

<script lang="ts">

    import VideoJS from 'video.js';
    import 'video.js/dist/video-js.css';
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
                videoItem: this.videoDesk as string | undefined,
                width: 0 as number,
            }
        },
        methods:{
            
            selectVideo(){
                this.videoItem = window.innerWidth <= 550 ? this.videoMobile : this.videoDesk;
            },

            video_item(){
                
                this.selectVideo();

                VideoJS(this.$refs.videoHome as HTMLElement, {
                    autoplay: true,
                    muted: true,
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

            height_video(){

                // const element : HTMLElement = this.$refs.videoHome as HTMLElement;
                // const heightElement : number = window.innerHeight;
                // element.style.height = `${heightElement - 50}px`;

            }

        },
        mounted() {

            this.video_item();
            this.height_video();

            window.onresize = () => {
                this.height_video();
            }

        },

    }

</script>
