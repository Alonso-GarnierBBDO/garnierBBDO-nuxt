
<script lang="ts">

    import 'swiper/css/grid';
    import 'swiper/css';

    export default{

        data(){
            return{
                columns: 1 as number,
                space: 0 as number,
                touch: false,
                grid: 10 as number,
                clickable: true as boolean
            }
        },
        methods: {

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
                }
            }

        },
        mounted(){
            this.screen();

            window.onresize = () => {
                this.screen();
            }

        }

    }

</script>

<!-- :slides-per-view="2" -->

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
            <SwiperSlide class="item_slider">
                <NuxtLink class="item">
                    <h2>Ejecutivo/a de cuentas</h2>
                    <span>Publicidad</span>
                    <div>
                        <span>Santa Ana, San Jose, Costa Rica - <strong>Hidrido</strong></span>
                        <button>
                            <BootstrapIcon name="arrow-right" />
                        </button>
                    </div>
                </NuxtLink>
            </SwiperSlide>

            <!-- --------------------------------------------------------------------------------- -->

            <SwiperSlide class="item_slider">
                <NuxtLink class="item">
                    <h2>Ejecutivo/a de cuentas</h2>
                    <span>Publicidad</span>
                    <div>
                        <span>Santa Ana, San Jose, Costa Rica - <strong>Hidrido</strong></span>
                        <button>
                            <BootstrapIcon name="arrow-right" />
                        </button>
                    </div>
                </NuxtLink>
            </SwiperSlide>

            <SwiperSlide class="item_slider">
                <NuxtLink class="item">
                    <h2>Ejecutivo/a de cuentas</h2>
                    <span>Publicidad</span>
                    <div>
                        <span>Santa Ana, San Jose, Costa Rica - <strong>Hidrido</strong></span>
                        <button>
                            <BootstrapIcon name="arrow-right" />
                        </button>
                    </div>
                </NuxtLink>
            </SwiperSlide>

            <SwiperSlide class="item_slider">
                <NuxtLink class="item">
                    <h2>Ejecutivo/a de cuentas</h2>
                    <span>Publicidad</span>
                    <div>
                        <span>Santa Ana, San Jose, Costa Rica - <strong>Hidrido</strong></span>
                        <button>
                            <BootstrapIcon name="arrow-right" />
                        </button>
                    </div>
                </NuxtLink>
            </SwiperSlide>

            <SwiperSlide class="item_slider">
                <NuxtLink class="item">
                    <h2>Ejecutivo/a de cuentas</h2>
                    <span>Publicidad</span>
                    <div>
                        <span>Santa Ana, San Jose, Costa Rica - <strong>Hidrido</strong></span>
                        <button>
                            <BootstrapIcon name="arrow-right" />
                        </button>
                    </div>
                </NuxtLink>
            </SwiperSlide>

            <SwiperSlide class="item_slider">
                <NuxtLink class="item">
                    <h2>Ejecutivo/a de cuentas</h2>
                    <span>Publicidad</span>
                    <div>
                        <span>Santa Ana, San Jose, Costa Rica - <strong>Hidrido</strong></span>
                        <button>
                            <BootstrapIcon name="arrow-right" />
                        </button>
                    </div>
                </NuxtLink>
            </SwiperSlide>

            <SwiperSlide class="item_slider">
                <NuxtLink class="item">
                    <h2>Ejecutivo/a de cuentas</h2>
                    <span>Publicidad</span>
                    <div>
                        <span>Santa Ana, San Jose, Costa Rica - <strong>Hidrido</strong></span>
                        <button>
                            <BootstrapIcon name="arrow-right" />
                        </button>
                    </div>
                </NuxtLink>
            </SwiperSlide>

            <SwiperSlide class="item_slider">
                <NuxtLink class="item">
                    <h2>Ejecutivo/a de cuentas</h2>
                    <span>Publicidad</span>
                    <div>
                        <span>Santa Ana, San Jose, Costa Rica - <strong>Hidrido</strong></span>
                        <button>
                            <BootstrapIcon name="arrow-right" />
                        </button>
                    </div>
                </NuxtLink>
            </SwiperSlide>

            <SwiperSlide class="item_slider">
                <NuxtLink class="item">
                    <h2>Ejecutivo/a de cuentas</h2>
                    <span>Publicidad</span>
                    <div>
                        <span>Santa Ana, San Jose, Costa Rica - <strong>Hidrido</strong></span>
                        <button>
                            <BootstrapIcon name="arrow-right" />
                        </button>
                    </div>
                </NuxtLink>
            </SwiperSlide>

            <SwiperSlide class="item_slider">
                <NuxtLink class="item">
                    <h2>Ejecutivo/a de cuentas</h2>
                    <span>Publicidad</span>
                    <div>
                        <span>Santa Ana, San Jose, Costa Rica - <strong>Hidrido</strong></span>
                        <button>
                            <BootstrapIcon name="arrow-right" />
                        </button>
                    </div>
                </NuxtLink>
            </SwiperSlide>

            <SwiperSlide class="item_slider">
                <NuxtLink class="item">
                    <h2>Ejecutivo/a de cuentas</h2>
                    <span>Publicidad</span>
                    <div>
                        <span>Santa Ana, San Jose, Costa Rica - <strong>Hidrido</strong></span>
                        <button>
                            <BootstrapIcon name="arrow-right" />
                        </button>
                    </div>
                </NuxtLink>
            </SwiperSlide>

            <SwiperSlide class="item_slider">
                <NuxtLink class="item">
                    <h2>Ejecutivo/a de cuentas</h2>
                    <span>Publicidad</span>
                    <div>
                        <span>Santa Ana, San Jose, Costa Rica - <strong>Hidrido</strong></span>
                        <button>
                            <BootstrapIcon name="arrow-right" />
                        </button>
                    </div>
                </NuxtLink>
            </SwiperSlide>

            <SwiperSlide class="item_slider">
                <NuxtLink class="item">
                    <h2>Ejecutivo/a de cuentas</h2>
                    <span>Publicidad</span>
                    <div>
                        <span>Santa Ana, San Jose, Costa Rica - <strong>Hidrido</strong></span>
                        <button>
                            <BootstrapIcon name="arrow-right" />
                        </button>
                    </div>
                </NuxtLink>
            </SwiperSlide>

            <SwiperSlide class="item_slider">
                <NuxtLink class="item">
                    <h2>Ejecutivo/a de cuentas</h2>
                    <span>Publicidad</span>
                    <div>
                        <span>Santa Ana, San Jose, Costa Rica - <strong>Hidrido</strong></span>
                        <button>
                            <BootstrapIcon name="arrow-right" />
                        </button>
                    </div>
                </NuxtLink>
            </SwiperSlide>

            <SwiperSlide class="item_slider">
                <NuxtLink class="item">
                    <h2>Ejecutivo/a de cuentas</h2>
                    <span>Publicidad</span>
                    <div>
                        <span>Santa Ana, San Jose, Costa Rica - <strong>Hidrido</strong></span>
                        <button>
                            <BootstrapIcon name="arrow-right" />
                        </button>
                    </div>
                </NuxtLink>
            </SwiperSlide>


            <!-- --------------------------------------------------------------------------------- -->


        </Swiper>
    </section>
</template>