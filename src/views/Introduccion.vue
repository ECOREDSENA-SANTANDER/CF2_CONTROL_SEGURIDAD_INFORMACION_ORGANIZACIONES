<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info.text-color-sistema
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-md-2.col-3.mb-3.mb-md-0
        img(src='@/assets/curso/temas/intro/1.svg', alt='')
      .col-lg-11.col-md-10
        p.mb-0 En un entorno donde las amenazas digitales evolucionan de manera constante, los controles de seguridad de la información se consolidan como herramientas fundamentales para mitigar riesgos, proteger los activos y garantizar la continuidad de las operaciones. Más allá de la identificación de vulnerabilidades, las organizaciones deben implementar medidas concretas que aseguren la confidencialidad, integridad y disponibilidad de la información, fortaleciendo la confianza tanto interna como externa.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .tarjeta.bg-1.p-4.mb-4
          p.mb-0 El presente componente formativo tiene como propósito brindar a los aprendices los conocimientos y habilidades necesarias para comprender el propósito, los tipos y la función de los controles de seguridad, así como su relación con los activos y los riesgos previamente identificados. Asimismo, se abordarán los procesos de selección, implementación y priorización de controles, junto con el rol de los responsables en su gestión, promoviendo un enfoque integral y proactivo.
        p La formación se desarrollará mediante experiencias prácticas, ejercicios de priorización y simulaciones de aplicación de controles, complementadas con estrategias de monitoreo, verificación y registro de evidencias. De este modo, los aprendices podrán transferir los conocimientos adquiridos a contextos reales, contribuyendo activamente al fortalecimiento de la seguridad de la información en sus entornos productivos.
      .col-lg-5.d-none.d-md-block
        img(src='@/assets/curso/temas/intro/2.png', alt='')


    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
