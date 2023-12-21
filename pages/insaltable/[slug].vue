<script setup lang="ts">

    interface AsyncDataResult {
        data: {
            status: string,
            item: {
                titulo: string,
                images: string[]
                client: string,
                video: string,
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

</script>

<template>
    <div class="portafolio-individual">
        <PortafolioAppVideo  class="video" :video="data?.data.item.video"/>
        <section class="page content" id="content">
            <section class="title">
                <h1 :title="data?.data.item.titulo">{{ data?.data.item.titulo }} </h1>
                <a href="#content">
                    <BootstrapIcon name="arrow-down" />
                </a>
            </section>
            <section class="description">
                <p>{{ data?.data.item.description }}</p>
            </section>
            <section class="contenido" v-html="data?.data.item.content"></section>
            <section class="images">
                <NuxtPicture v-for="(item, key) in data?.data.item.images" :key="key" format="avif,webp" :src="item" />
            </section>
        </section>
    </div>
</template>