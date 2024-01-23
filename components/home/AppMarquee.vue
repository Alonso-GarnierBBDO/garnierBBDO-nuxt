<script>

    import { Vue3Marquee } from 'vue3-marquee';

    export default{

        components: {
            Vue3Marquee
        },
        props: {
            data: {
                type: Array,
                required: true
            }
        }

    }

</script>

<template>
    <div>
    <Vue3Marquee class="marquee_home" :clone="true" :duration="20">
        <div v-for="(value, key) in data" :key="key"> 
            <p>{{ value }}<span>-</span></p> 
        </div>
    </Vue3Marquee>
    </div>
</template>