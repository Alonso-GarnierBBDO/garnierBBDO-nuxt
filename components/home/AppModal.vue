<script>
    export default {
        data(){
            return{
                removeItem: false,
                view: false,
            }
        },
        methods: {

            modalExit() {

                this.removeItem  = true;
                document.documentElement.style.overflowY = "initial";
                window.localStorage.setItem('modal', 'true');

                setTimeout( () => {
                    this.view = false;
                    document.body.style.overflow = 'auto';
                    
                }, 400 )

            },

        },
        mounted(){

            /**
             * Configuracion anterior
             */

            // const showModal = window.localStorage.getItem('modal');
            // if(!showModal){
            //     this.view = true;
            //     document.body.style.overflow = 'hidden';
            // }

            /**
             * Configuracion actual
             */

             this.view = true;
            document.body.style.overflow = 'hidden';

        }
    }
</script>

<template>
    <section class="modal_home">

        <section v-if="view" :class="`modal_alert ${removeItem ? 'remove' : ''}`" v-on:click="modalExit">
            <section class="modal" v-on:click="e => e.stopPropagation()">
                <button v-on:click="modalExit">
                    <i class="bi bi-x-lg"></i>
                </button>
                <section class="content_modal">
                    <h2 title="Agencia del año en Effie y Volcanes">Agencia del año en Effie y Volcanes</h2>
                    <div class="subcontent">
                        <p>
                        3 Años consecutivos ganando <strong> Oro en Effie Latam </strong> • Única Agencia de CR Ganadora en <strong> Effie Latam 2023</strong> • Finalistas en Cannes • Ganadores en el Ojo de Iberoamérica
                        </p>
                    </div>
                    <div class="image">
                        <!-- <img src="../../assets/img/volcan_logo.svg" alt="Logo volcan"> -->
                    </div>
                </section>
            </section>
        </section>

    </section>
</template>