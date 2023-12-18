<template>
  <nav :class="`${nameRoute == 'index' ? 'fixed' : ''}`">
    <NuxtLink to="/" data-replace="Garnier">
      <AppLogoGarnier />
    </NuxtLink>
    <input type="checkbox" id="openMenu" />
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
            <NuxtLink to="/" data-replace="Garnier"><span>Garnier</span></NuxtLink>
          </li>
          <li>
            <NuxtLink to="/insaltable" data-replace="Insaltable"><span>Insaltable</span></NuxtLink>
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
          <!-- <li> -->
            <!-- <a href="">Ingresar</a> -->
          <!-- </li> -->
        </ul>
      </div>
    </section>
  </nav>
</template>


<script lang="ts">

  export default{

    data(){
      return {
        nameRoute: '',
        router: useRoute().name,
      }
    },
    watch: {
      $route(to, from){
        this.nameRoute = to.name.toString();
      }
    },
    created() {
      if(this.router){
        this.nameRoute = this.router.toString();
      }
    }

  }



</script>
