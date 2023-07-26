<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Escalas de Tamizaje

    p(data-aos="zoom-in") Las escalas de tamizaje son herramientas que permiten reconocer si las personas se encuentran en riesgo de algún padecimiento o trastorno de salud, además de definir si existiendo un problema, éste necesita que se haga una valoración más profunda teniendo en cuenta un cúmulo de procedimientos y técnicas breves.

    p.mb-5(data-aos="zoom-in") En el siguiente enlace, se puede consultar información relacionada con las orientaciones para el desarrollo de las actividades de tamizaje en el marco del Plan de Salud Pública.
    
    .row.justify-content-center.mb-5
      .col-auto
        a.anexo(href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/orientaciones-tamizaje-pic.pdf" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/temas/tema1/img1.svg")
          .anexo__texto
            p Enlace web. Tamizaje en el marco del Plan de Salud Pública de Intervenciones Colectivas – PIC
    
    
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Tipos

    p(data-aos="zoom-in") Existen diferentes tipos de escalas para realizar tamizaje en cuanto al uso, abuso y consumo de sustancias psicoactivas, pero es importante hacer claridad que una escala de tamizaje no es una prueba psicológica y no constituye por sí sola en un elemento diagnóstico, sino más bien un elemento que permite predecir si el individuo está o no consumiendo algún tipo de sustancia sin que haya presentado ningún tipo de síntoma, mientras que la prueba o examen psicológico especializado se realiza para aclarar signos y síntomas y está sí constituye una prueba diagnóstica sino más bien una herramienta que sirve de base para orientar un proceso. 

    p.mb-5(data-aos="zoom-in") Las escalas de tamizaje para detectar el posible uso y abuso de sustancias psicoactivas pueden dividirse en dos grandes grupos:

    .row.justify-content-center.mb-4.mt-4(data-aos="fade-left")
      .col-lg-4.col-md-6.col-12
        figure
          img(src="@/assets/curso/temas/tema1/img2.svg", alt="")
        h4.mt-3 Marcadores biológicos
        p Entre ellas tenemos las de alcoholemia, de saliva y orina y pruebas de sangre este tipo de pruebas son excelentes ya que permiten una medición objetiva, se pueden administrar de manera rápida y los resultados son casi inmediatos.
      .col-lg-4.col-md-6.col-12
        figure
          img(src="@/assets/curso/temas/tema1/img3.svg", alt="")
        h4.mt-3 Autoreporte
        p Este tipo de pruebas permiten detectar el consumo por medio de entrevistas y cuestionarios aplicados como: #[i ASSIST], #[i CAGE], #[i TWEAK], #[i AUDIT], #[i DAST-10], y el #[i CRAFTT].

    .row.justify-content-center.align-items-center.mt-5 
      .col-12(data-aos="fade-left")
        p(data-aos="zoom-out") Para la aplicación de auto reportes es importante que se tengan en cuenta aspectos como:
      .col-12
        ul.lista-ul--color
          li(data-aos="zoom-in")
            i.fas.fa-atom 
            | El ambiente de aplicación: debe asegurarse que sea confiable y otorgue veracidad al proceso y que las personas estén sobrias en el momento de la aplicación. 
          li(data-aos="zoom-in")
            i.fas.fa-atom 
            |	La persona debe recibir constancia escrita de confidencialidad.
          li(data-aos="zoom-in")
            i.fas.fa-atom 
            |	Las preguntas deben ser objetivas y tener claridad en la formulación.
          li(data-aos="zoom-in")
            i.fas.fa-atom 
            |	Importante contar con ayudas de memoria o un calendario o tarjetas de respuesta.

        p(data-aos="zoom-out") De otra parte, es importante tener en cuenta que una buena herramienta de tamizaje debe tener algunas características tales como: 
    .row.mt-5
      .col-6
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Debe ser breve")
            .col
              p Un mínimo de 5 preguntas y un máximo de 10 de manera que permita obtener información en poco tiempo.
          .row(numero="2" titulo="Flexibilidad")
            .col
              p De manera que se pueda adaptar fácilmente a las situaciones y características del individuo.
          .row(numero="3" titulo="Debe ser fácil")
            .col
              p De aplicar y en un lenguaje de fácil comprensión para el entrevistado.
          .row(numero="4" titulo="Debe indicar sobre consumo")
            .col
              p De sustancias, alcohol u otras drogas que inciden en la problemática.
      .col-6
        LineaTiempoD.color-primario
          .row(numero="5" titulo="Necesidad de otra prueba")
            .col
              p Es importante que revele también la necesidad de otra prueba o de una intervención posterior a las realizadas.
          .row(numero="6" titulo="Alcance")
            .col
              p Características de sensibilidad (capacidad para determinar quienes tienen problemas con las drogas) y especificidad  (para revelar quienes no tienen problemas).
          .row(numero="7" titulo="Confianza")
            .col
              p Finalmente, estas pruebas deben enfocarse en permitir espacios de diálogo y confianza para ofrecer mejores condiciones.


    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2 Objetivos
      
    p(data-aos="zoom-in") El objetivo principal de una prueba de tamizaje para el consumo de SPA consiste en identificar si la persona o individuo realmente tiene problemas o no de consumo o está expuesto a factores de riesgo que lo predisponen para el mismo. Adicionalmente también tiene como objetivo que la persona tome conciencia de su situación y de la necesidad de hacer algo al respecto.

    p.mb-5(data-aos="zoom-in") Es importante resaltar que para que la aplicación de un instrumento cumpla su objetivo principal deben tenerse en cuenta aspectos como: 

    SlyderF(columnas="col-md-6 col-xl-4")
      .tarjeta-avatar-tema1
        img(src='@/assets/curso/temas/tema1/img4.svg' alt='')
        .tarjeta.color-primario
          .p-4.text-center
            h4.mt-3 Primero
            p.mb-0 Evitar caer en críticas y juicios. A nadie le gusta ser juzgado y menos cuando se encuentra en proceso de mejora. 
      .tarjeta-avatar-tema1
        img(src='@/assets/curso/temas/tema1/img5.svg' alt='')
        .tarjeta.color-primario
          .p-4.text-center
            h4.mt-3 Segundo
            p.mb-0 Realizar hincapié en que este es un proceso que permite ayudar a la persona y que es de carácter confidencial.
      .tarjeta-avatar-tema1
        img(src='@/assets/curso/temas/tema1/img6.svg' alt='')
        .tarjeta.color-primario
          .p-4.text-center
            h4.mt-3 Tercero
            p.mb-0 La aplicación de la prueba debe hacerse a manera de conversación por ello el encargado debe conocerla muy bien. 
      .tarjeta-avatar-tema1
        img(src='@/assets/curso/temas/tema1/img7.svg' alt='')
        .tarjeta.color-primario
          .p-4.text-center
            h4.mt-3 Cuarto
            p.mb-0 Para que la prueba sea un éxito y cumpla con su objetivo se debe generar un clima de confianza, hacer contacto visual con el individuo. 

    p(data-aos="zoom-in").mt-5 A continuación, se describen algunas herramientas de tamizaje utilizadas para detectar consumo de sustancias y alcohol.

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3 Escala Carlos #[i CRAFFT]
    
    p(data-aos="zoom-in") Es una escala dirigida a población adolescente que consta de 6 preguntas dirigidas a evaluar el abuso de alcohol y drogas, conductas de riesgos y consecuencias del consumo, se aplica en diferentes contextos a manera de entrevista especialmente en consultorios médicos de ayuda a pacientes con problemas conductuales, ha sido aceptado ampliamente. 
    
    .row 
      .col-6
        figure(data-aos="zoom-out")
          img(src="@/assets/curso/temas/tema1/img8.png", alt="")
      .col-6
        p(data-aos="zoom-in") Es importante mencionar que esta escala establece una probabilidad, es decir, cada respuesta afirmativa en la parte B vale un punto y una puntuación mayor a dos equivale a un diagnóstico positivo, lo cual indica la necesidad de realizar una evaluación adicional. El criterio diagnóstico está establecido en dos categorías tal como lo estipula el DSM-V (Manual diagnóstico de trastornos y enfermedades mentales)

    TabsC.color-acento-contenido.mt-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Categoría I . Abuso del alcohol")
        .row.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img9.svg', style="padding: 10%" , alt='')
          .col-md-6.mb-4.mb-md-0
            h4 Categoría I . Abuso del alcohol   
            p Cuando se tiene uno o más de los siguientes factores:
            ul.lista-ul--color
              li(data-aos="zoom-in")
                i.fas.fa-atom 
                | El uso conlleva a incumplimiento de sus obligaciones laborales o familiares. 
              li(data-aos="zoom-in")
                i.fas.fa-atom 
                |	Se usa de manera recurrente en situaciones riesgosas, como por ejemplo conducir, llevar al individuo a problemas legales.
              li(data-aos="zoom-in")
                i.fas.fa-atom 
                |	Continúa su uso a pesar de la recurrencia de problemas asociados.
          
      .py-3.py-md-4(titulo="Categoría II - Dependencia de sustancias psicoactivas (SPA)")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img10.svg', style="padding: 10%" , alt='')
          .col-md-6
            h4 Categoría II - Dependencia de sustancias psicoactivas (SPA)
            p Cuando incurre en:
            ul.lista-ul--color
              li(data-aos="zoom-in")
                i.fas.fa-atom 
                | Tolerancia a la sustancia es decir necesita cada vez mayor cantidad de sustancia para sentirse a gusto.
              li(data-aos="zoom-in")
                i.fas.fa-atom 
                |	Síndrome de abstinencia. 
              li(data-aos="zoom-in")
                i.fas.fa-atom 
                |	Tiempo fallido en reducir el consumo.
              li(data-aos="zoom-in")
                i.fas.fa-atom 
                |	Mayor tiempo invertido en obtener la sustancia o en recuperarse de sus efectos.
              li(data-aos="zoom-in")
                i.fas.fa-atom 
                |	Abandono de las actividades importantes debido al uso de la sustancia. 
              li(data-aos="zoom-in")
                i.fas.fa-atom 
                |	Uso continuado a pesar de sus consecuencias nocivas.

    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.4 #[i ASSIST]

    p(data-aos="zoom-in") Un cuestionario desarrollado por la Organización Mundial de la Salud es una escala dirigida a adultos, ha sido validada y traducida en varios idiomas y culturas, consta de 8 ítems que evalúan el consumo riesgoso, nocivo y dependiente, incluye drogas inyectables, se utiliza en atención primaria en salud mental y se aplica por medio de entrevista, en algunos lugares lo han escalado a una herramienta virtual de auto aplicación lo que genera mayor confiabilidad pues el entrevistado no encuentra ningún tipo de prevención y es más sincero en las respuestas.
    p(data-aos="zoom-in") Este instrumento permite que el examinador conozca información relevante del encuestado en cuanto a uso y abuso de sustancias psicoactivas (legales e ilegales) se refiere, tales como: 
    
    ul.lista-ul--color
      li(data-aos="zoom-in")
        i.fas.fa-atom 
        | Cuáles son las sustancias que el individuo ha consumido en el desarrollo de su vida.
      li(data-aos="zoom-in")
        i.fas.fa-atom 
        |	Cuáles ha consumido en el último trimestre. 
      li(data-aos="zoom-in")
        i.fas.fa-atom 
        |	Qué dificultades ligadas tiene al uso de sustancias.
      li(data-aos="zoom-in")
        i.fas.fa-atom 
        |	Qué riesgos de daño actual o eventual asociados al consumo presenta. 
      li(data-aos="zoom-in")
        i.fas.fa-atom 
        |	Si hay sujeción o dependencia. 
      li(data-aos="zoom-in")
        i.fas.fa-atom 
        |	Conocer si el individuo se inyecta algún tipo de sustancia. 

    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.5 #[i APGAR] FAMILIAR
    
    p(data-aos="zoom-in") Es un instrumento dirigido a adultos, adolescentes y niños que consta de 10 preguntas, que evalúan la dinámica familiar en diferentes contextos, puede ser auto aplicado o por medio de entrevista.
    p(data-aos="zoom-in") Fue desarrollado con el objetivo de que el médico familiar adquiera información relevante de sus consultantes relacionada a la funcionalidad de sus familias, posee cinco reactivos que se pueden aplicar en una entrevista breve a distintos miembros de la familia y en diferentes tiempos a fin de observar las alteraciones. Calcula la funcionalidad de la familia de acuerdo al grado de satisfacción del evaluado, por tanto, permite detectar si el grupo familiar es un recurso de apoyo para el paciente o sí por el contrario puede llegar a contribuir al desarrollo y evolución de su enfermedad.
    p(data-aos="zoom-in") El #[i APGAR] en el cuidado primario de la salud juega un papel importante, teniendo en cuenta que la familia como sistema constituye un rol primordial, tanto en la generación de la enfermedad como en la rehabilitación de la misma, dependiendo del grado de funcionalidad o disfuncionalidad. Es así como el #[i APGAR] familiar que fue diseñado por el Doctor Gabriel Smilkestein pretende evaluar a la familia como sistema, para conocer o identificar familias en riesgo; este cuestionario ha sido validado en diferentes grupos poblacionales de Norteamérica, Asia y Sudamérica, arrojando alta relación con pruebas más especializadas.
    p(data-aos="zoom-in") El instrumento evalúa los siguientes componentes esenciales de la función familiar que son:

    .row.justify-content-center.mt-5
      .col-6
        LineaTiempoD.color-primario(data-aos="zoom-in")
          .row(numero="A" titulo="ADAPTACIÓN")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img11.png', alt='')
            .col-md-6.mb-4.mb-md-0
              p Se refiere a cómo se utilizan los recursos al interior y exterior de la familia para solucionar problemas cuando el equilibrio de la misma es retado por una crisis o una situación.

          .row(numero="P" titulo="PARTICIPACIÓN")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img12.png', alt='')
            .col-md-6.mb-4.mb-md-0
              p Determina el nivel de dominio de cada uno de los sujetos en el grupo familiar. La participación e integración se hace relevante dentro del colectivo. 

          .row(numero="G" titulo="<i>GROWON</i> (CRECIMIENTO)")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img13.png', alt='')
            .col-md-6.mb-4.mb-md-0
              p Es la ganancia en la madurez emocional, física y de autorrealización de cada uno de los individuos que componen el grupo familiar.

          .row(numero="A" titulo="AFECTO")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img14.png', alt='')
            .col-md-6.mb-4.mb-md-0
              p El afecto está relacionado con la atención y el amor que prevalece entre las personas que componen el núcleo familiar.

          .row(numero="R" titulo="RECURSOS")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img15.png', alt='')
            .col-md-6.mb-4.mb-md-0
              p Determina el grado de compromiso para dar a los sujetos del grupo familiar, tales como tiempo dinero, espacio.

    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.6 #[i AUDIT]
      
    p(data-aos="zoom-in") El nombre del <b><i>AUDIT alcohol consumption questions (AUDIT-C)</i></b>, es una herramienta que fue desarrollada por la OMS. Es una escala dirigida a adultos y adolescentes y ha sido validada en diferentes idiomas; consta de 10 ítems los cuales se enfocan en evaluar los siguientes aspectos: 
    
    ul.lista-ul--color
      li(data-aos="zoom-in")
        i.fas.fa-atom 
        | Revela el uso problemático y la dependencia del alcohol. 
      li(data-aos="zoom-in")
        i.fas.fa-atom 
        |	Los resultados posibilitan que el individuo tome la decisión de reducir el consumo de alcohol o abandonarlo por completo. 
      li(data-aos="zoom-in")
        i.fas.fa-atom 
        |	Hace posible comprender qué tipo de consumo ejerce el individuo y cómo le está afectando.

    .row.justify-content-center.align-items-center.mt-5 
      .col-12.col-md-10(data-aos="fade-left")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img17.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0(data-aos="zoom-in") <b>Para tener en cuenta</b>
            br
            br
            p.mb-0(data-aos="zoom-in") <b><i>AUDIT</i></b>: Es una herramienta de fácil aplicación no es invasiva ha sido estimado como el mejor instrumento a la hora de medir problemas asociados al consumo de alcohol en el escenario de la atención primaria.

    p(data-aos="zoom-in") Las anteriores pruebas de tamizaje son las más utilizadas, aunque en el siguiente cuadro se presentan otras que también tiene como finalidad detectar el consumo de sustancias o la tendencia a ser consumidor.

    .col-12.titulo-sexto.color-acento-contenido.mt-3(data-aos="fade-right")
        p.titulo.pb-0.mb-0 <b>Tabla 1.</b> <i>Pruebas de tamizaje Consumo de SPA </i>
    .col-12.px-0(data-aos="fade-left")
      .tabla-a.color-acento-contenido.mb-5
        table
          thead
            tr
              th INSTRUMENTO
              th #[i ASSIST (WHO)]
              th #[i AUDIT (WHO)]
              th #[i CAGE]
          tbody
            tr
              td.td-uno-table.text-center #[strong Dirigido a]
              td.td-dos-table.px-3 Adultos. <br>(Ha sido validado en  muchas culturas e  idiomas).
              td.td-dos-table.px-3 Adultos.<br> Adolescentes.<br> (Ha sido validado en muchas  culturas e idiomas).
              td.td-dos-table.px-3 Adultos.<br> Jóvenes mayores de 16  años.
            tr
              td.td-uno-table.text-center #[strong # Preguntas]
              td.td-uno-table.text-center #[strong 8]
              td.td-uno-table.text-center #[strong 10]
              td.td-uno-table.text-center #[strong 4]
            tr
              td.td-uno-table.text-center #[strong ¿Qué evalúa?]
              td.td-dos-table.px-3 Consumo riesgoso, nocivo y dependencia <br>(Incluye drogas  inyectables).
              td.td-dos-table.px-3 Consumo problemático y dependencia de alcohol. <br>Es usado como examen  previo para determinar  personas que requieren tamizaje e intervención breve.
              td.td-dos-table.px-3 Consumo riesgoso de alcohol.<br>Necesidad de suspender el consumo, dependencia y problemas asociados.
            tr
              td.td-uno-table.text-center #[strong ¿En qué contexto?]
              td.td-dos-table.px-3 Atención primaria
              td.td-dos-table.px-3 Diferentes contextos <br>-<i>AUDIT C-</i> Atención primaria  (3 preguntas).
              td.td-dos-table.px-3 Atención primaria
            tr
              td.td-uno-table.text-center #[strong Forma de aplicación]
              td.td-dos-table.px-3 Por medio de  entrevista.
              td.td-dos-table.px-3 Auto aplicado.<br>Entrevista.<br>PC.
              td.td-dos-table.px-3 Auto aplicado.<br>Entrevista.

          thead
            tr
              th INSTRUMENTO
              th #[i TWEAK]
              th #[i DAST-10]
              th #[i CRAFFT]
          tbody
            tr
              td.td-uno-table.text-center #[strong Dirigido a]
              td.td-dos-table.px-3 Mujeres embarazadas.
              td.td-dos-table.px-3 Adultos.
              td.td-dos-table.px-3 Adolescentes.
            tr
              td.td-uno-table.text-center #[strong # Preguntas]
              td.td-uno-table.text-center #[strong 5]
              td.td-uno-table.text-center #[strong 10]
              td.td-uno-table.text-center #[strong 6]
            tr
              td.td-uno-table.text-center #[strong ¿Qué evalúa?]
              td.td-dos-table.px-3 Consumo indebido de alcohol durante el embarazo (Basado en el #[i CAGE]).<br>Cantidad de tragos que se toleran, dependencia y problemas asociados.
              td.td-dos-table.px-3 Identifica consumo<br>problemático durante el último año.
              td.td-dos-table.px-3 Abuso de alcohol y drogas, conducta riesgosa y consecuencias del uso.
            tr
              td.td-uno-table.text-center #[strong ¿En qué contexto?]
              td.td-dos-table.px-3 Atención primaria.<br>Organizaciones de  mujeres.
              td.td-dos-table.px-3 Diferentes contextos.
              td.td-dos-table.px-3 Diferentes contextos.
            tr
              td.td-uno-table.text-center #[strong Forma de  aplicación]
              td.td-dos-table.px-3 Auto aplicado.<br>Entrevista.<br>PC.
              td.td-dos-table.px-3 Auto aplicado.<br>Entrevista.
              td.td-dos-table.px-3 Entrevista.
        table
          caption Fuente: SENA
          thead
            tr
              th(style="width:25%") INSTRUMENTO
              th #[i APGAR] FAMILIAR
          tbody
            tr
              td.td-uno-table.text-center #[strong Dirigido a]
              td.td-dos-table.px-3 Adultos, Adolescentes y niños.
            tr
              td.td-uno-table.text-center #[strong # Preguntas]
              td.td-uno-table #[strong 10]
            tr
              td.td-uno-table.text-center #[strong ¿Qué evalúa?]
              td.td-dos-table.px-3 Adaptación, participación, gradiente de recurso personal, afecto, y recursos.
            tr
              td.td-uno-table.text-center #[strong ¿En qué contexto?]
              td.td-dos-table.px-3 Diferentes contextos.
            tr
              td.td-uno-table.text-center #[strong Forma de  aplicación]
              td.td-dos-table.px-3 Auto aplicado.<br>Entrevista.
  

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
