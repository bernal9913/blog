<template>
  <div>
    <h1>Lista de Artículos</h1>
    <div v-for="articulo in articulos" :key="articulo.id">
      <app-articulo :articulo="articulo" />
      <router-link :to="{ name: 'DetalleArticulo', params: { id: articulo.id } }">Leer más</router-link>
    </div>
  </div>
</template>

<script>
import Articulo from '../components/Articulo.vue';

export default {
  components: {
    'app-articulo': Articulo,
  },
  data() {
    return {
      articulos: [
        {
          id: 1,
          titulo: 'Título del Artículo 1',
          contenido: 'Contenido del artículo 1...',
        },
        {
          id: 2,
          titulo: 'Título del Artículo 2',
          contenido: 'Contenido del artículo 2...',
        },
        // Agrega más artículos aquí
      ],
    };
  },
};
</script>
