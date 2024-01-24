<script setup lang="ts">

    interface AsyncDataClientes {
        name: string,
        year: string,
        link: string,
        image: string,
    }

    interface AsyncDataResult {
        data: {
            status: string,
            items: AsyncDataClientes[] | undefined
        }
    }

    useHead({
        title : 'Nuestros clientes - Garnier BBDO',
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
                content: 'Nuestros clientes - Garnier BBDO' 
            },
            { 
                name: 'twitter:title', 
                content: 'Nuestros clientes - Garnier BBDO' 
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


    // Insaltable
    const { data } = await useAsyncData <AsyncDataResult> (
        'empresas',
        () => $fetch( `/api/empresas`, {
            method: 'GET',
            baseURL: 'https://admin.garnierbbdo.com',
        })
    );


</script>

<template>
    <div class="page clientes">

        <h1>Garnier BBDO - Clientes</h1>

        <section class="logos">
            <article v-for="(value, key) in data?.data.items" :key="key" :title="value.name">
                <NuxtPicture :src="value.image" sizes="120px" :alt="value.name"/>
                <span :title="`Desde ${value.year}`">Desde {{ value.year }} </span>
            </article>
        </section>
    </div>
</template>