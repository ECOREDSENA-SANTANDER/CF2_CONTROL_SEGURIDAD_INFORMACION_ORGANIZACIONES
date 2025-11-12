<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p El componente formativo “Implementación y seguimiento de controles de seguridad de la información” tiene como propósito fortalecer las competencias necesarias para proteger los activos de información dentro de una organización. En primer lugar, aborda el estudio de los controles de seguridad de la información, destacando su propósito, los diferentes tipos existentes, la normativa legal que los respalda, su relación con los activos y los riesgos, así como los criterios de selección que permiten definir cuáles son los más adecuados para cada contexto. Posteriormente, se profundiza en la implementación de controles, proceso que implica establecer criterios de priorización según el nivel de riesgo, definir los roles y responsabilidades del personal encargado y ejecutar las acciones técnicas y administrativas que garanticen su correcta aplicación. 
    p.mb-4 Finalmente, se desarrolla la fase de monitoreo y verificación, orientada a supervisar y validar la efectividad de los controles mediante estrategias de seguimiento, la definición de periodicidades y la generación de registros y evidencias que respalden la gestión realizada. En conjunto, este componente promueve una visión integral de la seguridad de la información basada en la gestión del riesgo, el cumplimiento normativo y la mejora continua de los procesos organizacionales.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Se presenta el proceso de implementación y seguimiento de controles de seguridad de la información, organizado en tres etapas: controles de seguridad, implementación y monitoreo y verificación. En él se abordan aspectos como el propósito y tipos de controles, la normativa legal, su relación con los riesgos, la priorización y asignación de responsabilidades, así como la supervisión, periodicidad y registro de evidencias. En conjunto, busca garantizar la protección de la información y la mejora continua en la gestión de la seguridad organizacional.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
