
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
                <a title="Linkedin" :href="data?.data.item.footer.linkedin" target="_blank" data-replace="Linkedin"><span>Linkedin</span></a>
                <a title="Instagram" :href="data?.data.item.footer.instagram" target="_blank" data-replace="Instagram"><span>Instagram</span></a>
                <a title="Whatsapp" :href="data?.data.item.footer.whatsapp" target="_blank" data-replace="Whatsapp"><span>Whatsapp</span></a>
            </section>
            <div class="first" >
                <section class="direction">
                    <a :title="data?.data.item.footer.email_contact" :href="`mailto:${data?.data.item.footer.email_contact}`" :data-replace="data?.data.item.footer.email_contact">
                        <span>{{ data?.data.item.footer.email_contact }}</span>
                    </a>
                    <span class="line"> / </span>
                    <a :title="data?.data.item.footer.phone" :href="`tel:${data?.data.item.footer.phone}`" :data-replace="data?.data.item.footer.phone">
                        <span>{{ data?.data.item.footer.phone }}</span>
                    </a>
                </section>
                <section class="location">
                    <p title="Vía Lindora, Edificio BLP, piso 2. Pozos 10903, San José, Costa Rica">Vía Lindora, Edificio BLP, piso 2. Pozos 10903, San José, Costa Rica</p>
                </section>
            </div>
            <section class="logos">
                <a title="Esencial Costa Rica" href="https://www.esencialcostarica.com" target="_blank">
                    <NuxtImg src="/img/esencial.webp" alt="Esencial Costa Rica" sizes="70px" />
                </a>
                <a title="Comunidad Costa Rica" href="https://comunidad.cr" target="_blank">
                    <NuxtImg src="/img/comunidad.webp" sizes="70px" alt="Comunidad Costa Rica"/>
                </a>
                <a title="Declaración de San Jose">
                    <NuxtImg src="/img/declaracion.webp" sizes="70px" alt="Declaración de San Jose"/>
                </a>
                <a title="Bandera Azul">
                    <NuxtImg src="/img/azul.webp" sizes="70px" alt="Bandera Azul"/>
                </a>
            </section>
            <section class="politicas">
                <p>
                    <a title="Políticas & Procedimientos" :href="data?.data.item.footer.politicas" target="_black">Políticas & Procedimientos</a> - <a :href="data?.data.item.footer.codigo" target="_black" title="Código de ética">Código de ética</a> <br/> <span>©1921 - {{ new Date().getFullYear()  }}</span>
                </p>
            </section>
        </section>
    </footer>
</template>