<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-color-sistema 1
      h1 Controles de seguridad de la información
        
    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-5.col-md-10.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/1.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.mb-4          
          .col-lg-2.col-md-2.d-none.d-md-block
            img(src='@/assets/curso/temas/t1/deco1.svg', alt='')
          .col-lg-10.col-md-10
            p.mb-0 Los controles de seguridad son elementos esenciales para proteger los datos y las infraestructuras críticas de una organización. Estos controles incluyen todas las medidas y contramedidas diseñadas para prevenir, detectar, mitigar y neutralizar los riesgos que puedan afectar la información, los sistemas informáticos, los equipos físicos u otros activos de la empresa.
        .bg-4.tarjeta.p-4.mb-4.mb-lg-0
          p.mb-0 En la actualidad, el aumento de los ciberataques y la creciente complejidad de las amenazas digitales hacen que la implementación de controles de seguridad ya no sea una opción, sino una necesidad estratégica. Su aplicación permite no solo proteger los recursos organizacionales, sino también cumplir con las leyes y regulaciones sobre privacidad de datos, evitando sanciones o consecuencias legales significativas (IBM, 2023).

    p.mb-4 De manera sencilla, los controles de seguridad son acciones y mecanismos que ayudan a reducir los riesgos a niveles aceptables. Esto se logra mediante el uso de procedimientos, tecnologías y buenas prácticas que garantizan las tres propiedades fundamentales de la información:

    .row.justify-content-center(data-aos="fade")
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.bg-1.p-4.h-100
          ul.lista-ul.lista-ul--color.fa-lista
            li
              i.fas.fa-shield
              span.mb-0 #[b Confidencialidad:] solo las personas autorizadas pueden acceder a la información.
            li
              i.fas.fa-shield
              span.mb-0 #[b Integridad:] los datos se mantienen correctos, completos y sin alteraciones no autorizadas.
            li.mb-0
              i.fas.fa-shield
              span.mb-0 #[b Disponibilidad:] la información y los sistemas están accesibles cuando se necesitan.
      .col-lg-5
        img.w-70.mb-3(src='@/assets/curso/temas/t1/2.svg', alt='')
        p Una implementación adecuada de los controles de seguridad contribuye al cumplimiento normativo, asegura la continuidad del negocio y fortalece la protección de los activos organizacionales. Además, prepara a la organización para detectar, responder y gestionar incidentes de seguridad de forma oportuna (Cycognito, 2024).
      .col-lg-3.col-md-7.col-10
        img(src='@/assets/curso/temas/t1/3.png', alt='')


    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Propósito de los controles de seguridad de la información	

    .bloque-texto-g.color-primario.p-3.p-sm-4.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/4.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El objetivo principal de los controles de seguridad de la información es proteger los activos organizacionales frente a los diferentes riesgos y amenazas que puedan comprometer su disponibilidad, integridad y confidencialidad. En otras palabras, buscan garantizar que la información esté accesible cuando se necesita, confiable en su contenido y protegida frente a accesos no autorizados.
        br
        br
        p.mb-0 Estos controles permiten prevenir incidentes de seguridad, detectar anomalías en el funcionamiento de los sistemas y corregir vulnerabilidades antes de que generen un impacto mayor. Además, contribuyen a mantener la continuidad del negocio y a fortalecer la confianza de los clientes, empleados y socios estratégicos.

    .bg-4.p-3.px-lg-5.mb-5
      p.mb-0 Implementar controles de seguridad no solo responde a la necesidad de mitigar ataques cibernéticos o accesos indebidos, sino también a cumplir con normas, leyes y estándares internacionales que regulan la protección de la información. Por ello, los controles representan un pilar fundamental de la gobernanza corporativa, ya que apoyan la toma de decisiones informadas, minimizan los impactos económicos y reputacionales y fomentan entornos tecnológicos seguros y resilientes.

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center
        .subt--img.px-2.pb-1
          img(src='@/assets/curso/temas/t1/sub.svg', alt='')
        h3.mb-0.px-3.pe-5 Importancia de una implementación integral

    p.mb-4 Los controles de seguridad conforman un sistema integral de defensa que combina medidas técnicas, físicas y administrativas.

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-5
        ul.lista-ul.lista-ul--color.fa-lista
          li.mb-lg-4
            i.fas.fa-shield
            span.mb-0 Las medidas técnicas se relacionan con el uso de #[em software], #[em hardware] y configuraciones seguras.
          li.mb-lg-4
            i.fas.fa-shield
            span.mb-0 Las medidas físicas incluyen la protección de equipos, instalaciones y accesos.
          li
            i.fas.fa-shield
            span.mb-0 Las medidas administrativas abarcan políticas, procedimientos y responsabilidades del personal.
      .col-lg-3.col-md-6.col-8.mb-3.mb-lg-0
        .bg-8.p-2.px-lg-4.h-100
          img(src='@/assets/curso/temas/t1/5.svg', alt='')
      .col-lg-4
        .tarjeta.bg-1.p-4.h-100
          p.mb-0 Cuando estos elementos se implementan de manera coordinada, la organización puede reducir vulnerabilidades, responder de forma eficaz ante incidentes y cumplir con sus políticas internas y marcos regulatorios externos.

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center
        .subt--img.px-2.pb-1
          img(src='@/assets/curso/temas/t1/sub.svg', alt='')
        h3.mb-0.px-3.pe-5 Fomento de la cultura de seguridad

    .row.justify-content-center.align-items-center
      .col-lg-3.col-md-6.col-8.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/6.jpg', alt='')
      .col-lg-9(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-5.pe-0.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/7.svg', alt='')
          .col-lg-7.bg-3.p-4.d-flex.align-items-center            
            p.mb-0 El éxito de los controles no depende únicamente de la tecnología, sino también del compromiso de las personas. Su correcta aplicación contribuye a construir una cultura de seguridad que promueva la responsabilidad, la confianza y la mejora continua dentro de la organización.
        p.mb-0 En definitiva, los controles de seguridad de la información son herramientas estratégicas que permiten a las organizaciones mantener operaciones seguras, sostenibles y confiables en un entorno digital cada vez más cambiante y desafiante.


    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Tipos de controles

    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        p Los controles de seguridad de la información pueden clasificarse desde distintos enfoques, lo que facilita su comprensión y aplicación dentro de las organizaciones.
        p Una primera forma de clasificación se basa en la manera en que se implementan, distinguiéndose tres tipos principales:
        .row.justify-content-center.align-items-center.bg-9.mb-4.p-4
          .col-lg-2.col-md-2.col-4.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t1/8.svg', alt='')
          .col-lg-10
            ul.lista-ul.lista-ul--color.fa-lista.mb-0
              li
                i.fas.fa-shield
                span.mb-0 #[b Controles administrativos:] relacionados con políticas, procedimientos, normas y responsabilidades del personal.
              li
                i.fas.fa-shield
                span.mb-0 #[b Controles técnicos:] aplicados mediante #[em software], #[em hardware] y configuraciones que protegen los sistemas informáticos.
              li.mb-0
                i.fas.fa-shield
                span.mb-0 #[b Controles físicos:] orientados a la protección de instalaciones, equipos y accesos (Cycognito, 2024).
        p Otra forma de clasificar los controles se centra en su función dentro del marco de la gestión del riesgo, agrupándolos en:
      .col-lg-4.col-md-7.col-8(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/9.jpg', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/10.png', alt='')
      .col-lg-8(data-aos="fade-left")
        ul.lista-ul.lista-ul--color.fa-lista.mb-4
          li
            i.fas.fa-shield
            span.mb-0 #[b Controles preventivos:] diseñados para evitar la ocurrencia de incidentes.
          li
            i.fas.fa-shield
            span.mb-0 #[b Controles detectivos:] orientados a identificar eventos o anomalías cuando se presentan.
          li
            i.fas.fa-shield
            span.mb-0 #[b Controles correctivos:] enfocados en mitigar los efectos y restablecer las condiciones normales tras un incidente (Equipo Auditool, 2024).
        .row.justify-content-center.mb-4
          .col-lg-2.col-md-2.d-none.d-md-block
            img(src='@/assets/curso/temas/t1/deco1.svg', alt='')
          .col-lg-10.col-md-10
            p.mb-0 Estas diferentes perspectivas permiten a las organizaciones diseñar un sistema integral de protección, capaz de reducir la probabilidad de incidentes y, al mismo tiempo, fortalecer su capacidad de respuesta y recuperación ante cualquier eventualidad. En un entorno digital dinámico, ninguna empresa está completamente exenta de riesgos, por lo que la combinación adecuada de controles se convierte en un componente esencial de la seguridad y la resiliencia organizacional.

    p.mb-4 A continuación, los tipos de controles de seguridad de la información:

    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-4")
          .row(titulo="Controles físicos")
            p.mb-0 Son medidas tangibles que resguardan las instalaciones y equipos frente a accesos no autorizados, robos o daños. Incluyen cerraduras, vallas, biometría, vigilancia y guardias, así como sistemas de monitoreo ambiental que previenen riesgos por temperatura o humedad. Además, son clave en la continuidad operativa y la recuperación ante desastres, al proteger los sistemas de respaldo y la infraestructura crítica.
          .row(titulo="Controles técnicos")
            p.mb-0 Se apoyan en la tecnología para proteger sistemas y redes frente a ciberamenazas. Herramientas como #[em firewalls], cifrado, antivirus, detección de intrusos y controles de acceso automatizan la defensa y mitigan vulnerabilidades. Su actualización constante y capacidad de adaptación los convierten en la primera línea de defensa frente a ataques sofisticados y cambios tecnológicos.
          .row(titulo="Controles administrativos")
            p.mb-0 Consisten en políticas, procedimientos y prácticas que estructuran la gestión de la seguridad de la información. A través de programas de capacitación, auditorías, gestión de accesos y evaluaciones de riesgo, orientan al personal y fortalecen la cultura de seguridad. También establecen roles y responsabilidades, reducen errores humanos y garantizan el cumplimiento normativo en la organización.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/11.png', alt='')

    p.mb-4 A continuación, se presentan ejemplos de controles de seguridad de la información aplicados en distintos contextos organizacionales. Estos casos ilustran cómo los controles físicos, técnicos y administrativos se adaptan a las necesidades y características de cada entorno.

    .div.mb-4(data-aos='fade')  
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 1.
        span Ejemplos de tipos de controles en pymes
      .tabla-a.color-acento-contenido
        table(alt="Presenta ejemplos aplicados de controles de seguridad en tres tipos de organizaciones: una IPS, una institución educativa y una finca productiva. Cada caso evidencia cómo los controles físicos, técnicos y administrativos pueden adaptarse según las características del entorno, manteniendo un enfoque preventivo y de mejora continua.")
          caption Nota: (IPS) Institución Prestadora de Servicios de Salud.
          thead
            tr.bg-color-acento-contenido
              th Tipo de control
              th IPS  ManoSana
              th Escuela Armando López Sierra
              th Finca La Costa
          tbody.text-start
            tr
              td.fw-bold Físicos
              td 
                ul.lista-ul.fa-lista.mb-0
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Cerraduras y biometría en archivo clínico. 
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Cámaras de vigilancia en pasillos y acceso a urgencias. 
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Detectores de humo y extintores en áreas críticas.   
                  li.mb-0
                    i.fas.fa-angle-right
                    span.mb-0 Control de ingreso con carnet al personal y visitantes.
              td
                ul.lista-ul.fa-lista.mb-0
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Rejas y candados en salones de informática.
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Control de acceso a la biblioteca con carnet estudiantil.
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Cámaras de seguridad en pasillos. 
                  li.mb-0
                    i.fas.fa-angle-right
                    span.mb-0 Señalización y salidas de emergencia.
              td 
                ul.lista-ul.fa-lista.mb-0
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Cercado perimetral de potreros y bodegas. 
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Candados en almacén de agroquímicos. 
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Cámaras de vigilancia en áreas de producción.
                  li.mb-0
                    i.fas.fa-angle-right
                    span.mb-0 Sistemas de iluminación nocturna en accesos.
            tr
              td.fw-bold Técnicos
              td 
                ul.lista-ul.fa-lista.mb-0
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Cifrado de historias clínicas digitales.
                  li
                    i.fas.fa-angle-right
                    span.mb-0 #[em Firewall] en la red hospitalaria.
                  li
                    i.fas.fa-angle-right
                    span.mb-0 #[em Software] antivirus actualizado en estaciones de trabajo.
                  li.mb-0
                    i.fas.fa-angle-right
                    span.mb-0 Sistemas de respaldo automático de datos clínicos.
              td
                ul.lista-ul.fa-lista.mb-0
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Antivirus en computadores de docentes y administrativos.
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Restricciones de acceso a internet por categorías.
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Sistema de gestión académica con claves personalizadas.
                  li.mb-0
                    i.fas.fa-angle-right
                    span.mb-0 Copias de seguridad de información académica.
              td 
                ul.lista-ul.fa-lista.mb-0
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Sensores de riesgo automatizados con contraseñas seguras.
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Control de acceso al #[em software] de inventario de cultivos.
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Cámaras conectadas a la red para monitoreo remoto.
                  li.mb-0
                    i.fas.fa-angle-right
                    span.mb-0 Respaldo digital de registros de producción.
            tr
              td.fw-bold Administrativos
              td 
                ul.lista-ul.fa-lista.mb-0
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Protocolos de confidencialidad para personal de salud.
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Políticas de seguridad y privacidad de datos de pacientes. 
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Capacitación periódica en ciberseguridad.
                  li.mb-0
                    i.fas.fa-angle-right
                    span.mb-0 Procedimientos de respuesta a incidentes de seguridad.
              td
                ul.lista-ul.fa-lista.mb-0
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Manual de uso responsable de equipos tecnológicos.
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Políticas para el manejo de información estudiantil.
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Charlas de sensibilización sobre riesgos digitales.
                  li.mb-0
                    i.fas.fa-angle-right
                    span.mb-0 Procedimientos para auditorías internas de seguridad.
              td 
                ul.lista-ul.fa-lista.mb-0
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Protocolos de ingreso y registro de trabajadores temporales.
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Plan de respuesta ante emergencias agrícolas (plagas, incendios).
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Capacitación en manejo seguro de agroquímicos.
                  li.mb-0
                    i.fas.fa-angle-right
                    span.mb-0 Procedimientos de control de calidad y trazabilidad.

    .bg-1.tarjeta.p-4.mb-4
      p Para una mejor comprensión de su aplicación práctica, los controles de seguridad se agrupan en tres categorías funcionales: preventivos, detectivos y correctivos.
      p.mb-0 A continuación, se presentan los tipos de controles de seguridad de la información clasificados según su propósito operativo:

    .tarjeta.bg-4.bg-slide-a.mb-4.p-3(data-aos='fade-down')
      SlyderA(tipo='b')
        .row.justify-content-center.align-items-center
          .col-md-6.col-11.mb-4.mb-md-0
            h4 Controles preventivos
            p Son medidas proactivas diseñadas para evitar que se materialicen errores, fraudes o incidentes antes de que ocurran. Se centran en reducir la probabilidad de riesgos mediante políticas claras, procesos bien estructurados y la capacitación del personal. Ejemplos de este tipo son la segregación de funciones, la restricción de accesos según roles, los programas de formación en normativas clave y las políticas de doble verificación en transacciones críticas. De esta forma, los controles preventivos actúan como una barrera inicial que fortalece la seguridad y la confiabilidad de las operaciones.
          .col-md-4.col-9
            img(src='@/assets/curso/temas/t1/slide1-1.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.col-11.mb-4.mb-md-0
            h4 Controles detectivos
            p Se enfocan en identificar irregularidades o problemas una vez que han ocurrido, proporcionando retroalimentación para evaluar la eficacia de los controles preventivos. Funcionan a través de mecanismos de supervisión, monitoreo y análisis que permiten descubrir anomalías en tiempo oportuno. Entre sus ejemplos destacan las conciliaciones periódicas de cuentas, las alertas automáticas en sistemas empresariales, el monitoreo en tiempo real y los análisis comparativos de variaciones financieras. Con ello, los controles detectivos ayudan a reducir el impacto de los incidentes al descubrirlos rápidamente.
          .col-md-4.col-9
            img(src='@/assets/curso/temas/t1/slide1-2.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.col-11.mb-4.mb-md-0
            h4 Controles correctivos
            p Tienen como finalidad solucionar los problemas detectados y asegurar que no vuelvan a repetirse. Estas medidas actúan después de la detección de un incidente, combinando respuestas inmediatas con ajustes permanentes en los procesos. Algunos ejemplos son la corrección de errores financieros, la actualización de políticas internas, la capacitación adicional del personal y el rediseño de procedimientos críticos. Así, los controles correctivos no solo mitigan daños, sino que también impulsan la mejora continua en la gestión del riesgo y la seguridad organizacional.
          .col-md-4.col-9
            img(src='@/assets/curso/temas/t1/slide1-3.png', alt='')

    .div.mb-5(data-aos='fade')  
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 2.
        span Ejemplos de controles en pymes (preventivos, detectivos y correctivos)
      .tabla-a.color-acento-contenido
        table(alt="La tabla presenta ejemplos de controles implementados en pequeñas y medianas empresas (pymes) de distintos sectores económicos (salud, educación y agrícola), con el propósito de ilustrar cómo se aplican mecanismos preventivos, detectivos y correctivos en contextos organizacionales diversos.")
          caption Nota: ERP son las siglas de (#[em Enterprise Resource Planning]). 
          thead
            tr.bg-color-acento-contenido
              th Tipo de control
              th IPS  ManoSana
              th Escuela Armando López Sierra
              th Finca La Costa
          tbody.text-start
            tr
              td.fw-bold Preventivos
              td 
                ul.lista-ul.fa-lista.mb-0
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Segregación de funciones en facturación y pagos. 
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Restricción de accesos a historias clínicas con autenticación multifactorial.
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Programas de capacitación en protección de datos de pacientes. 
                  li.mb-0
                    i.fas.fa-angle-right
                    span.mb-0 Políticas de doble verificación en compras.                  
              td 
                ul.lista-ul.fa-lista.mb-0
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Control de accesos a laboratorios de informática solo para estudiantes autorizados. 
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Charlas preventivas sobre uso responsable de dispositivos.  
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Políticas de verificación de notas antes de su publicación.  
                  li.mb-0
                    i.fas.fa-angle-right
                    span.mb-0 Capacitación docente en prevención del fraude académico. 
              td 
                ul.lista-ul.fa-lista.mb-0
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Restricción de acceso a bodegas de insumos agrícolas.  
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Programas de formación en bioseguridad.  
                  li.mb-0
                    i.fas.fa-angle-right
                    span.mb-0 Políticas de control de insumos antes de la siembra. 
            tr
              td.fw-bold Detectivos
              td 
                ul.lista-ul.fa-lista.mb-0
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Conciliación periódica de cuentas de proveedores. 
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Alertas automáticas en el sistema ERP para detectar compras inusuales.  
                  li.mb-0
                    i.fas.fa-angle-right
                    span.mb-0 Auditorías internas de cumplimiento normativo.                 
              td 
                ul.lista-ul.fa-lista.mb-0
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Revisión periódica de calificaciones frente a actas oficiales. 
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Alertas del sistema académico para detectar plagio en trabajos. 
                  li.mb-0
                    i.fas.fa-angle-right
                    span.mb-0 Supervisión de asistencia mediante listas digitales. 
              td 
                ul.lista-ul.fa-lista.mb-0
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Monitoreo de consumo de agua en sistemas de riego.
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Revisión mensual de inventarios de insumos agrícolas.  
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Alertas en #[em software] de gestión para identificar pérdidas de producción. 
                  li.mb-0
                    i.fas.fa-angle-right
                    span.mb-0 Auditorías sobre registros de ventas. 
            tr
              td.fw-bold Correctivos
              td 
                ul.lista-ul.fa-lista.mb-0
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Ajuste de procesos administrativos tras detectar errores de facturación.  
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Actualización de protocolos de confidencialidad. 
                  li.mb-0
                    i.fas.fa-angle-right
                    span.mb-0 Capacitación adicional en áreas con incumplimientos.                 
              td 
                ul.lista-ul.fa-lista.mb-0
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Modificación de manuales de convivencia tras detectar incidentes disciplinarios. 
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Reentrenamiento docente en áreas con debilidades pedagógicas.  
                  li.mb-0
                    i.fas.fa-angle-right
                    span.mb-0 Corrección de errores en bases de datos académicas. 
              td 
                ul.lista-ul.fa-lista.mb-0
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Rediseño de rutas de transporte tras detectar retrasos en entregas.  
                  li
                    i.fas.fa-angle-right
                    span.mb-0 Actualización de protocolos de control de plagas.  
                  li.mb-0
                    i.fas.fa-angle-right
                    span.mb-0 Reentrenamiento de trabajadores en uso de maquinaria.   

    .bg-5.p-4.p-lg-0(data-aos="fade-down")
      .row.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/12.png', alt='')
        .col-lg-7
          .pe-lg-3
            img.w-70.mb-3(src='@/assets/curso/temas/t1/13.svg', alt='')
            p La organización no debe limitarse a seleccionar una sola tipología de controles, ya que cada enfoque aporta un valor específico a la seguridad de la información. Lo más recomendable es combinarlos de manera estratégica, como quien conforma un equipo eficaz: algunos previenen, otros detectan y otros corrigen; mientras que los controles físicos, técnicos y administrativos se integran para cerrar posibles brechas. De esta forma, se establece un sistema de protección más completo, confiable y adaptable a las necesidades reales de la empresa, reduciendo riesgos innecesarios y garantizando la continuidad de las operaciones.


    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3.	Normativa legal 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/14.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para implementar un plan eficaz de seguridad de la información, las organizaciones deben apoyarse en marcos normativos que sirvan como guía para la aplicación de controles de manera estructurada y coherente. Estos marcos, tanto de carácter internacional como nacional, ofrecen lineamientos y buenas prácticas que orientan la protección de los activos de información, permitiendo su adaptación a distintos sectores y contextos organizacionales. 
        br
        br
        p.mb-0 A continuación, se presentan normas internacionales ampliamente reconocidas en materia de seguridad de la información; asimismo, se incluyen normativas nacionales que responden a las particularidades del entorno colombiano. Su conocimiento y correcta aplicación fortalecen la gestión institucional, promueven el cumplimiento regulatorio y contribuyen al desarrollo de una cultura organizacional orientada a la protección de la información.


    .div.mb-4(data-aos='fade')  
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 3.
        span Normativa internacional con aplicación en controles de seguridad
      .tabla-a.color-acento-contenido
        table(alt="Las principales normas internacionales en materia de seguridad de la información proporcionan marcos de referencia que facilitan la gestión, control y mejora continua de los sistemas informáticos. Su adopción contribuye a consolidar entornos más seguros, confiables y alineados con los estándares globales de protección de datos.")
          caption Nota: (TI) Tecnologías de la Información.
          thead
            tr.bg-color-acento-contenido
              th Norma / regulación
              th Enfoque principal
              th Aplicación en controles de seguridad
              th Ejemplo en pyme
          tbody.text-start
            tr
              td.fw-bold ISO/IEC 27001
              td Sistema de Gestión de Seguridad de la Información (SGSI).
              td Define cómo implementar, monitorear y mejorar controles para garantizar confidencialidad, integridad y disponibilidad.
              td La empresa define un plan de copias de seguridad semanales, restringe accesos con usuarios y contraseñas únicas, y crea un procedimiento de recuperación de datos en caso de fallas del sistema. 
            tr
              td.fw-bold ISO/IEC 27002
              td Buenas prácticas y catálogo de controles de seguridad. 
              td Proporciona una guía detallada para seleccionar y aplicar controles administrativos, técnicos y físicos. 
              td La empresa aplica autenticación de doble factor en correos, instala cámaras en la oficina y capacita trimestralmente a los empleados sobre #[em phishing] y manejo seguro de documentos. 
            tr
              td.fw-bold NIST SP 800-53 (EE. UU.)
              td Controles de seguridad y privacidad para sistemas de información federales. 
              td Ofrece un marco robusto de controles clasificándolos según impacto y criticidad, útil como referencia en distintos sectores. 
              td La empresa aplica parches de seguridad mensuales (preventivo), monitoreo con #[em Security Information and Event Management] (SIEM) para detectar intrusiones (detectivo) y un plan de restauración de servidores en la nube (correctivo). 
            tr
              td.fw-bold (#[em Control Objectives for Information and Related Technologies]) COBIT
              td Gobernanza y gestión de TI. 
              td Relaciona objetivos de negocio con la seguridad, orientando la implementación de controles desde la perspectiva de gobierno. 
              td La empresa implementa control de acceso a la base de datos de clientes (técnico), revisiones periódicas de seguridad por auditor interno (administrativo) y cámaras en áreas críticas (físico), todo documentado para mostrar cumplimiento ante socios e inversionistas. 

    img.mb-4(src='@/assets/curso/temas/t1/15.png', alt='')

    .div(data-aos='fade')  
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 4. 
        span Normativa nacional con aplicación en controles de seguridad
      .tabla-a.color-acento-contenido
        table(alt="Las principales normativas nacionales en seguridad de la información establecen directrices para la protección de los datos y la prevención de delitos informáticos, promoviendo la implementación de controles adecuados en las organizaciones.")
          thead
            tr.bg-color-acento-contenido
              th Norma / regulación
              th Enfoque principal
              th Aplicación en controles de seguridad
              th Ejemplo en pyme
          tbody.text-start
            tr
              td.fw-bold Ley 1581 de 2012  
              td Protección de datos personales. 
              td Exige controles administrativos y técnicos que garanticen el tratamiento seguro de datos sensibles de los ciudadanos. 
              td La IPS guarda historias clínicas en un sistema con claves únicas y solicita autorización escrita a los pacientes para el uso de sus datos. 
            tr
              td.fw-bold Decreto 1377 de 2013  
              td Reglamenta la Ley 1581, especificando condiciones de autorización y responsabilidad. 
              td Refuerza controles para la autorización, uso y almacenamiento de información personal. 
              td La empresa notifica a sus clientes por correo electrónico cómo usará sus datos y conserva el registro de aceptación. 
            tr
              td.fw-bold Ley 1273 de 2009  
              td Delitos informáticos y protección de la información y de los datos. 
              td Obliga a implementar controles que prevengan accesos no autorizados, fraudes y daños a sistemas informáticos. 
              td La empresa implementa #[em firewalls], antivirus, monitoreo de accesos y políticas de sanciones internas para prevenir fraudes en su plataforma. 
            tr
              td.fw-bold Circular Externa 007 de 2018 (Superfinanciera) 
              td Lineamientos de ciberseguridad para el sector financiero. 
              td Obliga a entidades financieras a contar con planes de gestión de riesgos, monitoreo y respuesta ante incidentes. 
              td La empresa designa a un responsable de ciberseguridad habilita autenticación multifactorial en accesos críticos, realiza copias de seguridad y pruebas de recuperación trimestrales; además documenta procedimientos de notificación a clientes y mantiene evidencia para auditoría. 


    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4.	Relación con activos y riesgos

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-5.bg-1.p-4.d-flex.align-items-center
        img.px-4.px-md-5.px-lg-0(src='@/assets/curso/temas/t1/16.svg', alt='')
      .col-lg-7.bg-3.p-4
        p Es fundamental tener presente que los controles de seguridad deben diseñarse y aplicarse de acuerdo con los activos de información, los cuales comprenden los datos, los sistemas, la infraestructura física y tecnológica, así como los procesos organizacionales. Cada uno de estos activos posee un valor específico para la empresa, por lo que resulta indispensable implementar medidas de seguridad adecuadas que garanticen su protección y eviten su pérdida, daño o acceso no autorizado.
        p.mb-0 Asimismo, los riesgos surgen a partir de amenazas y vulnerabilidades que pueden comprometer la disponibilidad, integridad o confidencialidad de dichos activos. Los controles tienen como propósito reducir la probabilidad de que un riesgo se materialice o, en su defecto, mitigar su impacto en caso de que ocurra.

    p.mb-4 En este sentido, la relación entre activos, riesgos y controles es inseparable. Generalmente, se sigue esta secuencia para asegurar una gestión eficaz de la seguridad de la información dentro de la organización: 

    .div.mb-4(fade-aos='fade')  
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 1.  
        span Secuencia de gestión de la seguridad 
      figure.px-lg-4
        img.px-lg-5(src='@/assets/curso/temas/t1/fig1.svg', alt='El proceso inicia con la identificación y valoración de los activos de información, con el fin de conocer su importancia y características. Posteriormente, se analizan los riesgos asociados a dichos activos para determinar las amenazas y vulnerabilidades que pueden afectarlos. Finalmente, se seleccionan los controles más adecuados para garantizar su protección y minimizar los riesgos identificados.')
      
    p Seguir esta planificación permite garantizar que las medidas de seguridad no se apliquen de forma genérica, sino que estén alineadas con las prioridades estratégicas de la organización y con su realidad operativa. 


    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.5.	Criterios de selección	 

    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/17.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.mb-4          
          .col-lg-2.col-md-2.d-none.d-md-block
            img(src='@/assets/curso/temas/t1/deco1.svg', alt='')
          .col-lg-10.col-md-10
            p.mb-0 La selección de controles de seguridad requiere un enfoque estructurado y basado en los riesgos previamente identificados. Por ejemplo, según la norma ISO/IEC 27001, las organizaciones deben elegir los controles del anexo A en función de los resultados obtenidos en la evaluación de riesgos, asegurando que cada decisión quede documentada en la Declaración de Aplicabilidad (Secureframe, 2022).
        .bg-1.tarjeta.p-4.mb-4.mb-lg-0
          p.mb-0 De igual manera, el Marco de Gestión de Riesgos (RMF) del Instituto Nacional de Estándares y Tecnología (NIST) establece la fase #[em select], en la cual se seleccionan, adaptan y documentan los controles necesarios conforme al nivel de impacto del sistema y a los resultados del análisis de riesgos (CMS, 2024).
    
    p.mb-4 Con base en estas guías, es posible identificar criterios clave que orientan la selección de los controles más adecuados para cada contexto organizacional.

    .div(data-aos='fade')  
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 5.
        span Lista sugerida de criterios
      .tabla-a.color-acento-contenido
        table(alt="La selección de controles de seguridad debe basarse en criterios que aseguren su efectividad y coherencia con las necesidades de la organización. Estos incluyen la relevancia frente al riesgo, la alineación con objetivos y normativas, la proporcionalidad entre costo y beneficio, la documentación justificativa de las decisiones y la adaptabilidad ante cambios en el contexto o los riesgos.")
          thead
            tr.bg-color-acento-contenido
              th.w-25 Criterio
              th Descripción
              th Ejemplo
          tbody.text-start
            tr
              td.fw-bold Relevancia frente al riesgo
              td Los controles deben responder directamente a los riesgos identificados en el análisis, priorizando los activos críticos (información de clientes, sistemas financieros, etc.). La finalidad es garantizar la protección de la confidencialidad, integridad y disponibilidad.
              td Una empresa de comercio electrónico prioriza implementar autenticación multifactorial (MFA) en su sistema de pagos porque el análisis de riesgos mostró alta probabilidad de fraude.
            tr
              td.fw-bold Alineación con objetivos y normativas
              td Los controles deben ser seleccionados considerando tanto los objetivos de seguridad de la empresa como los requisitos regulatorios o legales que le aplicuen.
              td Una entidad financiera adopta cifrado de datos sensibles para cumplir con la Circular Externa 007 de 2018 de la Superfinanciera y a la vez garantizar confianza en sus clientes.
            tr
              td.fw-bold Proporcionalidad (costo - beneficio)
              td La implementación de controles debe ser proporcional al nivel de riesgo y a la capacidad financiera y técnica de la organización. No siempre es viable aplicar la solución más costosa, sino la más adecuada.
              td Una empresa de diseño gráfico decide usar un servicio en la nube con copias de seguridad automáticas en lugar de montar un costoso centro de datos propio.
            tr
              td.fw-bold.fw-bold Documentación justificativa
              td La selección (o exclusión) de cada control debe estar documentada en la Declaración de Aplicabilidad, donde se justifica con base en riesgos, normativas y recursos disponibles.
              td Una empresa de alimentos documenta por qué implementó control de accesos físicos a su bodega (por riesgo alto de robo) pero descartó la instalación de biometría (por costo elevado).
            tr
              td.fw-bold Adaptabilidad y mejora continua
              td Los controles deben poder ajustarse a los cambios en los riesgos, en la infraestructura tecnológica y en el contexto de la organización. Es un proceso dinámico, no estático.
              td Una empresa que comenzó usando contraseñas simples evoluciona a políticas de contraseñas robustas y luego a MFA, a medida que su volumen de clientes crece y el riesgo aumenta.




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
