export default {
  global: {
    componenteFormativo:
      'Tamizaje y atención de personas con riesgo alto frente al consumo, abuso y adicción de SPA',
    descripcionCurso:
      'La atención de personas con riesgo a SPA permite identificar, apropiar e implementar pruebas de tamizaje que posibilitan realizar intervenciones breves, desde la óptica de la promoción de la salud y la prevención de la enfermedad, de tal forma que el trabajador pueda proponer acciones encaminadas a prevenir, reducir y llegado el caso educar sobre el consumo de sustancias psicoactivas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Escalas de Tamizaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Objetivos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Escala Carlos CRAFFT',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: '<em>ASSIST</em>',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'APGAR FAMILIAR',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: '<em>AUDIT</em>',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Prevención y atención del consumo de SPA ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Prevención',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Mitigación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Superación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Capacidad de respuesta',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Exigencia y garantía de derechos en salud para personas consumidoras de SPA',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Intervención breve ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Objetivos específicos ',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Elementos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Entrevista motivacional de intervención',
            hash: 't_3_3',
          },
          {
            numero: '3.3.1',
            titulo: 'Objetivo',
            hash: 't_3_3_1',
          },
          {
            numero: '3.3.2',
            titulo: 'Rueda de cambio',
            hash: 't_3_3_2',
          },
          {
            numero: '3.3.3',
            titulo: 'Estadiar',
            hash: 't_3_3_3',
          },
          {
            numero: '3.3.4',
            titulo: 'Determinación',
            hash: 't_3_3_4',
          },
          {
            numero: '3.3.5',
            titulo: 'Acción',
            hash: 't_3_3_5',
          },
          {
            numero: '3.3.6',
            titulo: 'Mantenimiento',
            hash: 't_3_3_6',
          },
          {
            numero: '3.3.7',
            titulo: 'Estrategias para desarrollar la entrevista motivacional',
            hash: 't_3_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Entornos protectores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Cómo fortalecerlos ',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Estrategias de intervención individual y colectiva',
            hash: 't_4_2',
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
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_2_33130227.pdf',
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
      tema: '1. Escalas de Tamizaje',
      referencia:
        'Organización Panamericana de Salud (s.f.). Módulo 2: Tamizaje, Intervención Breve y Entrevista Motivacional.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/presentacion-tamizaje.pdf',
    },
    {
      tema:
        '2. Prevención, mitigación, superación y capacidad de respuesta, ejes del Gobierno para combatir el consumo de drogas en Colombia',
      referencia:
        'Ministerio de salud (2012). Prevención, mitigación, superación y capacidad de respuesta, ejes del Gobierno para combatir el consumo de drogas en Colombia.',
      tipo: 'Artículo',
      link:
        'https://www.minsalud.gov.co/Paginas/Prevenci%C3%B3n,%20mitigaci%C3%B3n,%20superaci%C3%B3n%20y%20capacidad%20de%20respuesta,%20ejes%20del%20Gobierno%20para%20combatir%20el%20consumo%20de%20drogas%20en%20Colomb.aspx',
    },
    {
      tema: '3. Prevención y atención del consumo de SPA',
      referencia:
        'Ministerio de Salud y Protección Social (2.019). Política Integral para la Prevención y Atención del Consumo de Sustancias Psicoactivas.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/politica-prevencion-atencion-spa.pdf',
    },
  ],
  glosario: [
    {
      termino: 'SPA',
      significado: 'Sustancias PsicoActivas',
    },
    {
      termino: 'Estadío',
      significado: 'etapa',
    },
    {
      termino: '<em>APGAR</em>',
      significado: 'prueba de tamizaje que evalúa la familia como sistema.',
    },
    {
      termino: 'Escalas de tamizaje',
      significado:
        'son herramientas e instrumentos que permiten conocer si una persona se encuentra en riesgo de algún padecimiento, enfermedad o trastorno.',
    },
  ],
  referencias: [
    {
      referencia:
        'Defensoría del pueblo. (2012). Anotaciones Ley 1566 de 31 de julio de 2012.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/GCFI/1566%20SPA_10_04_2013.pdf',
    },
    {
      referencia:
        'Ministerio de Salud. (2017). Plan nacional para la promoción de la salud, la prevención, y la atención del consumo de sustancias psicoactivas 2014 – 2021.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/plan-nacional-consumo-alcohol-2014-2021.pdf',
    },
    {
      referencia:
        'Ministerio de Salud. (2015). Orientaciones para el desarrollo de las actividades de tamizaje en el marco del Plan de Salud Pública de Intervenciones Colectivas – PIC. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/orientaciones-tamizaje-pic.pdf',
    },
    {
      referencia:
        'Miller, W.R. y Rollnick, S (1991). Motivacional Interwing. People to change addictive behavior. Nueva York: Guilford (traducción al español, Barcelona: Paidós ,1999.',
    },
    {
      referencia:
        'Ministerio de Salud (2019). Política Integral para la Prevención y Atención del Consumo de Sustancias Psicoactivas Ministerio de Salud y Protección Social - Resolución 089 de 2019',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/politica-prevencion-atencion-spa.pdf',
    },
    {
      referencia:
        'Ministerio de Salud (2022). Prevención, mitigación, superación y capacidad de respuesta, ejes para combatir el consumo de drogas. ',
      link:
        'https://www.minsalud.gov.co/salud/Paginas/Prevencion-mitigacion-superacion-capacidad-de-respuesta-ejes-para-combatir-el-consumo-de-drogas.aspx',
    },
    {
      referencia:
        'Vicente E. (2014). Manual para la evaluación clínica de los trastornos psicológicos. Director ediciones pirámide páginas 35-45. Madrid.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sonia Margarita Leal Cruz',
          cargo: 'Experta Técnica',
          centro:
            'Regional Distrito Capital Centro de Formación de Talento Humano en Salud.',
        },
        {
          nombre: 'Claudia Milena Hernández Naranjo',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital Centro de Gestión Industrial.',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Rafael Neftali Lizcano Reyes',
          cargo: 'Responsable Equipo de Desarrollo Curricular.',
          centro:
            'Regional Santander Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrección de estilo',
          centro: 'Regional Distrito Capital Centro de Diseño y Metrología.',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Aruzidna Sánchez Alonso',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
