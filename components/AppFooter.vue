
<script setup lang="ts">

    interface AsyncDataResult {
        data: {
            status: string,
            item: {
                footer: {
                    codigo: string,
                    email_contact: string,
                    facebook: string,
                    instagram: string,
                    linkedin: string,
                    phone: string,
                    politicas: string,
                    whatsapp: string,
                },
            }
        }
    }


    // Obtenemos los datos del footer

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
    <footer>
        <hr>
        <section class="container_footer">
            <section class="social">
                <a :href="data?.data.item.footer.linkedin" target="_blank" data-replace="Linkedin"><span>Linkedin</span></a>
                <a :href="data?.data.item.footer.instagram" target="_blank" data-replace="Instagram"><span>Instagram</span></a>
                <a :href="data?.data.item.footer.whatsapp" target="_blank" data-replace="Whatsapp"><span>Whatsapp</span></a>
            </section>
            <div class="first" >
                <section class="direction">
                    <a :href="`mailto:${data?.data.item.footer.email_contact}`" :data-replace="data?.data.item.footer.email_contact">
                        <span>{{ data?.data.item.footer.email_contact }}</span>
                    </a>
                    <span class="line"> / </span>
                    <a :href="`tel:${data?.data.item.footer.phone}`" :data-replace="data?.data.item.footer.phone">
                        <span>{{ data?.data.item.footer.phone }}</span>
                    </a>
                </section>
                <section class="location">
                    <p>Vía Lindora, Edificio BLP, piso 2. Pozos 10903, San José, Costa Rica</p>
                </section>
            </div>
            <section class="logos">
                <a href="https://www.esencialcostarica.com" target="_blank">
                    <NuxtImg src="/img/esencial.webp" sizes="70px" />
                </a>
                <a href="https://comunidad.cr" target="_blank">
                    <NuxtImg src="/img/comunidad.webp" sizes="70px" />
                </a>
                <a>
                    <NuxtImg src="/img/declaracion.webp" sizes="70px" />
                </a>
                <a>
                    <NuxtImg src="/img/azul.webp" sizes="70px" />
                </a>
            </section>
            <section class="politicas">
                <p>
                    <a :href="data?.data.item.footer.politicas" target="_black">Políticas & Procedimientos</a> - <a :href="data?.data.item.footer.codigo" target="_black">Código de ética</a> <span>©1921 - {{ new Date().getFullYear()  }}</span>
                </p>
            </section>
        </section>
    </footer>
</template>