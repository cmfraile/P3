import { experienciaProps } from "../components/cards/experiencia.card";
import { formationProps } from "../components/cards/formacion.card";
import { trabajoProps } from "../components/cards/trabajo.card";
import dopRoutes from "./env";

export interface dataForDataVizProps {img?:string,practica:number,experiencia:number,mainStack:boolean};

const routerParser = (mid:string,name:string) =>
  `${dopRoutes()}/${mid}/${name}`

let skillsData:{[key:string]:dataForDataVizProps} = {
  'angular':{practica:26,experiencia:3,mainStack:true},
  'bootstrap':{practica:36,experiencia:16,mainStack:false},
  'css3':{practica:36,experiencia:16,mainStack:false},
  'django':{practica:3,experiencia:0,mainStack:false},
  'docker':{practica:27,experiencia:17,mainStack:true},
  'express':{practica:22,experiencia:16,mainStack:true},
  'html5':{practica:36,experiencia:16,mainStack:false},
  'mongodb':{practica:22,experiencia:16,mainStack:true},
  'nodejs':{practica:22,experiencia:17,mainStack:true},
  'php':{practica:2,experiencia:0,mainStack:false},
  'mySQL':{practica:2,experiencia:0,mainStack:false},
  'python':{practica:3,experiencia:0,mainStack:false},
  'react':{practica:12,experiencia:23,mainStack:true},
  'reactiveX':{practica:22,experiencia:3,mainStack:false},
  'redux':{practica:3,experiencia:12,mainStack:true},
  'socket.io':{practica:2,experiencia:0,mainStack:false},
  'typescript':{practica:26,experiencia:23,mainStack:true},
  'sass':{practica:36,experiencia:16,mainStack:false},
  'jest':{practica:0,experiencia:5,mainStack:true},
}

Object.keys(skillsData).map(x => {
  const { practica , experiencia } = skillsData[x] ;
  skillsData[x].practica = 
    (experiencia >= practica) ? practica : practica - experiencia
})

Object.keys(skillsData).map(x => {
  skillsData[x].img = routerParser('stackIcons',`${x}.png`)
});

const nombreYOficio:string[] = [
  'Carlos Manuel Fraile Gómez',
  ' - Desarrollador multi-stack y técnico informático - '
]

const presentacion:string =
'Desarrollador web y técnico informático que tras su experiencia en helpdesk, decidió continuar su formación de programación tras el parón que supuso el Covid para muchos.\nEl confinamiento fue una época ideal para ampliar conocimientos y obtener experiencia en el campo del desarrollo software, en el cual sigo creciendo de diario: Aprendiendo nuevas tecnologías, rodando en ellas mas allá de su estricto estudio, todo orientado a estar lo mas preparado posible de cara a trabajar en un futuro equipo .\nMi objetivo es ser parte de un proyecto, donde el conocimiento y experiencia adquiridos pueda ser aplicado en nuestro software. Trabajar estrictamente solo no demora mucho mas la resolución de problemas, pero hackatones, eventos del sector y programar en equipo poseen un agradable entorno, motivo por el que deseo desempeñar esta profesión.'


const formacion:formationProps[] = [

    {
        materia:`MEAN y MERN Stack .

        Front - End : React/React Native, Next.js , Angular , JS / TS , Redux y RxJS , HTML, CSS, Bootstrap, Sass .
        Back - End : Node ( Express.js , Socket.io ) .
        BBDD : MongoDB .
        Despliegues : Docker .
        Otros : SOLID , TDD con Jest .`,
        periodo:'2020 - 2024',
        entidad:'UDEMY',
        side:false
    },

    {
        materia:'Técnico superior en Administración de Sistemas Informáticos en Red.',
        periodo:'2015 - 2017',
        entidad:'C.E.S. Lope de Vega',
        side:false
    },

    {
        materia:'Técnico en Sistemas Microinformáticos y Redes.',
        periodo:'2012 - 2014',
        entidad:'C.E.S. Lope de Vega',
        side:false
    },

];

const datosDeInteres:string[] = [
    'B2 de inglés ( APTIS ).',
    'Entorno propio y apto en casa para el teletrabajo.'
].sort();

