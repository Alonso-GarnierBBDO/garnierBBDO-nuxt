<script setup lang="ts">

    interface AsyncDataOportunidad {
        jornada: string,
        lugar: string,
        name: string,
        slug: string,
        subtitle: string,
        responsabilidades: string,
        tareas: string,
        requisitos: string
    }


    interface AsyncDataResult {
        data: {
            status: string;
            items: AsyncDataOportunidad
        };
    }

    const route = useRoute();
    const param = route.params.slug;


    const { data } = await useAsyncData <AsyncDataResult> (
        'oportunidad',
        () => $fetch( `/api/empleos/${param}`, {
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
        title : `${data.value?.data.items.name} - Garnier BBDO`,
        meta: [
            { 
                name: 'description', 
                content: `Únete a nuestro equipo dinámico como ${data.value?.data.items.name} y haz avanzar tu carrera en un entorno colaborativo. Estamos buscando un profesional, con habilidades excepcionales para la comunicación y la resolución de problemas.`
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
                content: `${data.value?.data.items.name} - Garnier BBDO`,
            },
            { 
                name: 'twitter:title', 
                content: `${data.value?.data.items.name} - Garnier BBDO`,
            },
            { 
                name: 'og:description', 
                content: `Únete a nuestro equipo dinámico como ${data.value?.data.items.name} y haz avanzar tu carrera en un entorno colaborativo. Estamos buscando un profesional, con habilidades excepcionales para la comunicación y la resolución de problemas.`
            },
            { 
                name: 'twitter:description', 
                content: `Únete a nuestro equipo dinámico como ${data.value?.data.items.name} y haz avanzar tu carrera en un entorno colaborativo. Estamos buscando un profesional, con habilidades excepcionales para la comunicación y la resolución de problemas.`
            },
        ],
    });

    const dataPuesto = data.value?.data.items;


</script>


<template>
    <section class="page oportunidad_laboral">
        <section class="content">
            <section class="header">
                <section class="subtitle">
                    <h2>{{ dataPuesto?.subtitle }}</h2>
                    <span>{{ dataPuesto?.jornada }}</span>
                </section>
                <section class="title">
                    <h1>{{ dataPuesto?.name }}</h1>
                </section>
            </section>
            <section class="group">
                <h3>Responsabilidades</h3>
                <section class="info" v-html="dataPuesto?.responsabilidades"></section>
            </section>
            <section class="group">
                <h3>Especificaciones</h3>
                <section class="info" v-html="dataPuesto?.tareas"></section>
            </section>
            <section class="group">
                <h3>Requisitos</h3>
                <section class="info" v-html="dataPuesto?.requisitos"></section>
            </section>
        </section>
        <TrabajoAppFormulario :title="dataPuesto?.name"/>
    </section>
</template>