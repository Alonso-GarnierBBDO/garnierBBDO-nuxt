
<script lang="ts">

    import 'swiper/css/grid';
    import 'swiper/css';

    interface AsyncDataOportunidades {
        jornada: string,
        lugar: string,
        name: string,
        slug: string,
        subtitle: string,
    }

    interface AsyncDataResult {
        data: {
            status: string,
            items: AsyncDataOportunidades[]
        }
    }

    export default{
        name: 'Slider Oportunidades',
        props: {
            data: {
                type: Object as () => AsyncDataOportunidades[] | null,
                required: false,
            }
        },
        data(){
            return{
                columns: 1 as number,
                space: 0 as number,
                touch: false,
                grid: 10 as number,
                clickable: true as boolean,
                jsonData: [] as AsyncDataOportunidades[],
            }
        },
        methods: {

            setValues(){

                if(this.data){
                    this.jsonData = this.data;

                    this.screen();

                    window.onresize = () => {
                        this.screen();
                    }
                }

            },

            screen(){
                
                if(window.innerWidth >= 1600){
                    this.columns = 3;
                    this.space = 30;
                    this.grid = 3;
                    this.touch = true;
                }else if(window.innerWidth >= 1100){
                    this.columns = 2;
                    this.space = 30;
                    this.grid = 3;
                    this.touch = true;
                }else if(window.innerWidth >= 550){
                    this.columns = 2;
                    this.space = 30;
                    this.grid = 4;
                    this.touch = true;
                    this.clickable = false;
                }else{
                    this.columns = 1;
                    this.clickable = false;
                    // this.grid = this.jsonData.length;
                }
            },
            getAllWorks(){


            }

        },
        
        mounted(){
            this.setValues();
        }

    }


</script>

<template>
    <section class="works">
        <Swiper  
            :modules="[SwiperGrid, SwiperPagination]"
            :spaceBetween="15"
            :slidesPerView="columns"
            :grid="{
                rows: grid,
            }"
            :pagination="{
              clickable: clickable,
            }"
            class="mySwiper"
        >
            <SwiperSlide v-for="item in jsonData" class="item_slider">
                <NuxtLink class="item" :to="`oportunidades/${item.slug}`">
                    <h2>{{ item.name }}</h2>
                    <span>{{ item.subtitle }}</span>
                    <div>
                        <span>{{ item.lugar }} - <strong>{{ item.jornada }}</strong></span>
                        <button>
                            <BootstrapIcon name="arrow-right" />    
                        </button>
                    </div>
                </NuxtLink>
            </SwiperSlide>


        </Swiper>
    </section>
</template>