const experiencia:experienciaProps[] = [
      {
        puesto:'Desarrollo web freelance ( MERN y MEAN )',
        inicio:2022,
        periodo:'1 año y 7 meses',
        lugar:'',
        descripcion:'Proyectos personales, pequeños encargos y software mas allá de aprender una tecnología, aplicándola sobre ideas concretas.',
        side:false,
        customIndex:1
      },
      {
        puesto:'Técnico en microinformática',
        inicio:2019,
        periodo:'5 meses',
        lugar:'Ayuntamiento de Córdoba',
        descripcion:'Asistencia telefónica al usuario. Recepción, documentación y distribución departamental de incidencias con herramientas de ticketing. Helpdesk de primer nivel.',
        side:false,
        customIndex:3
      },
      {
        puesto:'Técnico superior de informática',
        inicio:2017,
        periodo:'3 meses',
        lugar:'FEPAMIC',
        descripcion:'Reparación, puesta a punto e implantación de equipos informáticos y redes. Helpdesk y asistencia de personas con diversidad funcional.',
        side:false,
        customIndex:4
      },
      {
        puesto:'Técnico en microinformática',
        inicio:2014,
        periodo:'3 meses',
        lugar:'Afocor',
        descripcion:'Reparación, puesta a punto e implantación de equipos informáticos y redes. Montaje y mantenimiento de aulas de informática.',
        side:false,
        customIndex:5
      }
]


