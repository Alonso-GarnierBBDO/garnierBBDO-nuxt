<script setup lang="ts">

    interface AsyncDataPortafolio {
        name: string,
        client: string,
        image: string,
        slug: string,
        video: string,
    }


    interface AsyncDataResult {
        data: {
            status: string,
            items: {
                items: AsyncDataPortafolio[]
            }
        }
    }

    useHead({
        title : 'Garnier BBDO - Agencia de año',
        meta: [
            { 
                name: 'description', 
                content: 'Somos agencia de publicidad costarricense, fundada por Alberto H. Garnier en 1921, y parte del BBDO Worldwide Network desde 1985. A Costa Rican Advertising Agency, founded by Alberto H. Garnier in 1921, and part of the BBDO Worldwide Network since 1985.' 
            }
        ],
    });


    // Header
    const { data } = await useAsyncData <AsyncDataResult> (
        'portafolio',
        () => $fetch( `/api/portafolio`, {
            method: 'GET',
            baseURL: 'https://admin.garnierbbdo.com',
        })
    );

</script>

<template>
    <div class="page portafolio">
        <h1>Portafolio Garnier BBDO</h1>
        <section class="all">
            <NuxtLink v-for="(item, key) in data?.data.items.items" :key="key" :style="{backgroundImage: `url(${item.image})`}" :to="`/insaltable/${item.slug}`" :title="item.name">
                <video v-if="key == 0" :poster="item.image" :src="item.video" muted autoplay loop></video>
                <!-- <PortafolioAppVideo v-if="key == 0" :video="item.video" :posterVideo="item.image"/> -->
                <section class="content">
                    <div>
                        <h2>{{ item.name }}</h2>
                        <span>{{ item.client }}</span>
                    </div>
                    <div class="next">
                        <button>
                            <BootstrapIcon name="arrow-right" />
                        </button>
                    </div>
                </section>
                
            </NuxtLink>
        </section>
    </div>
</template>