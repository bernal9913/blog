<template>
  <div>
    <h2>{{ articulo.titulo }}</h2>
    <p>{{ articulo.contenido }}</p>
  </div>
</template>

<script>
  export default{
    props: ['articulo'],
  };
</script>
