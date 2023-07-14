<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.py-0
    .col-12(data-aos="fade-up")
      p.mb-5 Para iniciar el desarrollo temático y conceptual de este componente formativo, es importante tener un contexto sobre lo que se tratará en él, por tal motivo, se presenta una breve introducción a través del siguiente video que enruta este aprendizaje:
    .col-12.mt-2(data-aos="fade-up")
      figure.mt-0
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/m9K2KDgv1LM" title="Tamizaje y atención de personas con riesgo alto frente al consumo, abuso y adicción de SPA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
  
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
