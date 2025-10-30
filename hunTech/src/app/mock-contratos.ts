import { Contrato } from "./models/contrato";

export const CONTRATOS: Contrato[] = [
{id: 1,tipo: "Desarrollador backend",titulo:"Desarrollador backend node con conocimiento de express",
    descripcion: "Necesitamos un desarrollador backend para la web de un vivero. hola, somos El vivero feliz, blablabla datadatadata",
    tiene_postulaciones: false, postulaciones:["asd", "asdf", "asdfg"] ,esta_ocupado: false,
    pasante_id: undefined, start_date: '2025-11-01', end_date: '2025-12-01' 
},
{id: 2,tipo: "Desarrollador frontend",titulo:"angular frontend",
    descripcion: "Necesitamos un desarrollador frontend para la web de un vivero. hola, somos El vivero feliz, blablabla datadatadata",
    tiene_postulaciones: false, postulaciones:["asd", "asdf", "asdfg"] ,esta_ocupado: false,
    pasante_id: undefined, start_date: '2025-11-01', end_date: '2025-12-01' 
},
{id: 3,tipo: "BBDD Adm.",titulo:"desarrollador de bbdd para la web de un vivero",
    descripcion: "Necesitamos un administrador de bbdd para la web de un vivero. hola, somos El vivero feliz, blablabla datadatadata",
    tiene_postulaciones: false, postulaciones:["asd", "asdf", "asdfg"] ,esta_ocupado: false,
    pasante_id: undefined, start_date: '2025-11-01', end_date: '2025-12-01' 
}



/* {id: ,tipo: ,titulo:,descripcion: ,
    tiene_postulaciones: ,postulaciones: ,esta_ocupado: ,
    pasante_id: , start_date: ,end_date: 
} */
]




/* 

 eventualmente la query seria hacer coincidir los contratos por id con los proyectos que tengan esos contratos adentro de la columna correspondiente
export class Contrato {
    id: number;
    tipo: string;
    titulo: string;
    descripcion: string;
    tiene_postulaciones: boolean;
    postulaciones: string;
    esta_ocupado: boolean;
    pasante_id: number;
    start_date: Date;
    end_date: Date
} */