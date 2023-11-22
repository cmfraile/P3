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
  'docker':{practica:27,experiencia:16,mainStack:true},
  'express':{practica:22,experiencia:16,mainStack:true},
  'html5':{practica:36,experiencia:16,mainStack:false},
  'mongodb':{practica:22,experiencia:16,mainStack:true},
  'nodejs':{practica:22,experiencia:16,mainStack:true},
  'php':{practica:2,experiencia:0,mainStack:false},
  'mySQL':{practica:2,experiencia:0,mainStack:false},
  'python':{practica:3,experiencia:0,mainStack:false},
  'react':{practica:12,experiencia:13,mainStack:true},
  'reactiveX':{practica:22,experiencia:3,mainStack:false},
  'redux':{practica:3,experiencia:7,mainStack:true},
  'socket.io':{practica:2,experiencia:0,mainStack:false},
  'typescript':{practica:26,experiencia:16,mainStack:true},
  'sass':{practica:36,experiencia:16,mainStack:false},
}

Object.keys(skillsData).map(x => {
  const { practica , experiencia } = skillsData[x] ;
  skillsData[x].practica = 
    (experiencia >= practica) ? practica : practica - experiencia
})

Object.keys(skillsData).map(x => {
  skillsData[x].img = routerParser('stackIcons',`${x}.png`)
});

const presentacion:string =
'Desarrollador y técnico que tras su experiencia de técnico helpdesk, decidió continuar su formación de programación tras el parón que supuso el covid para muchos.\nEl confinamiento fue idóneo para ampliar conocimientos y obtener experiencia en el campo del desarrollo software, en el cual sigo creciendo de diario. Actualmente estoy con desarrollos personales para móvil, prepararme el C1 de inglés y buscar empleo por cuenta ajena. Mi andadura como freelance me ha privado de compartir conocimientos y habilidades con otros miembros de un mismo proyecto, y es algo frustrante que deseo cambiar.\nEn mi tiempo libre disfruto de la ciencia ficción y de cualquier juego que implique el uso de la lógica y el ingenio. Me encanta la cultura asiática y la tecnología.'


