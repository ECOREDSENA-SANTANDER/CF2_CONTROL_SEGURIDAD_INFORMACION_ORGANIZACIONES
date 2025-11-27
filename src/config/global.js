export default {
  global: {
    Name:
      'Implementación y seguimiento de controles de seguridad de la información',
    Description:
      'Este componente formativo profundiza en la aplicación práctica de los controles de seguridad de la información como parte esencial de la gestión organizacional. A través del estudio de su propósito, tipología, normativa y relación con los activos y riesgos, el aprendiz comprenderá cómo seleccionar e implementar controles adecuados. Asimismo, se enfatiza en los criterios de priorización, la definición de responsables y la importancia del monitoreo continuo, fomentando la capacidad de establecer medidas preventivas y correctivas que garanticen la protección integral de la información y la resiliencia de la organización frente a incidentes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Controles de seguridad de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Propósito de los controles de seguridad de la información',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de controles',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Normativa legal ',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Relación con activos y riesgos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Criterios de selección',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Implementación de controles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Criterio de priorización ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Proceso de implementación de controles',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Roles y responsabilidades en seguridad de la información',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Monitoreo y verificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Importancia de la supervisión y validación de la seguridad de la información',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Estrategias de seguimiento',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Periodicidad',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Registros y evidencias',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Normativa legal',
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (2023). Gestión de Riesgos de Seguridad de la Información.',
      tipo: 'PDF',
      link:
        'https://www.dian.gov.co/atencionciudadano/LMDP/Informacion-Innovacion-y-Tecnologia/Seguridad-de-la-Informacion/Cartillas/CT-IIT-0132.pdf',
    },
    {
      tema: 'Normativa legal',
      referencia:
        'Global Quality Corp. (2022). ISO 27001 | Gestión de Riesgos de Seguridad de la Información en 3 minutos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1i-J3FtJYQg',
    },
    {
      tema: 'Implementación de controles',
      referencia:
        'Soy Ingenio. (2021). ¿Qué es el CICLO PHVA o PDCA? Ejemplo personal. Deming.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kWp-WGSmV3U',
    },
    {
      tema:
        'Importancia de la supervisión y validación de la seguridad de la información',
      referencia:
        'LATAM Certificaciones TI. (2025). CISO: Seguridad de la Información: Plan de Implementación de Controles y Política de Seguridad de TI.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=O3I8FXam9FE',
    },
    {
      tema: 'Implementación de controles',
      referencia:
        'CyberAcademy51. (2024). 1.1.2 Tipos de controles de seguridad | CompTIA Security+ SY0-701 explicado en Español.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=u9j89nRbqU4',
    },
    {
      tema: 'Implementación de controles',
      referencia:
        'CyberAcademy51. (2024). 1.1.1 Categorías de controles de seguridad | CompTIA Security+ SY0-701 explicado en Español.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=NCa7gUBd4JA',
    },
    {
      tema: 'Implementación de controles',
      referencia:
        'LATAM Certificaciones TI. (2024). CISO: Ciberseguridad: SOC 2 - Guia completa de controles de seguridad.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=SlOqhCwOpRw',
    },
  ],
  glosario: [
    {
      termino: 'Asignación de responsables',
      significado:
        'Proceso mediante el cual se designan personas o equipos específicos para ejecutar, supervisar y mantener los controles de seguridad. Garantiza que haya claridad en las funciones y evita la duplicidad o ausencia de responsabilidades.',
    },
    {
      termino: 'Auditoria',
      significado:
        'Actividad sistemática, documentada e independiente para evaluar si los controles de seguridad están implementados correctamente y si cumplen con las políticas, normas y objetivos de la organización. Puede ser interna o externa.',
    },
    {
      termino: 'CIA (Confidencialidad, Integridad, Disponibilidad)',
      significado:
        'Principios fundamentales de la seguridad de la información que aseguran que los datos sean accesibles solo por personas autorizadas, no sean alterados indebidamente y estén disponibles cuando se necesiten.',
    },
    {
      termino: 'Controles de seguridad',
      significado:
        'Son las medidas, técnicas, administrativas y físicas implementadas para proteger los activos de información. Su objetivo es prevenir incidentes, detectar irregularidades y mitigar impactos, asegurando la confidencialidad, integridad y disponibilidad de los datos.',
    },
    {
      termino: 'Gestión de riesgos',
      significado:
        'Conjunto de procesos que permite identificar, analizar, valorar, tratar y monitorear riesgos, con el fin de minimizar su impacto en la seguridad de la información y los objetivos organizacionales.',
    },
    {
      termino: 'Indicadores de control',
      significado:
        'Métricas utilizadas para medir el desempeño y la efectividad de los controles implementados. Permiten detectar fallas a tiempo y tomar decisiones de mejora con base en datos objetivos.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'Enfoque de trabajo que busca optimizar los procesos y controles de forma permanente. Se apoya en el ciclo PHVA (Planear, Hacer, Verificar, Actuar) para adaptarse a nuevos riesgos y cambios en el entorno.',
    },
    {
      termino: 'Mitigación',
      significado:
        'Conjunto de acciones diseñadas para reducir la probabilidad o el impacto de un riesgo. Puede incluir ajustes en procesos, adquisición de tecnología o capacitación del personal.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'Actividad de seguimiento permanente de los controles de seguridad y los eventos que puedan comprometer la información. Permite detectar anomalías y actuar de manera preventiva o correctiva.',
    },
    {
      termino: 'Normativa',
      significado:
        'Conjunto de leyes, estándares técnicos y buenas prácticas que orientan a las organizaciones en el diseño, implementación y cumplimiento de políticas de seguridad de la información.',
    },
    {
      termino: 'Plan de acción',
      significado:
        'Documento o conjunto de actividades planificadas para implementar mejoras, corregir fallas o atender riesgos. Incluye tiempos, responsables, recursos y metas específicas.',
    },
    {
      termino: 'Prioridad',
      significado:
        'Nivel de urgencia asignado a un riesgo o actividad de control, basado en su impacto, probabilidad y relevancia para los objetivos de la organización.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Posibilidad de que una amenaza aproveche una vulnerabilidad para causar daño a los activos de información, afectando la confidencialidad, integridad o disponibilidad de los mismos. Su análisis permite tomar decisiones informadas.',
    },
    {
      termino: 'Seguridad de la información',
      significado:
        'Disciplina que implementa medidas para proteger los datos de una organización, garantizando que se mantengan confidenciales, íntegros y disponibles ante cualquier tipo de amenaza.',
    },
    {
      termino: 'Valoración de riesgo',
      significado:
        'Consiste en asignar un nivel de importancia o gravedad a los riesgos identificados, considerando su probabilidad y el impacto que tendrían sobre los activos. Esta valoración facilita priorizar acciones preventivas o correctivas para minimizar los efectos negativos sobre la organización.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arias, S. (2024). Estos son los principales roles en la ciberseguridad.',
      link: 'https://www.arsys.es/blog/principales-roles-ciberseguridad',
    },
    {
      referencia:
        'CMS CyberGeek. (2024). CMS risk management framework (RMF): Select step.',
      link:
        'https://security.cms.gov/policy-guidance/cms-risk-management-framework-rmf-select-step',
    },
    {
      referencia:
        'Cycognito. (2024). What are security controls: Types, functions, and 8 frameworks to know. CyCognito.',
      link:
        'https://www.cycognito.com/learn/exposure-management/security-controls.php',
    },
    {
      referencia:
        'Holloway, D. (2025a). ISO 27001 requirement 5.3 – organisational roles & responsibilities. ISMS.Online.',
      link:
        'https://www.isms.online/iso-27001/organisational-roles-responsibilities-authorities/',
    },
    {
      referencia:
        'Holloway, D. (2025b). ISO 27001:2022 annex A 5.2 - information security roles and responsibilities. ISMS.Online.',
      link:
        'https://www.isms.online/iso-27001/annex-a-2022/5-2-information-security-roles-responsibilities-2022/',
    },
    {
      referencia: 'IBM. (2023). ¿Qué son los controles de seguridad? Ibm.com.',
      link: 'https://www.ibm.com/mx-es/think/topics/security-controls',
    },
    {
      referencia:
        'Equipo Auditogl. (2024, noviembre 21). Control interno. Auditogl.',
      link:
        'https://www.auditool.org/blog/control-interno/cual-es-la-diferencia-entre-controles-preventivos-detectivos-y-correctivos',
    },
    {
      referencia: 'PENTERA. (2024). Glossary Risk Prioritization. Pentera.',
      link: 'https://pentera.io/glossary/risk-prioritization/',
    },
    {
      referencia:
        'Secureframe. (2022). ISO 27001 controls explained: A guide to Annex A (updated 2024).',
      link: 'https://secureframe.com/hub/iso-27001/controls',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Armando Javier López Sierra',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jenny Rocio Reyes Acevedo',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
