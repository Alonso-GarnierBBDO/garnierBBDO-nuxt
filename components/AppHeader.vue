<template>
  <nav :class="`${routerName == 'clientes' ? 'white' : ''} ${routerName == 'index' || routerName == 'insaltable-slug' ? 'fixed' : ''} ${top ? 'top' : ''} ${bottom ? 'bottom' : ''}`">
    <div class="nav">
      <NuxtLink to="/" data-replace="Garnier" title="Inicio">
        <AppLogoGarnier />
      </NuxtLink>
      <input type="checkbox" ref="checkMenu" id="openMenu" />
      <label for="openMenu" class="menu" title="Abrir menu">
        <BootstrapIcon class="menu" name="list" />
      </label>
      <label for="openMenu" class="capa_exit"></label>
      <section class="items_menu">
        <div>
          <label for="openMenu" class="exit" title="Cerrar menu">
            <BootstrapIcon class="close" name="x-lg" />
          </label>
          <ul>
            <li>
              <NuxtLink to="/" data-replace="Garnier" title="Garnier"><span>Garnier</span></NuxtLink>
            </li>
            <li>
              <NuxtLink to="/insaltable" data-replace="Insaltable" title="Insaltable"><span>Insaltable</span></NuxtLink>
            </li>
            <li>
              <NuxtLink to="/clientes" href="" data-replace="Clientes" title="Clientes"><span>Clientes</span></NuxtLink>
            </li>
            <li>
              <NuxtLink to="/desde-1921" href="" data-replace="Desde 1921" title="Desde 1921"><span>Desde 1921</span></NuxtLink>
            </li>
            <li>
              <NuxtLink to="/oportunidades" data-replace="Oportunidades" title="Oportunidades"><span>Oportunidades</span></NuxtLink>
            </li>
            <!-- <li>
              <a href="" data-replace="Blog" title="Blog"><span>Blog</span></a>
            </li> -->
            <!-- <li>
              <a href="">{{ routerName }}</a>
            </li> -->
          </ul>
        </div>
      </section>
    </div>
  </nav>
</template>


<script lang="ts">

  import { ref } from 'vue';

  export default{
    setup(){

      const route = useRoute();
      let routerName : Ref<string | undefined> = ref(route.name?.toString());

      const colorBackground = () => {
        const htmlElement : HTMLElement | undefined = document.body as HTMLElement | undefined;
        const router = useRoute().name;

        if(router == 'clientes' && htmlElement){
          htmlElement.classList.add('blue');
        }else if(htmlElement){
          htmlElement.classList.remove('blue');
        }
      } 

      watch(() => route.path, () => {
        routerName.value = route.name?.toString();
        colorBackground();
      });

      onMounted( () =>{
        colorBackground();
      })



      return {
        routerName
      }

    },
    data(){
      return {
        previosScrollY: 0  as number,
        top: false,
        bottom: false,
      }
    },
    methods: {
      menuScroll(){

        window.onscroll = () => {

          if(window.scrollY >= 120){
            let currentScrollY = window.scrollY;
            if(currentScrollY < this.previosScrollY){
              this.top = true;
              this.bottom = false;
            }else{
              this.top = false;
              this.bottom = true;
            }

            this.previosScrollY = currentScrollY;

          }else {
            this.top = false;
            this.bottom = false;
          }

        }
      },
      colorBackground(){
        
        


      }
    },
    watch: {
      $route(to, from){
        const inputElement : HTMLInputElement  = this.$refs.checkMenu as HTMLInputElement;
        if(inputElement){
          inputElement.checked = false;
        }
        
      }
    },
    mounted(){
      this.menuScroll();
      // this.colorBackground();
    },
  }

</script>