const formacion:formationProps[] = [

    {
        materia:'Desarrollo web Frontend (HTML, CSS, Bootstrap, JavaScript, Angular, React/React Native/Next.js, Redux y RxJS), Node (API REST y WebSockets), Docker, Python, Django, PHP y MySQL.',
        periodo:'2020 - actualidad',
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

    {
        materia:'Ayudante de Cocina',
        periodo:'2021',
        entidad:'Casa Manolete - Bistro',
        side:true
    },

    {
        materia:'Técnico en serigrafia',
        periodo:'2010 - 2011',
        entidad:'Escuela de arte : Dionisio Ortíz',
        side:true
    },

];

const datosDeInteres:string[] = [
    'Preparándome el C1 de inglés','Especial interés en teletrabajar.','Carnet manipulador de alimentos.',
].sort();

const experiencia:experienciaProps[] = [
    {
        puesto:'Desarrollador web multistack.',
        inicio:2022,
        periodo:'10 meses',
        lugar:'Battle Gamers GAMING BAR.',
        descripcion:'Desarrollo web, mayormente backend',
        side:false,
        customIndex:2
      },
      {
        puesto:'Desarrollo web freelance.',
        inicio:2022,
        periodo:'desde Septiembre',
        lugar:'Autónomo',
        descripcion:'Desarrollo web freelance. Particulares, empresas y apps propias.',
        side:false,
        customIndex:1
      },
      {
        puesto:'Técnico superior de informática en prácticas',
        inicio:2017,
        periodo:'3 meses',
        lugar:'FEPAMIC',
        descripcion:'Reparación, puesta a punto e implantación de equipos informáticos, redes y gagdets. Helpdesk y asistencia de personas con diversidad funcional.',
        side:false,
        customIndex:4
      },
      {
        puesto:'Técnico en microinformática en prácticas',
        inicio:2014,
        periodo:'3 meses',
        lugar:'Afocor',
        descripcion:'Reparación, puesta a punto e implantación de equipos informáticos, redes y gagdets. Montaje y mantenimiento de aulas de informática.',
        side:false,
        customIndex:5
      },
      {
        puesto:'Ayudante de cocina',
        inicio:2021,
        periodo:'1 mes',
        lugar:'Casa Manolete - Bistro',
        descripcion:'Producir aquellas elaboraciones que deben de estar listas para el servicio, así como su envasado, etiquetado, estabilización, regeneración y distribución entre los diferentes congeladores y timbres.',
        side:true,
        customIndex:6
      },
      {
        puesto:'Ayudante de taller en prácticas',
        inicio:2011,
        periodo:'1 mes',
        lugar:'Serimagen',
        descripcion:'Preparación, montaje y reutilización de equipo serigráfico o de otro tipo de estampaciones. Empaquetado, carga de pedidos, limpieza e inventariado de taller.',
        side:true,
        customIndex:7
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
      customIndex:13
    },
    {
      foto:routerParser('fototrabajos','pf3.jpg'),
      nombre:'Portfolio 3.0',
      estado:'06 - 2023',
      descripcion:'Portfolio realizado en una semana con el cual representar mejor mi trabajo. Un desarrollador hace cambios significativos en su trabajo cada 6 meses, con lo que un portfolio con mas de un año y medio dificilmente me logre representar en la actualidad. Aqui busco un diseño minimalista y claro, donde menos es mas.',
      repoURL:'https://github.com/cmfraile/P3',
      side:false,
      customIndex:2
    },
    {
        foto:routerParser('fototrabajos','cleanSolid.jpg'),
        nombre:'Clean code & SOLID',
        estado:'12 - 2022',
        descripcion:'Apuntes acerca de lo aprendido de código limpio, patrones, antipatrones y SOLID . Sigue el repo si eres desarrollador, pues te ayudara en tus futuros proyectos.',
        repoURL:'https://github.com/cmfraile/SOLID-CleanCode',
        side:false,
        customIndex:4
      },
    {
        foto:routerParser('fototrabajos','backend.jpg'),
        nombre:'Node backend shell',
        estado:'12 - 2022',
        descripcion:'En el desarrollo del BackEnd de la aplicación de un cliente, tras el reciente aprendizaje de patrones de diseño y buenas prácticas, estaba percatándome de que como me enseñaron API REST estaba bien para afianzar esos conocimientos, pero "dar cera, pulir cera" sirve a los estudiantes, no en un proyecto real que no admite la misma deuda técnica. Tomé la determinación de implantar una solución a ese problema donde dicha CRUD es generada dinámicamente, y me permite usar abstracciones hasta llegar a los casos de uso, pudiendo usar un caso para todas las colecciones de datos que se comportasen similar. Esta idea me permitió ahorrar muchísimas lineas de código y generar una solución para API REST con Node.js al problema descrito . Es el trabajo de BackEnd del que mas orgulloso me siento y espero que esta propuesta ayude a mas desarrolladores.',
        repoURL:'https://github.com/cmfraile/MyNodeBackendShell',
        side:false,
        customIndex:3
    },
    {
      foto:routerParser('fototrabajos','pt1.jpg'),
      nombre:'Prueba técnica de libreria',
      estado:'07 - 2022',
      descripcion:'Pueba técnica en la cual teníamos que simular el buscador de una librería, que filtrase por numero de páginas, género y permitiera hacer un carrito con libros. Fue mi primera experiencia con Next.js, framework el cual aprendí previo a ejecutar la prueba.',
      repoURL:'https://github.com/cmfraile/pruebasTecnicasMIDU/tree/pruebaT%C3%A9cnica/pruebas/01-reading-list/cmfraile',
      despliegueURL:'https://01-reading-list-deploy-83ah247eo-cmfraile.vercel.app/',
      side:false,
      customIndex:5
    },
    {
      foto:routerParser('fototrabajos','pf1.jpg'),
      nombre:'Portfolio 1.0',
      estado:'03 - 2021',
      descripcion:'Fue mi primer portfolio realizado tras aprender Python, Django y refrescar HTML/CSS . Una experiencia muy didáctica e importante que me mostró la razón de porque las aplicaciones se dividen en varias partes y hacen uso de varias tecnologías. A partir de aqui empecé a definir mi stack y afinar mis habilidades con esta nueva orientación.',
      repoURL:'https://github.com/cmfraile/WebPersonalDjango',
      side:true,
      customIndex:7
    },
    {
      foto:routerParser('fototrabajos','pf2.png'),
      nombre:'Portfolio 2.0',
      estado:'03 - 2022',
      descripcion:'Proyecto con el cual busque consolidar mis conocimientos del MEAN stack tras aprender Node.js, API REST y MongoDB . En este proyecto aprendí las consecuencias de la deuda técnica , la cual se tradució a futuras e incansables incidencias.',
      side:true,
      customIndex:8
    },
    {
      foto:routerParser('fototrabajos','n1.png'),
      nombre:'NUWE - Hackaton',
      estado:'06 - 2021',
      descripcion:'Hackaton organizada por NUWE con motivo de su inauguración. Fue mi primera experiencia en hackatones y pese a que no permitian usar Angular, pues el reto era de React, acepté el reto por llevarme la experiencia.',
      despliegueURL:'https://github.com/cmfraile/HackatonNuwe2021FrontCMFG',
      side:false,
      customIndex:6,
    },
    {
      foto:routerParser('fototrabajos','bdt.jpg'),
      nombre:'Barcelona Digital Talent - Hackaton',
      estado:'11 - 2021',
      descripcion:'Hackatón organizada por el BDT y bajo la plataforma de NUWE. En ella teniamos que hacer una pasarela de pago similar a la del ejercicio. Completarlo y ademas añadirle unos cuantos detalles vistosos me hizo quedar primero de entre 40 participantes. Una gran experiencia con la curiosidad de "ganar" la hackatón.',
      despliegueURL:'https://cmfraile.github.io/Hackaton---Jump2Digital---BCN---Carlos-Fraile/',
      repoURL:'https://github.com/cmfraile/Hackaton---Jump2Digital---BCN---Carlos-Fraile',
      side:false,
      customIndex:5
    },
    {
      foto:routerParser('fototrabajos','pgw.jpg'),
      nombre:'Party game',
      estado:'En desarrollo',
      descripcion:'Pequeño proyecto para afianzar Redux en el cual estoy ocupado para afinar mis habilidades. Tras concluir dicha aplicación en React, decidí aprender React Native y llevarlo a una plataforma movil, donde sin duda es su sitio. Actualmente la estoy porteando.',
      side:true,
      customIndex:10
    },
    {
      foto:routerParser('fototrabajos','bg.png'),
      nombre:'Battle Gamers GAMING BAR',
      estado:'04 - 2023',
      descripcion:'Proyecto con el cual he aprendido la mayor parte de los fundamentos BackEnd. En otro repositorio muestro un cascarón del BackEnd que aqui realicé, con abstracciones y sugerencias para resolver el problema que aqui tuve.',
      side:true,
      customIndex:10
    },
    {
      foto:routerParser('fototrabajos','ma.jpg'),
      nombre:'MahApps',
      estado:'',
      descripcion:'Primer intento de hacer una aplicación con Angular tras aprender sus fundamentos. Este incluida el visionado de reglas, de jugadas, y un monitor de seguimiento del puntaje, tanto en la variante china, como en la cantonesa. A medida que programaba la app, vi lo que podía hacer, pero sobretodo todo lo que debía de seguir aprendiendo. Esta app me enseño que si algo falta en tu stack, apréndelo, y vuelve a la app cuando tengas lo que necesites. Valorando seriamente pasarla a React Native y monetizarla, ya que la tengo documentada y me resulta facil de ejecutar.',
      repoURL:'https://github.com/cmfraile/MahApps',
      side:true,
      customIndex:12
    },
    {
      foto:routerParser('fototrabajos','bico.jpg'),
      nombre:'BcoWorks',
      estado:'',
      despliegueURL:'https://bcoworks.es',
      repoURL:'https://github.com/cmfraile/PortfolioBcoWorks',
      descripcion:'Encargo freelance de una web portfolio para un artista, donde se refleje su trabajo, sus tarifas, formulario de contacto y redes sociales. Posee su panel de administración con autenticación mediante Google para que el dueño pueda gestionar la web incluso cambiar el estilo de la misma. Una web vistosa, llamativa y decorada con sus motivos que trate de ser una obra de arte en si misma tal y como desea el cliente. Ha sido el proyecto con el que he aprendido todo lo que se de React y con el he aprendido esta libreria.',
      side:true,
      customIndex:1
    },
  ];

export { formacion , datosDeInteres , experiencia , trabajos , skillsData , presentacion }
