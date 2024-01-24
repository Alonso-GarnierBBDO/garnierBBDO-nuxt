<script setup lang="ts">

    interface AsyncDataPortafolio {
        name: string,
        client: string,
        image: string,
        slug: string,
        video: string,
    }


    interface AsyncDataResult {
        data: {
            status: string,
            items: {
                items: AsyncDataPortafolio[] | undefined
            }
        }
    }

    useHead({
        title : 'Agencia del año - Garnier BBDO',
        meta: [
            { 
                name: 'description', 
                content: 'Descubre la excelencia creativa con nuestro portafolio galardonado. Como agencia del año, nos enorgullece presentar un repertorio excepcional de proyectos innovadores y exitosos. Desde estrategias de marca hasta campañas impactantes, explorar nuestro portafolio es sumergirse en un mundo de creatividad sin límites. Únete a nosotros en el viaje hacia soluciones visualmente impresionantes y resultados excepcionales. ¡Descubre cómo podemos llevar tu visión al siguiente nivel hoy mismo!' 
            },
            { 
                name: 'og:image', 
                content: '/favicon.ico' 
            },
            { 
                name: 'twitter:image', 
                content: '/favicon.ico' 
            },
            { 
                name: 'og:title', 
                content: 'Agencia del año - Garnier BBDO' 
            },
            { 
                name: 'twitter:title', 
                content: 'Agencia del año - Garnier BBDO' 
            },
            { 
                name: 'og:description', 
                content: 'Descubre la excelencia creativa con nuestro portafolio galardonado. Como agencia del año, nos enorgullece presentar un repertorio excepcional de proyectos innovadores y exitosos. Desde estrategias de marca hasta campañas impactantes, explorar nuestro portafolio es sumergirse en un mundo de creatividad sin límites. Únete a nosotros en el viaje hacia soluciones visualmente impresionantes y resultados excepcionales. ¡Descubre cómo podemos llevar tu visión al siguiente nivel hoy mismo!' 
            },
            { 
                name: 'twitter:description', 
                content: 'Descubre la excelencia creativa con nuestro portafolio galardonado. Como agencia del año, nos enorgullece presentar un repertorio excepcional de proyectos innovadores y exitosos. Desde estrategias de marca hasta campañas impactantes, explorar nuestro portafolio es sumergirse en un mundo de creatividad sin límites. Únete a nosotros en el viaje hacia soluciones visualmente impresionantes y resultados excepcionales. ¡Descubre cómo podemos llevar tu visión al siguiente nivel hoy mismo!' 
            },
        ],
    });


    // Insaltable
    const { data } = await useAsyncData <AsyncDataResult> (
        'portafolio',
        () => $fetch( `/api/portafolio`, {
            method: 'GET',
            baseURL: 'https://admin.garnierbbdo.com',
        })
    );


    onMounted(() => {
        
        const titleMobile : HTMLElement | undefined = document.querySelector('.title') as HTMLElement | undefined;
        const topResponsive : HTMLElement | undefined = document.querySelector('.header') as HTMLElement | undefined;
        const video : HTMLElement | undefined = document.querySelector('.video') as HTMLElement | undefined;
        let height : number = 0;
        const heightScreen : number = window.innerHeight - 30;
        const widthScreen : number = window.innerWidth;

        function resize(){
            if(titleMobile && video && topResponsive){
                if(widthScreen < 550){
                    height = titleMobile.offsetHeight + 30;
                    video.style.height = `${heightScreen - height}px`
                }else{
                    height = topResponsive.offsetHeight + 30;
                    video.style.height = `${heightScreen - height}px`

                }
            }
        }

        resize();

        window.onresize = () => {
            resize();
        }


    });

</script>

<template>
    <div class="page portafolio">
        <h1>Portafolio Garnier BBDO</h1>
        <section v-if="data?.data.items" class="all">

            <NuxtLink v-for="(item, key) in data?.data.items.items" :key="key" :style="{backgroundImage: `url(${item.image})`}" :to="`/insaltable/${item.slug}`" :title="item.name">
                <video v-if="key == 0" :poster="item.image" :src="item.video" muted autoplay loop></video>
                <section class="content">
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
    </div>
</template>