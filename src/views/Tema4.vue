<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Entornos protectores

    p(data-aos="zoom-in") Según las soluciones 3202 de 2015 y 3280 de 2018, los ámbitos son situaciones de la vida en los que los sujetos se desenvuelven, cimenta su historia subjetiva, sus interrelaciones con la vida social, histórica, cultural y política a la que le compete. Unen además plataformas virtuales, entendidas como ambientes interactivos que permiten un ingreso ilimitado a un diverso tipo de información y a vínculos que tienen la posibilidad de producir componentes protectores y/o de peligro gracias a las diversas probabilidades de contacto que dan las tecnologías de la información y comunicaciones.

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1 Cómo fortalecerlos 

    p(data-aos="zoom-in") Un ámbito defensor es un ecosistema (social, natural, virtual) en el cual nos tratamos bien y cuidamos los unos de los demás en un entorno independiente de maltrato.
    p(data-aos="zoom-in") Algunas recomendaciones para fortalecer son:

    SlyderB.mb-5.mt-5(:datos="datosSlyder")

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 Estrategias de intervención individual y colectiva   

    p(data-aos="zoom-in") Se pretende exponer la participación colectiva como potenciadora de las habilidades poblacionales, a partir de la triple visión de facilitar la colaboración social, prevenir la aparición de situaciones de peligro.

    .row.mt-5
      .col-6
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Entorno Hogar")
            .col
              p Solicita, actividades e intervenciones que construyan las habilidades de papás, madres y cuidadores primarios en pautas de crianza, funcionamiento de emociones, vínculo de respeto y comunicación asertiva, escucha activa y administración de conflictos, fundamentadas en la identificación del otro y el equilibrio de género.
          .row(numero="2" titulo="Entorno educativo")
            .col
              p Los hechos y actuaciones que realiza la sociedad educativa tienen que fomentar la convivencia, el reconocimiento y respeto de la variedad, las pautas de crianza, el desarrollo de planes o proyectos de vida con sentido, la averiguación de ocupaciones estudiantiles y la prevención de la deserción estudiantil. 
          .row(numero="3" titulo="Entorno Laboral")
            .col
              p Las actuaciones estarán orientadas hacia el trabajo cooperativo, en el respeto, reducción del estigma y autoestigma, reconocimiento e implementación de las jerarquías, exactitud en los papeles y verificación de labores y promoción de tiempo en familia. Evitar condiciones de estrés y de exclusión de cualquier tipo.
      .col-6
        LineaTiempoD.color-primario
          .row(numero="4" titulo="Entorno institucional")
            .col
              p Se benefician tácticas para asegurar el ejercicio de los derechos humanos y promoción de la convivencia, reducción del estigma y autoestigma, generación de vínculos afectivos y seguros, desarrollo de habilidades para la vida y creación de planes o proyectos de vida con sentido. 
          .row(numero="5" titulo="Entorno comunitario")
            .col
              p Son principalmente los procesos de desarrollo social y ciudadanía igualitaria, con hincapié en el empoderamiento de las féminas, la población con identidad u orientación sexual diversa y demás conjuntos sujetos de discriminación.


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Ámbito o entorno Hogar: ',
        texto:
          'Se fortalece la construcción de vínculos e interrelaciones sociales, la defensa y cuidado de sus miembros, para el desarrollo de la identidad propia y del sentido de pertenencia, hábitos y estilos de vida saludables y para la transmisión de valores.',
        imagen: require('@/assets/curso/temas/tema4/img1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Entorno educativo',
        texto:
          'Es el medio que auxilia la reproducción de la cultura, con interacciones sociales, el desarrollo cognitivo, la afectividad, buenos hábitos de vida, la consolidación de la identidad personal, el incremento de capacidades y destrezas y el sentido de lo colectivo.',
        imagen: require('@/assets/curso/temas/tema4/img2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Entorno Laboral',
        texto:
          'Es el medio en donde los individuos se disponen para crear bienes y servicios, extienden vínculos, y desenvuelven probabilidades y oportunidades que potencian los estilos, métodos y condiciones de vida.',
        imagen: require('@/assets/curso/temas/tema4/img3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Entorno comunitario',
        texto:
          'Es importante robustecer redes comunitarias para la identificación de componentes y ámbitos protectores e incidir en la forma como se informa y vincula a los individuos relacionadas con el consumo de sustancias psicoactivas.',
        imagen: require('@/assets/curso/temas/tema4/img4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Entorno institucional',
        texto:
          'Son sitios extramurales sanitarios y sociales, temporales o permanentes, donde intervienen personas, principalmente no familiares y que comparten sucesos vitales.',
        imagen: require('@/assets/curso/temas/tema4/img5.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
