import { experienciaProps } from "../components/cards/experiencia.card";
import { formationProps } from "../components/cards/formacion.card";
import { trabajoProps } from "../components/cards/trabajo.card";

const formacion:formationProps[] = [

    {
        materia:'Desarrollo web Frontend (HTML, CSS, Bootstrap, JavaScript, Angular, React, Redux y RxJS), Node (API REST y WebSockets), Docker, Python, Django, PHP y MySQL.',
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
    'Inglés A1 oral , B1 leido/escrito. No certificado.','Especial interés en teletrabajar.','Carnet manipulador de alimentos.',
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
      foto:`src/assets/fototrabajos/drone.jpg`,
      nombre:'Dron de carreras',
      estado:'05 - 2019',
      descripcion:'Pequeño proyecto entre amigos que tomamos tras documentarme en internet sobre este hobby derivado del aeromodelismo. El resultado fue espectacular. Fue mi primera experiencia de holgado aprendizaje autodidacta a través de internet.',
      despliegueURL:'https://photos.app.goo.gl/gcjNkc7Gq6PAcid47',
      side:false,
      customIndex:10
    },
    {
        foto:`src/assets/fototrabajos/backend.jpg`,
        nombre:'Node backend shell',
        estado:'12 - 2022',
        descripcion:'En el desarrollo del BackEnd de la aplicación de un cliente, tras el reciente aprendizaje de patrones de diseño y buenas prácticas, estaba percatándome de que como me enseñaron API REST estaba bien para afianzar esos conocimientos, pero "dar cera, pulir cera" sirve a los estudiantes, no en un proyecto real que no admite la misma deuda técnica. Tomé la determinación de implantar una solución a ese problema donde dicha CRUD es generada dinámicamente, y me permite usar abstracciones hasta llegar a los casos de uso, pudiendo usar un caso para todas las colecciones de datos que se comportasen similar. Esta idea me permitió ahorrar muchísimas lineas de código y generar una solución para API REST con Node.js al problema descrito . Es el trabajo de BackEnd del que mas orgulloso me siento y espero que esta propuesta ayude a mas desarrolladores.',
        repoURL:'https://github.com/cmfraile/MyNodeBackendShell',
        side:false,
        customIndex:2
      },
    {
      foto:`src/assets/fototrabajos/pf1.jpg`,
      nombre:'Portfolio 1.0',
      estado:'03 - 2021',
      descripcion:'Fue mi primer portfolio realizado tras aprender Python, Django y refrescar HTML/CSS . Una experiencia muy didáctica e importante que me mostró la razón de porque las aplicaciones se dividen en varias partes y hacen uso de varias tecnologías. A partir de aqui empecé a definir mi stack y afinar mis habilidades con esta nueva orientación.',
      repoURL:'https://github.com/cmfraile/WebPersonalDjango',
      side:false,
      customIndex:11
    },
    {
      foto:`src/assets/fototrabajos/pf2.png`,
      nombre:'Portfolio 2.0',
      estado:'03 - 2022',
      descripcion:'Proyecto con el cual busque consolidar mis conocimientos del MEAN stack tras aprender Node.js, API REST y MongoDB . Es el Portfolio que estas viendo actualmente y el cual esta pasando por mantenimiento de cara a convertirlo en MERN y afianzar mis conocimientos de React.',
      side:false,
      customIndex:12
    },
    {
      foto:`src/assets/fototrabajos/n1.png`,
      nombre:'NUWE - Hackaton',
      estado:'06 - 2021',
      descripcion:'Hackaton organizada por NUWE con motivo de su inauguración. Fue mi primera experiencia en hackatones y pese a que no permitian usar Angular, pues el reto era de React, acepté el reto por llevarme la experiencia.',
      despliegueURL:'https://github.com/cmfraile/HackatonNuwe2021FrontCMFG',
      side:false,
      customIndex:12,
    },
    {
      foto:`src/assets/fototrabajosbdt.jpg`,
      nombre:'Barcelona Digital Talent - Hackaton',
      estado:'11 - 2021',
      descripcion:'Hackatón organizada por el BDT y bajo la plataforma de NUWE. En ella teniamos que hacer una pasarela de pago similar a la del ejercicio. Completarlo y ademas añadirle unos cuantos detalles vistosos me hizo quedar primero de entre 40 participantes. Una gran experiencia con la curiosidad de "ganar" la hackatón.',
      despliegueURL:'https://cmfraile.github.io/Hackaton---Jump2Digital---BCN---Carlos-Fraile/',
      repoURL:'https://github.com/cmfraile/Hackaton---Jump2Digital---BCN---Carlos-Fraile',
      side:false,
      customIndex:13
    },
    {
      foto:`src/assets/pgw.png`,
      nombre:'Party game web',
      estado:'En desarrollo',
      descripcion:'Pequeño proyecto para afianzar Redux el cual puedo publicar una beta para Agosto, para el uso y disfrute de ustedes. Con el he aprendido a usar esta tecnologia. Mi intención es presentarme con esta app para mejorar mi empleabilidad, mostrar mis capacidades, y monetizarlo en última instancia.',
      side:false,
      customIndex:1
    },
    {
      foto:`src/assets/bg.png`,
      nombre:'Battle Gamers GAMING BAR',
      estado:'Finalizado',
      descripcion:'Proyecto con el cual he aprendido la mayor parte de los fundamentos BackEnd. En otro repositorio muestro un cascarón del BackEnd que aqui realicé, con abstracciones y sugerencias para resolver el problema que aqui tuve.',
      side:false,
      customIndex:14
    },
    {
      foto:`src/assets/ma.jpg`,
      nombre:'MahApps',
      estado:'Aparcada',
      descripcion:'Primer intento de hacer una aplicación con Angular tras aprender sus fundamentos. Este incluida el visionado de reglas, de jugadas, y un monitor de seguimiento del puntaje, tanto en la variante china, como en la cantonesa. A medida que programaba la app, vi lo que podía hacer, pero sobretodo todo lo que debía de seguir aprendiendo. Esta app me enseño que si algo falta en tu stack, apréndelo, y vuelve a la App cuando tengas lo que necesites. En un futuro puedo hacer esta app mucho mejor.',
      repoURL:'https://github.com/cmfraile/MahApps',
      side:false,
      customIndex:15
    },
    {
      foto:`src/assets/bico.jpg`,
      nombre:'Bico arts',
      estado:'En desarrollo',
      descripcion:'Encargo freelance de una web portfolio para un artista, donde se refleje su trabajo, sus tarifas, formulario de contacto y redes sociales. Tendrá panel de administración con autenticación para gestionar el contenido de la web. Una web vistosa, llamativa y decorada con sus motivos que trate de ser una obra de arte en si misma tal y como desea el cliente.',
      side:false,
      customIndex:16
    },
  ];

export { formacion , datosDeInteres , experiencia }
