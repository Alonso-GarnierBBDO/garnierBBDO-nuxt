
<template>
    <div class="video_portafolio">
        <video id="video" ref="videoPortafolio" class="video-js vjs-theme-city" :poster="posterVideo">
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

                VideoJS(this.$refs.videoPortafolio as HTMLElement, {
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

                this.screenElement();

            },

            screenElement(){
                
                const titleComponent : HTMLElement | null = window.innerWidth <= 550 ? document.querySelector('.portafolio-individual .page .header .title') : document.querySelector('.portafolio-individual .page .header');
                const videoComponent : HTMLElement | null = document.querySelector('.video_portafolio');

                if(titleComponent && videoComponent){

                    const titleHeight = titleComponent.clientHeight + 60;
                    const screenHeight = window.innerHeight;

                    videoComponent.style.height = `${ screenHeight - titleHeight}px`;


                }
            }

        },
        mounted() {

            this.video_item();

            window.onresize = () => {

                this.screenElement();

            }

        },

    }

</script>
