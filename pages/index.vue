
<script setup lang="ts">

    interface AsyncDataResult {
        data: {
            status: string,
            item: {
                desktop_video: string,
                image_home: string,
                mobile_video: string,
                notices: string[]
            }
        }
    }

    useHead({
        title : 'Garnier BBDO - Agencia de publicidad',
        meta: [
            { 
                name: 'description', 
                content: 'Somos agencia de publicidad costarricense, fundada por Alberto H. Garnier en 1921, y parte del BBDO Worldwide Network desde 1985. A Costa Rican Advertising Agency, founded by Alberto H. Garnier in 1921, and part of the BBDO Worldwide Network since 1985.' 
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
                content: 'Garnier BBDO - Agencia de publicidad' 
            },
            { 
                name: 'twitter:title', 
                content: 'Garnier BBDO - Agencia de publicidad' 
            },
            { 
                name: 'og:description', 
                content: 'Somos agencia de publicidad costarricense, fundada por Alberto H. Garnier en 1921, y parte del BBDO Worldwide Network desde 1985. A Costa Rican Advertising Agency, founded by Alberto H. Garnier in 1921, and part of the BBDO Worldwide Network since 1985.' 
            },
            { 
                name: 'twitter:description', 
                content: 'Somos agencia de publicidad costarricense, fundada por Alberto H. Garnier en 1921, y parte del BBDO Worldwide Network desde 1985. A Costa Rican Advertising Agency, founded by Alberto H. Garnier in 1921, and part of the BBDO Worldwide Network since 1985.' 
            },
        ],
    });


    // Obtenemos los datos del home

    // Header
    const { data, error } = await useAsyncData <AsyncDataResult> (
        'item',
        () => $fetch( `/api/home`, {
            method: 'GET',
            baseURL: 'https://admin.garnierbbdo.com',
        })
    );

    onMounted(() => {
        
        const video : HTMLElement | undefined = document.querySelector('.video_home_container') as HTMLElement | undefined;
        const heightScreen : number = window.innerHeight;

        function resize(){
            if(video){
                video.style.height = `${heightScreen - 50}px`
            }
        }

        resize();

        window.onresize = () => {
            resize();
        }


    });


</script>

<template>
    <div>
      <header>
        <ClientOnly>
            <HomeAppVideo class="video_home_container" :videoMobile="data?.data.item.mobile_video" :videoDesk="data?.data.item.desktop_video" :posterVideo="data?.data.item.image_home"/>
        </ClientOnly>
        <!-- Marquee -->
        <section id="marquee_item">
            <HomeAppMarquee :data="data?.data.item.notices"/>
        </section>
      </header>
      <HomeAppSlider/>
      <section class="insaltable_link">
        <NuxtLink to="/insaltable" title="Ver más">
            <span class="text">
                Ver más
            </span>
            <span class="icon">
                <BootstrapIcon name="arrow-right" />
            </span>
        </NuxtLink>
      </section>
    </div>
</template>