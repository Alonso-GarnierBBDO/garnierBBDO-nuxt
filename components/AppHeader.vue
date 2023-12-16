<template>
  <nav>
    <AppLogoGarnier />
    <input type="checkbox" id="openMenu" />
    <label for="openMenu">
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
            <a href="">Garnier</a>
          </li>
          <li>
            <a href="">Insaltable</a>
          </li>
          <li>
            <a href="">Clientes</a>
          </li>
          <li>
            <a href="">Desde 1921</a>
          </li>
          <li>
            <a href="">Vacantes</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <!-- <a href="">Ingresar</a> -->
          </li>
        </ul>
      </div>
    </section>
  </nav>
</template>
