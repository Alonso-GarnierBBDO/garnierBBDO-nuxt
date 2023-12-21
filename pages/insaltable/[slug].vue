<script setup lang="ts">

    interface AsyncDataResult {
        data: {
            status: string,
            item: {
                titulo: string | undefined,
                images: string[]
                client: string,
                video: string | undefined,
                content: string,
                description: string,
            }
        }
    }

    const route = useRoute();
    const param = route.params.slug;

    // Insaltable individual
    const { data, status } = await useAsyncData <AsyncDataResult> (
        'portafolio',
        () => $fetch( `/api/portafolio/${param}`, {
            method: 'GET',
            baseURL: 'https://admin.garnierbbdo.com',
        })
    );
    

    if(!data.value){
        showError(
            createError({
                statusCode: 404,
                statusMessage : 'Not Found'
            })
        )
    }

    useHead({
        title : `Garnier BBDO - ${data.value?.data.item.titulo}`,
        meta: [
            { 
                name: 'description', 
                content: data.value?.data.item.description
            },
            { 
                name: 'og:image', 
                content: data.value?.data.item.images[0] ? data.value?.data.item.images[0] : '/favicon.ico' 
            },
            { 
                name: 'twitter:image', 
                content: data.value?.data.item.images[0] ? data.value?.data.item.images[0] : '/favicon.ico' 
            },
            { 
                name: 'og:title', 
                content: `Garnier BBDO - ${data.value?.data.item.titulo}`,
            },
            { 
                name: 'twitter:title', 
                content: `Garnier BBDO - ${data.value?.data.item.titulo}`,
            },
            { 
                name: 'og:description', 
                content: data.value?.data.item.description ? data.value?.data.item.description : 'Somos agencia de publicidad costarricense, fundada por Alberto H. Garnier en 1921, y parte del BBDO Worldwide Network desde 1985. A Costa Rican Advertising Agency, founded by Alberto H. Garnier in 1921, and part of the BBDO Worldwide Network since 1985.' 
            },
            { 
                name: 'twitter:description', 
                content: data.value?.data.item.description ? data.value?.data.item.description : 'Somos agencia de publicidad costarricense, fundada por Alberto H. Garnier en 1921, y parte del BBDO Worldwide Network desde 1985. A Costa Rican Advertising Agency, founded by Alberto H. Garnier in 1921, and part of the BBDO Worldwide Network since 1985.' 
            },
        ],
    });

    onMounted(() => {   

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        
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
    <div class="portafolio-individual" v-if="data?.data.item">
        <PortafolioAppVideo class="video" :video="data?.data.item.video"/>
        <section class="page content" id="content">
            <div class="header">
                <section class="title">
                    <h1 :title="data?.data.item.titulo">{{ data?.data.item.titulo }} </h1>
                    <a href="#content">
                        <BootstrapIcon name="arrow-down" />
                    </a>
                </section>
                <section class="description">
                    <p>{{ data?.data.item.description }}</p>
                </section>
            </div>
            <section class="contenido" v-html="data?.data.item.content"></section>
            <section class="images">
                <NuxtPicture v-for="(item, key) in data?.data.item.images" :key="key" format="avif,webp" :src="item" />
            </section>
        </section>
    </div>
</template>