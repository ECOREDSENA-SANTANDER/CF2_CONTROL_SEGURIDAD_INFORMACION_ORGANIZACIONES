<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-color-sistema 2
      h1 Implementación de controles	 

    .bloque-texto-g.color-secundario.bg-2.p-3.p-sm-4.p-md-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La implementación de controles de seguridad corresponde a la etapa en la que las políticas y planes definidos por la organización se traducen en acciones concretas dentro de la gestión de la seguridad de la información. De acuerdo con la norma ISO/IEC 27001, en esta fase se seleccionan, adaptan y aplican los controles necesarios para mitigar los riesgos identificados, asegurando que cada medida esté alineada con los objetivos estratégicos y operativos de la empresa.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Criterio de priorización 

    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-7(data-aos="fade-right")
        .row.justify-content-center.mb-4          
          .col-lg-10.col-md-10
            p.mb-0 La priorización de controles y acciones correctivas consiste en organizar los riesgos identificados en la empresa con el fin de determinar cuáles deben abordarse primero. Este proceso permite orientar los esfuerzos y recursos hacia aquellas áreas donde la reducción del riesgo sea más significativa. Así, la organización puede centrarse en las vulnerabilidades con mayor probabilidad de explotación o con un impacto más alto sobre los activos críticos (PENTERA, 2024).
          .col-lg-2.col-md-2.d-none.d-md-block
            img(src='@/assets/curso/temas/t1/deco1.svg', alt='')
        .bg-4.tarjeta.p-4.mb-4.mb-lg-0
          p.mb-0 Para ello, quienes realizan el análisis consideran diversos factores al momento de establecer las prioridades y decidir a qué riesgos se les aplicarán los controles, entre los cuales se destacan los siguientes:
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/2.png', alt='')

    SlyderF.mb-5(columnas="col-lg-4 col-md-6" data-aos="fade-down")
      .tarjeta.bg-4.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-md-7.col-5
            img(src='@/assets/curso/temas/t2/tarj1-1.svg' alt='')
        h4.text-center Probabilidad
        p Hace referencia a la posibilidad de que la empresa sufra un ataque o incidente de seguridad, considerando factores como la exposición, las vulnerabilidades existentes y la capacidad de los atacantes.
      .tarjeta.bg-4.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-md-7.col-5
            img(src='@/assets/curso/temas/t2/tarj1-2.svg' alt='')
        h4.text-center Impacto
        p Corresponde a las consecuencias que podría generar un evento adverso sobre la organización, afectando su operación, reputación o recursos económicos.
      .tarjeta.bg-4.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-md-7.col-5
            img(src='@/assets/curso/temas/t2/tarj1-3.svg' alt='')
        h4.text-center Valor del activo
        p Evalúa la relevancia estratégica de los datos, sistemas o infraestructuras que podrían verse comprometidos ante un incidente, teniendo en cuenta su aporte a los objetivos del negocio.
      .tarjeta.bg-4.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-md-7.col-5
            img(src='@/assets/curso/temas/t2/tarj1-4.svg' alt='')
        h4.text-center Costo de mitigación
        p Representa la inversión necesaria (en dinero, tiempo y recursos humanos) para implementar acciones que reduzcan o controlen los riesgos identificados.
      .tarjeta.bg-4.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-md-7.col-5
            img(src='@/assets/curso/temas/t2/tarj1-5.svg' alt='')
        h4.text-center Cumplimiento normativo
        p Analiza el grado de exposición a sanciones o incumplimientos legales y regulatorios en caso de que los riesgos no sean gestionados de manera adecuada.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.bg-2.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/3.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Después del proceso de evaluación, los riesgos pueden clasificarse según su nivel de prioridad. Generalmente, se organizan en cuatro categorías: crítico, alto, medio y bajo; sin embargo, algunas organizaciones prefieren utilizar un esquema simplificado de tres niveles (alto, medio y bajo), de acuerdo con sus necesidades, recursos y criterios internos de gestión.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-3.col-md-6.mb-3
        .tarjeta.tarjeta-slide.arriba.bg-5(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenido.p-4
              h4 Riesgos críticos
              p.mb-0 Tienen una alta probabilidad de ocurrencia y un impacto severo. Pueden provocar la pérdida de información vital, la caída total de la red o la interrupción completa de las operaciones. Requieren atención inmediata y una respuesta prioritaria.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t2/tarj2-1.png')})`}")
      .col-lg-3.col-md-6.mb-3
        .tarjeta.tarjeta-slide.arriba.bg-5(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4
              h4 Riesgos altos
              p.mb-0 Combinan una probabilidad media o alta con un impacto significativo. Afectan activos de gran valor y pueden generar interrupciones relevantes en los procesos. Demandan soluciones rápidas y efectivas.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t2/tarj2-2.png')})`}")
      .col-lg-3.col-md-6.mb-3
        .tarjeta.tarjeta-slide.arriba.bg-5
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4
              h4 Riesgos medios
              p.mb-0 No representan una amenaza inmediata para los activos esenciales, pero si no se controlan, pueden agravarse con el tiempo. Ejemplo: detección temprana de virus o accesos no autorizados a datos de baja sensibilidad.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t2/tarj2-3.png')})`}")
      .col-lg-3.col-md-6.mb-3
        .tarjeta.tarjeta-slide.arriba.bg-5
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4
              h4 Riesgos bajos
              p.mb-0 Presentan baja probabilidad e impacto mínimo. Incluyen vulnerabilidades menores, como fallos de #[em software] o intentos de #[em phishing]. Se gestionan mediante medidas preventivas, como parches de seguridad y monitoreo continuo.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t2/tarj2-4.png')})`}")

    .tarjeta.bg-1.p-4.px-lg-5
      p.mb-0 Es importante tener en cuenta que la priorización presenta ciertas limitaciones. Entre ellas se encuentran la complejidad de los entornos interconectados, la subjetividad en la valoración humana, las restricciones de recursos y la constante evolución de las amenazas. Por lo tanto, este proceso debe ser dinámico y revisarse y ajustarse continuamente, de acuerdo con la periodicidad establecida por las directivas de la empresa (PENTERA, 2024).


    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Proceso de implementación de controles

    .bg-5.p-4.p-lg-0.mb-5(data-aos="fade-down")
      .row.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/4.png', alt='')
        .col-lg-6
          img.w-70.mb-3(src='@/assets/curso/temas/t2/5.svg', alt='')
          p En la implementación de controles, no basta con definir cuáles se aplicarán, sino que es clave establecer un proceso práctico que facilite su ejecución, de forma sencilla y repetible, entonces para que las cosas no se queden en teoría, hay que trabajar desde la identificación de hallazgos hasta la definición de acciones concretas, garantizando que los recursos utilizados se puedan usar de forma eficiente y que las decisiones tomadas se hagan con base en los objetivos de la organización. Una forma en que se puede plantear es la siguiente: 

    div.mb-5(data-aos='fade')
      .titulo-sexto.color-acento-contenido
        h5 Figura 2.
        span Proceso de la implementación 
      figure
        img(src='@/assets/curso/temas/t2/fig2.svg', alt='El proceso inicia con la recolección y consolidación de la información necesaria para el análisis. Luego se realiza la evaluación de los factores relevantes que pueden influir en la situación. Posteriormente, se lleva a cabo el cálculo y la priorización de los elementos identificados, determinando cuáles deben ser atendidos primero. Después se procede a la clasificación, ordenando la información o los riesgos según su nivel o categoría. A continuación, se desarrolla la planificación de la respuesta, estableciendo las acciones o estrategias que se implementarán. Finalmente, el proceso culmina con el monitoreo y la reevaluación, donde se hace seguimiento continuo y se ajustan las estrategias según los resultados obtenidos.')

    p.mb-4 Donde cada uno de estos pasos representa: 

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-8.mb-3.mb-lg-0
        TabsD.color-primario
          .tarjeta.bg-tab-a.p-4(titulo="Recolección y consolidación")
            h4 Recolección y consolidación
            p Registrar hallazgos (vulnerabilidades, exposiciones, incidentes) y asociarlos con los activos afectados.
          .tarjeta.bg-tab-a.p-4(titulo="Evaluación de factores")
            h4 Evaluación de factores
            p Calificar probabilidad, impacto y valor del activo; incluir costos de mitigación y requisitos regulatorios.
          .tarjeta.bg-tab-a.p-4(titulo="Cálculo y priorización")
            h4 Cálculo y priorización
            p Generar puntuación de riesgo (por ejemplo: probabilidad × impacto), ordenar riesgos y ajustar según costos y viabilidad operativa.
          .tarjeta.bg-tab-a.p-4(titulo="Clasificación")
            h4 Clasificación
            p Ubicar cada riesgo en niveles: crítico, alto, medio o bajo; asignar tiempos objetivo de acción: inmediato, 30 días, 90 días o monitoreo continuo.
          .tarjeta.bg-tab-a.p-4(titulo="Planificación de la respuesta")
            h4 Planificación de la respuesta
            p Definir acciones específicas (parche, ajuste de configuración, control compensatorio, monitoreo) y asignar responsables y recursos.
          .tarjeta.bg-tab-a.p-4(titulo="Monitoreo y re - evaluación")
            h4 Monitoreo y re - evaluación
            p Revisar y actualizar la priorización periódicamente o ante cambios en el entorno o detección de nuevos riesgos.
      .col-lg-4.col-md-7.col-10(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/6.jpg', alt='')


    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Roles y responsabilidades en seguridad de la información

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-md-10.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/7.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-2.col-md-2.d-none.d-md-block
            img(src='@/assets/curso/temas/t1/deco1.svg', alt='')
          .col-lg-10.col-md-10
            p.mb-0 La cláusula 5.3 de la norma ISO/IEC 27001 establece que la alta dirección debe definir y asignar los roles, responsabilidades y autoridades relacionadas con la seguridad de la información, asegurando que dicha asignación quede debidamente documentada y comunicada a toda la organización (Holloway, 2025a).
        p Complementariamente, el anexo A, control A.5.2 de la norma ISO/IEC 27001:2022, indica que todos los empleados deben comprender y asumir responsabilidades específicas en materia de seguridad. Esto incluye a los propietarios de activos, quienes son responsables de su protección diaria (Holloway, 2025b).
        p A continuación, se presentan ejemplos de roles y responsabilidades para mayor claridad:

    .tarjeta.bg-7.p-4.mb-5(data-aos='fade-down') 
      .row.justify-content-center.align-items-center
        .col-lg-7
          ul.lista-ul.lista-ul--color.lista-ul--separador.fa-lista
            li
              i.fas.fa-shield
              span.mb-0 #[b Alta dirección / gerente general:] aprueba políticas, garantiza el compromiso con la seguridad y asigna los recursos necesarios.
            li
              i.fas.fa-shield
              span.mb-0 #[b Responsable o líder de seguridad (CISO o similar):] diseña y supervisa los controles adecuados, coordina su implementación, evalúa la efectividad de los controles, supervisa los riesgos y lidera las auditorías.
            li
              i.fas.fa-shield
              span.mb-0 #[b Propietarios de activos:] se encargan del uso correcto y de la protección de activos específicos, como datos, sistemas e infraestructura.
            li
              i.fas.fa-shield
              span.mb-0 #[b Usuarios y empleados en general:] cumplen con las políticas y medidas de seguridad, actúan como primera línea de defensa, reportan incidentes y siguen los protocolos establecidos.
            li
              i.fas.fa-shield
              span.mb-0 #[b Auditores internos y externos:] verifican el cumplimiento de controles, políticas y procedimientos; identifican brechas de seguridad y recomiendan mejoras basadas en sus hallazgos.
        .col-lg-5.col-md-8.col-10
          img(src='@/assets/curso/temas/t2/8.svg', alt='')        

    .div.mb-4(data-aos='fade')  
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 6.
        span Lista sugerida de roles
      .tabla-a.color-acento-contenido
        table(alt="En IPS ManoSana, la dirección supervisa seguridad, TI gestiona accesos, el personal protege activos y los auditores verifican cumplimiento. En la Escuela Armando López Sierra, se controla software seguro, se aplican políticas de uso y los auditores revisan sistemas. En la Finca La Costa, se implementa seguridad física, se protege inventario y los auditores revisan registros.")
          thead
            tr.bg-color-acento-contenido
              th Rol / responsable
              th IPS ManoSana
              th Escuela Armando López Sierra
              th Finca La Costa
          tbody.text-start
            tr
              td.fw-bold Alta dirección / gerencia
              td Gerente aprueba presupuesto para #[em firewall] y capacitación en ciberseguridad.
              td Rector autoriza la compra de #[em software] educativo con licencias seguras.
              td Administrador asigna recursos para implementar cámaras de seguridad en la bodega.
            tr
              td.fw-bold Responsable de seguridad (CISO o designado)
              td Coordinador de TI gestiona copias de seguridad de historias clínicas y revisa accesos a la red.
              td Profesor de informática lidera políticas de uso de equipos y contraseñas seguras.
              td Ingeniero agrónomo implementa #[em software] de control de inventario con accesos diferenciados.
            tr
              td.fw-bold Propietarios de activos
              td Jefe de archivo clínico custodia las historias físicas y controla acceso restringido.
              td Bibliotecario se responsabiliza de la seguridad de los sistemas de gestión bibliotecaria.
              td Encargado de bodega custodia agroquímicos con inventario controlado y acceso restringido.
            tr
              td.fw-bold Usuarios / empleados
              td Enfermeros usan contraseñas únicas para acceso a historiales y reportan intentos de acceso no autorizado.
              td Docentes aplican políticas de uso responsable de internet y reportan incidentes de #[em phishing].
              td Trabajadores siguen protocolos de bioseguridad y notifican pérdidas o daños en equipos de riego.
            tr
              td.fw-bold Auditores internos / externos
              td Auditoría interna revisa acceso al sistema de historias clínicas y cumplimiento de confidencialidad.
              td Auditor educativo verifica seguridad en los sistemas de notas y asistencia.
              td Auditor agrícola revisa registros de producción y trazabilidad frente a riesgos de manipulación de datos.

    .tarjeta.bg-1.mb-5(data-aos='fade-down')
      img(src='@/assets/curso/temas/t2/9.png', alt='')
      .row.justify-content-center.p-4.px-lg-5
        .col-lg-1.col-md-2.d-none.d-md-block.mb-3
          img(src='@/assets/curso/temas/t1/deco1.svg', alt='')
        .col-lg-11.col-md-10.mb-3
          p.mb-0 Las grandes empresas, que cuentan con departamentos especializados en seguridad de la información o ciberseguridad y con recursos económicos suficientes, suelen disponer de una estructura de roles claramente definidos. Cada perfil cumple funciones específicas que, en conjunto, aseguran la protección estratégica, técnica y operativa de la organización frente a amenazas digitales. 
        p.mb-0 En contraste, las pequeñas empresas enfrentan mayores dificultades para implementar estos roles, debido a la inversión significativa que requieren en personal e infraestructura tecnológica. Por esta razón, a menudo deben gestionar la seguridad utilizando el talento disponible, incluso cuando los empleados no fueron contratados originalmente para estas funciones. A continuación, se presenta un listado de los principales perfiles especializados en ciberseguridad, indicando, cuando aplica, la sigla y el nombre completo del cargo, junto con una breve descripción de sus funciones (Arias, 2024).

    .div(data-aos='fade')  
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 7. 
        span Lista de roles oficiales en ciberseguridad
      .tabla-a.color-acento-contenido
        table(alt="El CISO lidera la estrategia de ciberseguridad; el CSO gestiona seguridad integral y continuidad; el CTO implementa tecnologías seguras; el CIO alinea TI con objetivos; el DPO protege datos y privacidad; el arquitecto diseña defensas; el analista supervisa controles; el forense investiga incidentes; y el hacker ético encuentra y corrige vulnerabilidades.")
          thead
            tr.bg-color-acento-contenido
              th.w-25 Rol
              th Descripción 
          tbody.text-start
            tr
              td.fw-bold CISO (#[em Chief Information Security Officer])
              td Responsable máximo de la estrategia de ciberseguridad, desde la planificación hasta la supervisión, reportando a la dirección.
            tr
              td.fw-bold.fw-bold CSO (#[em Chief Security Officer])
              td Encargado de la seguridad integral, incluyendo continuidad del negocio y recuperación ante desastres.
            tr
              td.fw-bold.fw-bold CTO (#[em Chief Technology Officer])
              td Responsable de la implementación de nuevas tecnologías, en coordinación con el CISO para garantizar su seguridad.
            tr
              td.fw-bold.fw-bold CIO (#[em Chief Information Officer])
              td Director de TI, asegura que la tecnología esté alineada con los objetivos de la organización.
            tr
              td.fw-bold.fw-bold DPO (#[em Data Protection Officer])
              td Garantiza el cumplimiento legal en materia de protección de datos, impulsando una cultura de privacidad.
            tr
              td.fw-bold.fw-bold Arquitecto de ciberseguridad
              td Diseña estructuras de seguridad avanzadas, anticipando posibles ataques el pensar como un ciberdelincuente.
            tr
              td.fw-bold.fw-bold Analista de seguridad
              td Supervisa la implementación y eficacia de controles de seguridad en sistemas y servicios nuevos.
            tr
              td.fw-bold.fw-bold Informático forense
              td Inventiga incidentes, identifica causas y preserva evidencia digital para análisis y procesos legales.
            tr
              td.fw-bold #[em Hacker] ético
              td Localiza fallos de seguridad mediante pruebas controladas y propone soluciones para fortalecer la infraestructura.
            


              

</template>

<script>
import TabsD from '../components/TabsD'
export default {
  name: 'Tema2',
  components: {
    TabsD,
  },
  data: () => ({
    // variables de vue
    indicadorTarjetaSlide: true,
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
