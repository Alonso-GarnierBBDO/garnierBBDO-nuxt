
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


</script>

<template>
    <div>
      <header>
        <HomeAppVideo :videoMobile="data?.data.item.mobile_video" :videoDesk="data?.data.item.desktop_video" :posterVideo="data?.data.item.image_home"/>
        <!-- Marquee -->
        <Vue3Marquee class="marquee_home" :clone="true" :duration="20">
            <div v-for="(value, key) in data?.data.item.notices" :key="key"> 
                <p>{{ value }}<span>-</span></p> 
            </div>
        </Vue3Marquee>
      </header>
      <HomeAppSlider/>
      <section class="insaltable_link">
        <NuxtLink to="/insaltable">
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