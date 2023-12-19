<template>
  <nav :class="`${routerName == 'index' || routerName == 'insaltable-slug' ? 'fixed' : ''} ${top ? 'top' : ''} ${bottom ? 'bottom' : ''}`">
    <div class="nav">
      <NuxtLink to="/" data-replace="Garnier">
        <AppLogoGarnier />
      </NuxtLink>
      <input type="checkbox" ref="checkMenu" id="openMenu" />
      <label for="openMenu" class="menu">
        <BootstrapIcon class="menu" name="list" />
      </label>
      <label for="openMenu" class="capa_exit"></label>
      <section class="items_menu">
        <div>
          <label for="openMenu" class="exit">
            <BootstrapIcon class="close" name="x-lg" />
          </label>
          <ul>
            <li>
              <NuxtLink onclick="closeMenu" to="/" data-replace="Garnier"><span>Garnier</span></NuxtLink>
            </li>
            <li>
              <NuxtLink onclick="closeMenu" to="/insaltable" data-replace="Insaltable"><span>Insaltable</span></NuxtLink>
            </li>
            <li>
              <a href="" data-replace="Clientes"><span>Clientes</span></a>
            </li>
            <li>
              <a href="" data-replace="Desde 1921"><span>Desde 1921</span></a>
            </li>
            <li>
              <a href="" data-replace="Oportunidades"><span>Oportunidades</span></a>
            </li>
            <li>
              <a href="" data-replace="Blog"><span>Blog</span></a>
            </li>
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

      watch(() => route.path, () => {
        routerName.value = route.name?.toString();
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
    },
  }

</script>
