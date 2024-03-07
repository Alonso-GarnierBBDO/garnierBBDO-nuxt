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
                content: 'Descubre el poder de la excelencia en servicios con nuestra agencia. Colaboramos con una diversidad de clientes, desde startups innovadoras hasta empresas consolidadas, brindándoles soluciones personalizadas que impulsan su éxito. Con un enfoque centrado en la calidad y la innovación, nuestra agencia se enorgullece de construir relaciones sólidas y alcanzar resultados excepcionales. Confía en nosotros para elevar tu marca y alcanzar nuevos niveles de éxito empresarial.' 
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
                content: 'Descubre el poder de la excelencia en servicios con nuestra agencia. Colaboramos con una diversidad de clientes, desde startups innovadoras hasta empresas consolidadas, brindándoles soluciones personalizadas que impulsan su éxito. Con un enfoque centrado en la calidad y la innovación, nuestra agencia se enorgullece de construir relaciones sólidas y alcanzar resultados excepcionales. Confía en nosotros para elevar tu marca y alcanzar nuevos niveles de éxito empresarial.' 
            },
            { 
                name: 'twitter:description', 
                content: 'Descubre el poder de la excelencia en servicios con nuestra agencia. Colaboramos con una diversidad de clientes, desde startups innovadoras hasta empresas consolidadas, brindándoles soluciones personalizadas que impulsan su éxito. Con un enfoque centrado en la calidad y la innovación, nuestra agencia se enorgullece de construir relaciones sólidas y alcanzar resultados excepcionales. Confía en nosotros para elevar tu marca y alcanzar nuevos niveles de éxito empresarial.' 
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
                <picture>
                    <img :src="value.image" :alt="value.name">
                </picture>
                <span :title="`Desde ${value.year}`">Desde {{ value.year }} </span>
            </article>
        </section>
    </div>
</template>