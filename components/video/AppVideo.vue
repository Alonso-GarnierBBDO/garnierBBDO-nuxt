<template>
    <div class="video-garnier">
        <video :src="video" controls :poster="poster"></video>
    </div>
</template>

<script lang="ts">


    export default{
        props: {
            video: String,
            poster: String
        },
        data(){
            return {

            }
        }
    }

</script>