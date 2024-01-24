<script setup lang="ts">


    interface AsyncDataResult {
        data: {
            status: string,
            items: {
                title: string,
                photo: string,
                description: string
            }
        }
    }

    useHead({
        title : 'Nuestra historia - Garnier BBDO',
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
                content: 'Nuestra historia - Garnier BBDO' 
            },
            { 
                name: 'twitter:title', 
                content: 'Nuestra historia - Garnier BBDO' 
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


    const { data } = await useAsyncData <AsyncDataResult> (
        'about',
        () => $fetch( `/api/about`, {
            method: 'GET',
            baseURL: 'https://admin.garnierbbdo.com',
        })
    );


</script>

<template>

    <div class="page desde-1921">
        <section class="image">
            <NuxtImg :src="data?.data.items.photo" :alt="data?.data.items.title" :title="data?.data.items.title"/>
        </section>
        <section class="content">
            <h1 :title="data?.data.items.title">{{ data?.data.items.title }}</h1>
            <div class="description" v-html="data?.data.items.description"></div>
        </section>
    </div> 

</template>