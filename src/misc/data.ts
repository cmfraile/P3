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
    'Inglés A1 oral , B1 leido/escrito. No certificado.','Especial interés en teletrabajar.','Carnet manipulador de alimentos.'
].sort()

export { formacion , datosDeInteres }
