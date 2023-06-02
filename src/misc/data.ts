import { experienciaProps } from "../components/cards/experiencia.card";
import { formationProps } from "../components/cards/formacion.card";

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
        puesto:'Técnico en microinformática',
        inicio:2019,
        periodo:'5 meses',
        lugar:'Ayuntamiento de Córdoba',
        descripcion:'Asistencia telefónica al usuario. Recepción, documentación y distribución departamental de incidencias con herramientas de ticketing. Helpdesk de primer nivel.',
        side:false,
        customIndex:3
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

export { formacion , datosDeInteres , experiencia }
