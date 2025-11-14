<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-color-sistema 2
      h1 Implementación de controles	 

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Criterio de priorización 

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Proceso de implementación de controles

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Roles y responsabilidades en seguridad de la información

    .div(data-aos='fade')  
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 11. 
        span 
      .tabla-a.color-acento-contenido
        table(alt="")
          thead
            tr.bg-color-acento-contenido
              th 
              th 
              th 
          tbody.text-start
            tr
              td.fw-bold 
              td 
              td
              

</template>

<script>
export default {
  name: 'Tema2',
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
