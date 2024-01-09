<script lang="ts">
    import type { NuxtLink } from '#build/components';


    interface WorkItem {
        name: string,
        client: string,
        slug: string,
        image: string
    }

    export default{
        
    data() {
        return {
            items: [] as WorkItem[],
            status: 0 as Number,
            perPage: 1 as number,
            space: 0 as number
        };
    },
    methods: {
        async portafolio() {
            const portfolioResponse = await fetch('https://admin.garnierbbdo.com/api/portafolio');
            this.status = portfolioResponse.status;
            await portfolioResponse.json().then(data => {
                this.items = data.data.items.items.splice(0, 10);
            });
        },
        viewPerPage(){
            if(window.innerWidth >= 1600){
                this.perPage = 5;
                this.space = 30;
            }else if(window.innerWidth >= 1100){
                this.perPage = 4;
                this.space = 30;
            }else if(window.innerWidth >= 901){
                this.perPage = 3;
                this.space = 30;
            }else if(window.innerWidth >= 550){
                this.perPage = 2;
                this.space = 30;
            }else{
                this.perPage = 1;
                this.space = 0;
            }

        }
    },
    mounted(){
        this.viewPerPage();
    },
    created() {
        this.portafolio();
    },
}

</script>

<template>
    <div class="slider">
        <Swiper 
            v-on:resize="viewPerPage" 
            :modules="[SwiperAutoplay]" 
            :autoplay="{
                delay: 2000,
                disableOnInteraction: true,
            }"
            :spaceBetween="space"
            :slidesPerView="perPage"
            v-if="status == 200">
            <SwiperSlide v-for="(item, key) in items" :key="key" class="trabajo_slider">
                <section class="item">
                    <NuxtLink :title="item.name" :to="`/insaltable/${item.slug}`">
                        <NuxtImg :src="item.image" :alt="item.name"/>
                        <section>
                            <div>
                                <h2 :title="item.name">{{ item.name }}</h2>
                                <span :title="item.client">{{ item.client }}</span>
                            </div>
                            <div class="next">
                                <button title="Ingresar">
                                    <BootstrapIcon name="arrow-right" />
                                </button>
                            </div>
                        </section>
                    </NuxtLink>
                </section>
            </SwiperSlide>
        </Swiper>
    </div>
</template>