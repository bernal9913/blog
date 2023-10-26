<template>
  <div>
    <h1>Detalle del Artículo</h1>
    <app-articulo :articulo="articulo" />
    <router-link :to="{ name: 'ListaArticulos' }">Volver a la lista de artículos</router-link>
  </div>
</template>

<script>
import Articulo from "../components/Articulo.vue";

export default {
  components: {
    'app-articulo': Articulo,
  },
  data() {
    const id = this.$route.params.id;
    const articulo = this.obtenerArticuloPorId(id);
    return {
      articulo,
    };
  },
  methods: {
    obtenerArticuloPorId(id) {
      // Simula la obtención de un artículo por su ID desde una fuente de datos
      // Puedes implementar esto según tus necesidades reales
      return {
        id: id,
        titulo: `Título del Artículo ${id}`,
        contenido: `Contenido del artículo ${id}...`,
      };
    },
  },
};
</script>
