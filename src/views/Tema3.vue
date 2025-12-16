<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-color-sistema 3
      h1 Monitoreo y verificación 
      
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.bg-2.p-3.p-sm-4.p-md-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Realizar un monitoreo adecuado y mantener procesos de verificación permanentes asegura que los controles de seguridad de la información no se limiten a un requisito documental, sino que se traduzcan en prácticas efectivas y confiables. El seguimiento constante permite detectar fallos en los sistemas y en las estrategias implementadas, así como evaluar el desempeño de los controles y verificar el cumplimiento de las normativas vigentes. De este modo, se fortalece la confianza de usuarios, clientes y aliados en la organización y se garantiza una gestión de seguridad más sólida y proactiva.   


    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Importancia de la supervisión y validación de la seguridad de la información 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/2.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-2.col-md-2.d-none.d-md-block
            img(src='@/assets/curso/temas/t1/deco1.svg', alt='')
          .col-lg-10.col-md-10
            p.mb-0 La #[strong supervisión constante] es fundamental para la seguridad de la información, ya que permite monitorear de manera continua la actividad de los sistemas y de los controles implementados.
        .bg-3.tarjeta.p-4
          p.mb-0 Esta observación ayuda a identificar comportamientos inusuales, intentos de acceso no autorizados, fallos de configuración y vulnerabilidades explotables. Además, proporciona datos valiosos para medir el desempeño de los controles y ajustarlos conforme a la estrategia de seguridad, anticipándose a posibles incidentes y convirtiendo la gestión en un proceso proactivo en lugar de reactivo.

    p.mb-4 La #[strong validación o verificación] complementa este proceso, asegurando que los controles funcionen según su diseño y objetivos. Esto puede realizarse mediante revisiones periódicas, auditorías internas y externas, pruebas de cumplimiento normativo y evaluaciones de desempeño. Gracias a la verificación, se identifican brechas de seguridad, se corrigen desviaciones y se garantiza la alineación con marcos regulatorios y estándares internacionales, fortaleciendo la #[strong confiabilidad, transparencia y credibilidad] de la organización.

    .row.justify-content-center.align-items-center
      .col-lg-7(data-aos="fade-right")
        .bg-4.tarjeta.p-4
          .row.justify-content-center.align-items-center
            .col-lg-4.col-5.col-md-3.mb-3.mb-lg-0
              img.px-lg-3(src='@/assets/curso/temas/t3/3.svg', alt='')
            .col-lg-8
              p.mb-0 Cuando se integran #[strong monitoreo y verificación], se forma un ciclo de mejora continua: la supervisión detecta riesgos en tiempo real, mientras que la verificación garantiza la efectividad de las acciones tomadas. De este modo, la seguridad de la información deja de ser un requisito formal para convertirse en una práctica activa, confiable y en constante perfeccionamiento, protegiendo tanto a la organización como a sus partes interesadas.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/4.png', alt='')


    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Estrategias de seguimiento 

    .bg-5.p-4.p-lg-0.mb-4(data-aos="fade-down")
      .row.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/5.png', alt='')
        .col-lg-6
          img.w-70.mb-3(src='@/assets/curso/temas/t3/6.svg', alt='')
          p Los controles de seguridad requieren un seguimiento sistemático, constante y orientado a resultados. No basta con implementarlos; es fundamental verificar regularmente su funcionamiento y efectividad en la práctica. Para facilitar su aplicación, a continuación, se presentan algunas estrategias de seguimiento que las organizaciones pueden implementar de manera práctica, sin necesidad de invertir esfuerzos desproporcionados:

    div(data-aos='fade')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 8. 
        span Estrategias de seguimiento de los controles de seguridad de la información.
      .tabla-a.color-acento-contenido
        table(alt="El seguimiento de los controles de seguridad de la información implica revisar su diseño y aplicación, medir su eficacia y establecer periodicidad según el riesgo. Se utilizan indicadores clave para monitorear el desempeño y se documentan hallazgos para generar retroalimentación y planes de mejora continua. Estas estrategias permiten garantizar que los controles funcionen correctamente y se mantenga la seguridad de la organización.")
          thead
            tr.bg-color-acento-contenido
              th.w-25 Estrategia de seguimiento
              th Descripción
              th Ejemplos
          tbody.text-start
            tr
              td.fw-bold Revisión del diseño y aplicación
              td Consiste en analizar si el control de seguridad fue diseñado de manera adecuada para mitigar el riesgo identificado y, además, comprobar que se está aplicando en la práctica.
              td 
                ol.lista-ol.fa-lista.mb-0
                  li
                    span.text-bold a. 
                    span.mb-0 La empresa establece doble autenticación para correos corporativos y se verifica si todos los usuarios realmente la tienen activa.
                  li.mb-0
                    span.text-bold b. 
                    span.mb-0 Se diseña un protocolo de ingreso a bodega con carnet, y se revisa si los trabajadores lo cumplen en la operación diaria.
            tr
              td.fw-bold Medición de la eficacia del control
              td Se centra en determinar si el control cumple con su propósito de prevenir, detectar o corregir riesgos. Esto implica medir resultados frente a los objetivos esperados.
              td  
                ol.lista-ol.fa-lista.mb-0
                  li
                    span.text-bold a. 
                    span.mb-0 Un sistema de videovigilancia se evalúa según la cantidad de incidentes resueltos gracias a las grabaciones. 
                  li.mb-0
                    span.text-bold b. 
                    span.mb-0 El antivirus se mide por la detección y bloqueo de intentos de #[em malware] en un mes.
            tr
              td.fw-bold Periodicidad de revisión
              td Establece la frecuencia con que se revisan los controles, priorizando aquellos más críticos o expuestos. La periodicidad depende del nivel de riesgo y del impacto esperado.
              td  
                ol.lista-ol.fa-lista.mb-0
                  li
                    span.text-bold a. 
                    span.mb-0 Las copias de seguridad críticas se revisan semanalmente, mientras que las políticas de acceso a internet se revisan cada seis meses. 
                  li.mb-0
                    span.text-bold b. 
                    span.mb-0 La configuración de #[em firewalls] se audita mensualmente, pero el plan de respuesta a incidentes se revisa anualmente.
            tr
              td.fw-bold Uso de indicadores clave (KCI)
              td Implica definir métricas que permitan monitorear objetivamente el desempeño de los controles. Los indicadores se alinean con los objetivos de seguridad de la organización.
              td  
                ol.lista-ol.fa-lista.mb-0
                  li
                    span.text-bold a. 
                    span.mb-0 Número de intentos fallidos de inicio de sesión en el sistema de facturación. 
                  li.mb-0
                    span.text-bold b. 
                    span.mb-0 Porcentaje de respaldos completados con éxito frente al total planificado en el mes.
            tr
              td.fw-bold Registro y retroalimentación
              td Supone documentar hallazgos, conservar evidencias y generar planes de mejora continua. Facilita auditorías internas y la trazabilidad de decisiones en seguridad.
              td  
                ol.lista-ol.fa-lista.mb-0
                  li
                    span.text-bold a. 
                    span.mb-0 Durante una revisión se detecta que el 20 % de los equipos no recibió la última actualización, se documenta y se establece un plan de corrección. 
                  li.mb-0
                    span.text-bold b. 
                    span.mb-0 Una auditoría interna identifica brechas en la política de uso de contraseñas y se recomienda capacitación al personal.


    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Periodicidad 

    .bg-4.p-3.px-lg-5.mb-4
      p.mb-0 En los controles de seguridad, la periodicidad se refiere a la frecuencia con la que deben revisarse para verificar su funcionamiento y correcta aplicación. No todos los controles requieren el mismo ritmo de monitoreo; este depende del nivel de riesgo, las exigencias normativas y los recursos disponibles en la organización. Los riesgos más críticos necesitan revisiones más frecuentes (por ejemplo, diarias o semanales), mientras que los de menor relevancia pueden evaluarse en intervalos más amplios (mensuales, trimestrales o anuales). Con base en los riesgos identificados, la empresa puede diseñar un plan de revisión de controles con la periodicidad adecuada, asegurando así la efectividad y los mejores resultados de las medidas implementadas. 

    .div(data-aos='fade')  
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 9. 
        span Periodicidad sugerida según el nivel de riesgo
      .tabla-a.color-acento-contenido
        table(alt="La periodicidad de los controles de seguridad se ajusta al nivel de riesgo: los riesgos críticos requieren revisiones diarias o semanales, los altos, quincenales o mensuales, los medios, trimestrales, y los bajos, semestrales o anuales. Esta planificación permite optimizar recursos y garantizar la detección temprana de incidentes según la criticidad. Así, se asegura la protección efectiva de los activos y la continuidad del negocio.")
          thead
            tr.bg-color-acento-contenido
              th Nivel de riesgo
              th Periodicidad sugerida 
              th Justificación
              th Ejemplos de aplicación 
          tbody.text-start
            tr
              td.fw-bold Crítico
              td Diaria o semanal.
              td Los activos críticos suelen ser objetivos prioritarios de atacantes. La alta frecuencia garantiza detección temprana de incidentes y reacción inmediata.
              td 
                ul.lista-ul.fa-lista.mb-0
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Monitoreo de accesos a sistemas financieros.
                  li.mb-0
                    i.fas.fa-angle-right
                    span.mb-0 Revisión de alertas en #[em firewalls] y sistemas de detección de intrusos.
            tr
              td.fw-bold Alto
              td Quincenal o mensual.
              td Son sistemas relevantes para la continuidad del negocio. Aunque el riesgo no es tan urgente como en los críticos, un fallo puede generar pérdidas económicas y reputacionales importantes.
              td 
                ul.lista-ul.fa-lista.mb-0
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Validación de copias de seguridad.
                  li.mb-0
                    i.fas.fa-angle-right
                    span.mb-0 Verificación de parches en sistemas de gestión empresarial (ERP, CRM).
            tr
              td.fw-bold Medio
              td Trimestral.
              td Son riesgos con impacto moderado, que pueden controlarse con revisiones periódicas. La frecuencia trimestral equilibra esfuerzo y seguridad.
              td 
                ul.lista-ul.fa-lista.mb-0
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Revisión de permisos de usuarios en aplicaciones internas.
                  li.mb-0
                    i.fas.fa-angle-right
                    span.mb-0 Evaluación de políticas de contraseñas en estaciones de trabajo.
            tr
              td.fw-bold Bajo
              td Semestral o anual.
              td Los controles de bajo riesgo tienen poco impacto en caso de falla. Una revisión menos frecuente optimiza recursos sin comprometer la seguridad global.
              td 
                ul.lista-ul.fa-lista.mb-0
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Inspección física de archivos almacenados en bodegas.
                  li.mb-0
                    i.fas.fa-angle-right
                    span.mb-0 Verificación de equipos en desuso conectados a la red.


    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4 Registros y evidencias
    
    .bloque-texto-g.color-secundario.bg-2.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/7.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los registros y evidencias son documentos, archivos o reportes que demuestran de manera objetiva que el monitoreo y la verificación de los controles se han realizado según lo planificado. Estos elementos no solo facilitan auditorías internas y externas, sino que también permiten identificar patrones de incidentes, mejorar continuamente los procesos y asegurar el cumplimiento de normativas nacionales e internacionales aplicables.
        br
        br
        p.mb-0 Un registro bien gestionado debe incluir: fecha, responsable, control verificado, hallazgos, acciones tomadas y resultado final, además de cualquier información adicional que la empresa considere relevante. Es fundamental que estos registros se mantengan organizados, seguros y accesibles únicamente para las partes autorizadas.

    p.mb-4 A continuación, se presentan algunos tipos de registros y evidencias utilizados comúnmente:

    .div.mb-4(data-aos='fade')  
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 10. 
        span Tipos de registros y evidencias
      .tabla-a.color-acento-contenido
        table(alt="Los registros y evidencias documentan de manera objetiva la implementación y efectividad de los controles de seguridad, incluyendo eventos del sistema, informes de monitoreo, actas de verificación e incidentes. También pueden ser pruebas visuales, como capturas o fotos, y listas de chequeo utilizadas en auditorías. Estos elementos facilitan la trazabilidad, la mejora continua y el cumplimiento de normativas internas y externas.")
          thead
            tr.bg-color-acento-contenido
              th Tipo de registro / evidencia
              th Descripción
              th Ejemplo
          tbody.text-start
            tr
              td.fw-bold Bitácoras de eventos (#[em logs])
              td Archivos generados por sistemas y aplicaciones que registran actividades como accesos, cambios o intentos de intrusión.
              td #[em Log] del #[em firewall] mostrando intentos de correción bloqueados en la última semana.
            tr
              td.fw-bold Informes de monitoreo
              td Reportes periódicos que documentan el estado de los controles y su desempeño.
              td Informe mensual de cumplimiento de parches de #[em software].
            tr
              td.fw-bold Actas de verificación
              td Documentos que certifican que se realizaron controles específicos en una fecha determinada.
              td Acta de revisión trimestral de respaldos de información firmada por el responsable de TI.
            tr
              td.fw-bold Registros de incidentes
              td Documentación de eventos de seguridad, análisis de causa raíz y medidas correctivas implementadas.
              td Registro de un ataque de #[em phishing] detectado, con acciones de bloqueo y capacitación posterior.
            tr
              td.fw-bold Evidencias gráficas o capturas
              td Pruebas visuales (#[em screenshots], fotos) que demuestran la existencia y correcto funcionamiento de controles.
              td Captura de pantalla del antivirus mostrando la última actualización aplicada.
            tr
              td.fw-bold Listas de chequeo de auditoría
              td Listas de verificación utilizadas para confirmar el cumplimiento de procedimientos de seguridad.
              td Lista de chequeo completada de la inspección física de servidores en el #[em data center].

    .tarjeta.bg-6.p-4.px-lg-5.mb-4
      p.mb-0 Como recomendación, los registros deben mantenerse organizados en repositorios seguros, ya sea de forma digital o física, siendo útiles los sistemas de gestión documental que muchas empresas implementan actualmente. El tiempo de retención de estos registros debe definirse según la política interna y los requisitos regulatorios aplicables. De esta manera se asegura la trazabilidad y disponibilidad de la información para futuras auditorías y revisiones.

    .div.mb-4(data-aos='fade')  
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 11. 
        span Formato de registro de monitoreo de controles de seguridad
      .tabla-a.color-acento-contenido
        table(alt="El formato de registro de monitoreo documenta la revisión de controles de seguridad, incluyendo fecha, área o activo, control evaluado y responsable. También registra hallazgos, acciones tomadas, resultados, evidencias y validación mediante firma. Este registro permite asegurar la trazabilidad, la efectividad de los controles y el cumplimiento de normativas internas y externas.")
          thead
            tr.bg-color-acento-contenido
              th Campo
              th Descripción / instrucción de llenado
              th Ejemplo de diligenciamiento
          tbody.text-start
            tr
              td.fw-bold Fecha de monitoreo
              td Día en que se realizó la actividad de monitoreo.
              td 08/09/2025.
            tr
              td.fw-bold Área / activo monitoreado
              td Especificar el área, sistema, servidor o proceso que se está revisando.
              td Servidor de archivos - carpeta de proyectos.
            tr
              td.fw-bold Control evaluado
              td Describir brevemente el control de seguridad revisado.
              td Control de acceso a carpetas compartidas.
            tr
              td.fw-bold Responsable
              td Nombre y cargo de quien realizó el monitoreo.
              td Juan Pérez - analista de TI.
            tr
              td.fw-bold Hallazgos
              td Detallar si el control está funcionando, si hay incidentes detectados o desviaciones.
              td 2 accesos no autorizados detectados en el #[em log].
            tr
              td.fw-bold Acciones tomadas
              td Describir las medidas correctivas o preventivas aplicadas.
              td Bloqueo de usuarios sospechosos y notificación a dirección.
            tr
              td.fw-bold Resultado final
              td Indicar si el control queda en estado conforme o requiere seguimiento adicional.
              td Conforme - se programó revisión adicional en 7 días.
            tr
              td.fw-bold Evidencia adjunta
              td Indicar si se adjunta soporte (captura de pantalla, informe, #[em log]).
              td Captura de pantalla del #[em log] adjunto al reporte digital.
            tr
              td.fw-bold Firma o validación
              td Firma digital o física del responsable o del auditor.
              td Firma digital registrada en el sistema.
    
    .bg-7.tarjeta.p-4
      p Otras recomendaciones a tener en cuenta con estos registros son:
      .row.justify-content-around.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/8.png', alt='')
        .col-lg-5
          ul.lista-ul--color.color-primario.fa-lista.mb-0
            li.mb-lg-4
              i.fas.fa-check
              span.mb-0 Los formatos pueden implementarse en Excel, Google Forms o mediante un #[em software] de gestión documental.
            li.mb-lg-4
              i.fas.fa-check
              | Es recomendable mantener una numeración consecutiva de los registros para facilitar su trazabilidad.
            li.mb-lg-4
              i.fas.fa-check
              | Siempre que sea posible, adjuntar evidencias (capturas de pantalla, archivos PDF, fotos u otros) que respalden la información reportada.


</template>

<script>
export default {
  name: 'Tema3',
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
