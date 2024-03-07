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
                content: 'Descubre la inspiradora historia detrás de Garnier. Desde nuestros humildes comienzos hasta convertirnos en líderes de la industria, hemos construido nuestro camino con pasión, innovación y dedicación. Explora cómo hemos superado desafíos, hemos alcanzado éxitos significativos y hemos forjado relaciones sólidas. Únete a nosotros en este viaje, donde cada capítulo cuenta una historia de crecimiento, creatividad y compromiso con la excelencia. ¡Conoce más sobre nuestra historia única y sé parte de nuestro emocionante futuro!' 
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
                content: 'Descubre la inspiradora historia detrás de Garnier. Desde nuestros humildes comienzos hasta convertirnos en líderes de la industria, hemos construido nuestro camino con pasión, innovación y dedicación. Explora cómo hemos superado desafíos, hemos alcanzado éxitos significativos y hemos forjado relaciones sólidas. Únete a nosotros en este viaje, donde cada capítulo cuenta una historia de crecimiento, creatividad y compromiso con la excelencia. ¡Conoce más sobre nuestra historia única y sé parte de nuestro emocionante futuro!' 
            },
            { 
                name: 'twitter:description', 
                content: 'Descubre la inspiradora historia detrás de Garnier. Desde nuestros humildes comienzos hasta convertirnos en líderes de la industria, hemos construido nuestro camino con pasión, innovación y dedicación. Explora cómo hemos superado desafíos, hemos alcanzado éxitos significativos y hemos forjado relaciones sólidas. Únete a nosotros en este viaje, donde cada capítulo cuenta una historia de crecimiento, creatividad y compromiso con la excelencia. ¡Conoce más sobre nuestra historia única y sé parte de nuestro emocionante futuro!' 
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
        <section>
            <section class="image">
                <img :src="data?.data.items.photo" :alt="data?.data.items.title" :title="data?.data.items.title"/>
            </section>
            <section class="content">
                <h1 :title="data?.data.items.title">{{ data?.data.items.title }}</h1>
                <div class="description" v-html="data?.data.items.description"></div>
            </section>
        </section>
    </div> 

</template>