<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-color-sistema 1
      h1 Controles de seguridad de la información
        
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Propósito de los controles de seguridad de la información	



    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Tipos de controles



    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3.	Normativa legal 



    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4.	Relación con activos y riesgos



    #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.5.	Criterios de selección	 




</template>

<script>
export default {
  name: 'Tema1',
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
