<script setup lang="ts">

    interface AsyncDataOportunidades {
        jornada: string,
        lugar: string,
        name: string,
        slug: string,
        subtitle: string,
    }


    interface AsyncDataResult {
        data: {
            status: string;
            items: AsyncDataOportunidades[] | null;
        };
    }


    useHead({
        title : 'Oportunidades laborales - Garnier BBDO',
        meta: [
            { 
                name: 'description', 
                content: '¡Únete a nuestro equipo! Estamos en busca de talento apasionado y comprometido. Si eres una persona motivada, con habilidades excepcionales y deseas formar parte de nuestro crecimiento, ¡envíanos tu CV ahora! Descubre oportunidades emocionantes y contribuye a un ambiente de trabajo dinámico.' 
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
                content: 'Oportunidades laborales - Garnier BBDO' 
            },
            { 
                name: 'twitter:title', 
                content: 'Oportunidades laborales - Garnier BBDO' 
            },
            { 
                name: 'og:description', 
                content: '¡Únete a nuestro equipo! Estamos en busca de talento apasionado y comprometido. Si eres una persona motivada, con habilidades excepcionales y deseas formar parte de nuestro crecimiento, ¡envíanos tu CV ahora! Descubre oportunidades emocionantes y contribuye a un ambiente de trabajo dinámico.' 
            },
            { 
                name: 'twitter:description', 
                content: '¡Únete a nuestro equipo! Estamos en busca de talento apasionado y comprometido. Si eres una persona motivada, con habilidades excepcionales y deseas formar parte de nuestro crecimiento, ¡envíanos tu CV ahora! Descubre oportunidades emocionantes y contribuye a un ambiente de trabajo dinámico.' 
            },
        ],
    });

    const { data } = await useAsyncData <AsyncDataResult> (
        'oportunidades',
        () => $fetch( `/api/empleos`, {
            method: 'GET',
            baseURL: 'https://admin.garnierbbdo.com',
        })
    );

    let oportunidadesData : AsyncDataOportunidades[] = data.value?.data.items as AsyncDataOportunidades[];



</script>

<template>
    <section class="page">
        <section class="oportunidades">
            <section>
                <h1>Crecé aquí</h1>
                <p class="font-linght"> En <strong class=""> Garnier BBDO</strong> creemos que la diversidad nos hace mejores en nuestro trabajo: Un ambiente inclusivo y con variados puntos de vista es el mejor catalizador de creatividad. </p>
                <p class="font-linght"><strong class="">Queremos personas </strong> con diferentes formas de ver el mundo, capacidades, identidades, formaciones y nacionalidades. Aplicá para trabajar aquí, no importa donde estés, <strong class=""> queremos crecer con vos.</strong></p>
            </section>
            <TrabajoAppTrabajoSlider :data="oportunidadesData"/>
        </section>
    </section>
</template>