const trabajos:trabajoProps[] = [
    {
      foto:routerParser('fototrabajos','drone.jpg'),
      nombre:'Dron de carreras',
      estado:'05 - 2019',
      descripcion:'Pequeño proyecto entre amigos que tomamos tras documentarme en internet sobre este hobby derivado del aeromodelismo. El resultado fue espectacular. Fue mi primera experiencia de holgado aprendizaje autodidacta a través de internet.',
      despliegueURL:'https://photos.app.goo.gl/gcjNkc7Gq6PAcid47',
      side:true,
      customIndex:15
    },
    {
      foto:routerParser('fototrabajos','pf3.jpg'),
      nombre:'Portfolio 3.0',
      estado:'06 - 2023',
      descripcion:'Portfolio realizado en una semana que lograse representarme mejor en la actualidad . Aquí busco un diseño claro y minimalista, donde menos sea mas. Es el trabajo que estas viendo ahora mismo.',
      repoURL:'https://github.com/cmfraile/P3',
      side:false,
      customIndex:15
    },
    {
        foto:routerParser('fototrabajos','cleanSolid.jpg'),
        nombre:'Clean code & SOLID',
        estado:'12 - 2022',
        descripcion:'Mis apuntes en MarkDown acerca de lo aprendido en un curso de Clean code, patrones, antipatrones ( STUPID ) y SOLID. Siempre los tengo impresos y sobre mi mesa de trabajo , pues me siguen ayudando muchísimo. Tienes el repositorio justo abajo. Todo tuyo. Espero que te sea de ayuda.',
        repoURL:'https://github.com/cmfraile/SOLID-CleanCode',
        side:false,
        customIndex:7
      },
    {
        foto:routerParser('fototrabajos','backend.jpg'),
        nombre:'Node backend shell',
        estado:'12 - 2022',
        descripcion:'Cascarón de Back-end enfocado a API REST, realizado posterior al holgado aprendizaje de patrones de diseño básicos y buenas prácticas, aparte de explotar aun más Node.JS con el empleo de abstracciones, clases y explotando el lenguaje. Aprendí API REST a través de funciones, y eso esta bien para ver de una forma diáfana el funcionamiento y los fundamentos, pero implicaba repetir mucho código y la misma tarea para cada controlador y/o colección de datos . Tome la determinación de resolver este problema con lo aprendido y a través de funciones sencillas cargar todo el entorno. Actualmente tomo este cascarón de referencia en mis trabajos de Back-end, tanto por las buenas prácticas como por esta forma de trabajar, mucho mas conveniente para proyectos grandes.',
        repoURL:'https://github.com/cmfraile/MyNodeBackendShell',
        side:false,
        customIndex:5
    },
    {
      foto:routerParser('fototrabajos','pt1.jpg'),
      nombre:'Prueba técnica de libreria',
      estado:'07 - 2022',
      descripcion:'Pueba técnica en la cual teníamos que simular el buscador de una librería, que filtrase por numero de páginas, género y permitiera hacer un carrito con libros. Fue mi primera experiencia con Next.js, framework el cual aprendí previo a ejecutar la prueba gracias a un directo.',
      repoURL:'https://github.com/cmfraile/pruebasTecnicasMIDU/tree/pruebaT%C3%A9cnica/pruebas/01-reading-list/cmfraile',
      despliegueURL:'https://01-reading-list-deploy-83ah247eo-cmfraile.vercel.app/',
      side:false,
      customIndex:3
    },
    {
      foto:routerParser('fototrabajos','pf1.jpg'),
      nombre:'Portfolio 1.0',
      estado:'03 - 2021',
      descripcion:'Fue mi primer portfolio realizado tras aprender Python, Django y refrescar HTML/CSS . Una experiencia muy didáctica e importante que me mostró la razón de porque las aplicaciones se dividen en varias partes y hacen uso de varias tecnologías. A partir de aqui empecé a definir mi stack y afinar mis habilidades con esta nueva orientación.',
      repoURL:'https://github.com/cmfraile/WebPersonalDjango',
      side:true,
      customIndex:19
    },
    {
      foto:routerParser('fototrabajos','pf2.png'),
      nombre:'Portfolio 2.0',
      estado:'03 - 2022',
      descripcion:'Proyecto de consolidación de los conocimientos de MEAN stack . La mayor lección que me dejo esta experiencia no fue aprender la base de sus tecnologías, si no las consecuencias de una deuda técnica, que se acumulaba y extendía en el tiempo. Arreglé el problema pero opte por hacer el posterior portfolio con el objetivo de evitar de manera proactiva y diligente este problema en cuanto lo conocí. El futuro software requerirá siempre de una mano que lo cuide y atienda, pero construirlo bien desde un principio era algo que me correspondía aprender desde aquí. Una enorme experiencia.',
      side:true,
      customIndex:15
    },
    {
      foto:routerParser('fototrabajos','n1.png'),
      nombre:'NUWE - Hackaton',
      estado:'06 - 2021',
      descripcion:'Hackaton organizada por NUWE con motivo de su inauguración. Fue mi primera experiencia en hackatones y pese a que no permitian usar Angular, pues el reto era de React, acepté el reto por llevarme la experiencia.',
      repoURL:'https://github.com/cmfraile/HackatonNuwe2021FrontCMFG',
      side:false,
      customIndex:8,
    },
    {
      foto:routerParser('fototrabajos','bdt.jpg'),
      nombre:'Barcelona Digital Talent - Hackaton',
      estado:'11 - 2021',
      descripcion:'Hackatón organizada por el BDT y bajo la plataforma de NUWE. En ella teniamos que hacer una pasarela de pago similar a la del ejercicio. Quede el primero de entre 19 participantes. Una gran experiencia.',
      despliegueURL:'https://cmfraile.github.io/Hackaton---Jump2Digital---BCN---Carlos-Fraile/',
      repoURL:'https://github.com/cmfraile/Hackaton---Jump2Digital---BCN---Carlos-Fraile',
      side:false,
      customIndex:2
    },
    {
      foto:routerParser('fototrabajos','pgw.jpg'),
      nombre:'Party game',
      estado:'En desarrollo',
      descripcion:'Pequeño proyecto para afianzar React + Redux . La aplicación esta acabada, y con el código dispuesto para ser porteado a React Native, sin embargo, su funcionamiento es lo suficientemente complejo y ofrece tantas variables que a través de iterar la app y comprobar su funcionamiento desde la store de Redux, estoy llamando al desastre. Es un pretexto perfecto para aprender testing y lograr desarrollar de manera TDD, pues puedo recoger su uso y comprobar que se cumple desde las funciones individuales hasta el conjunto de acciones de la ruta crítica. No se exactamente que me encontraré, salvo aprendizaje y saldar mi deuda con un imprescindible del sector : los tests .',
      side:true,
      customIndex:19
    },
    {
      foto:routerParser('fototrabajos','ma.jpg'),
      nombre:'MahApps',
      estado:'',
      descripcion:'Primer intento de hacer una aplicación con Angular tras aprender sus fundamentos. Este incluida el visionado de reglas, de jugadas, y un monitor de seguimiento del puntaje, tanto en la variante china, como en la cantonesa. A medida que programaba la app, vi lo que podía hacer, y además, todo lo que debía de seguir aprendiendo. Esta app me enseño que si algo falta en su stack, apréndelo, y vuelve a la app cuando tengas lo que necesites. El MahJong es mi juego de mesa favorito , y aquel que me demostró que podía ser un buen programador. Me documenté, aprendí de diversas fuentes, y probé mi capacidad de investigación ante algo extraño e ignoto en nuestra cultura. Me aportó mucha realización, diversión aparte con amigos y familia.',
      repoURL:'https://github.com/cmfraile/MahApps',
      side:true,
      customIndex:20
    },
    {
      foto:routerParser('fototrabajos','bico.jpg'),
      nombre:'BcoWorks',
      estado:'10 - 2023',
      despliegueURL:'https://bcoworks.es',
      repoURL:'https://github.com/cmfraile/PortfolioBcoWorks',
      descripcion:'Encargo para un artista de una web portfolio. En ella refleja su trabajo, sus tarifas, formulario de contacto y redes sociales. Posee un panel de administración con autenticación mediante Google para que el dueño pueda añadir su contenido a la web, incluso cambiar sus estilos. Una web vistosa, llamativa y decorada con sus motivos que logre expresar su mundo. Esta realizada en MERN stack , incluso ensayé el front con Next.JS para conocer esta tecnología. Este proyecto lo he usado para aprender el stack de manera exhaustiva, indagar en detalle en su funcionamiento y lo mas importante, discernir entre implantaciones necesarias y superfluas. Este proyecto me otorgó una agilidad que necesitaba por muchos motivos.',
      side:true,
      customIndex:1
    },
  ];

export { nombreYOficio , formacion , datosDeInteres , experiencia , trabajos , skillsData , presentacion }
