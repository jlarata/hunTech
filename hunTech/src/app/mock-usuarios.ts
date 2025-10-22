import { Desarrollador } from "./models/users/desarrollador";
import { Gerente } from "./models/users/gerente";
import { InstitucionEducativa } from "./models/users/institucion-educativa";

export const DESARROLLADORES: Desarrollador[] = [
        {id: '4', email: 'devBack@gmail.com', descripcion: "Estudio hace 2 años en el IFTS11 y quiero dominar el mundo", nombre: 'Mati', apellido: 'Melgarejo', fecha_nacimiento: '2001-12-20', rol: 'back end', skills: ['java', 'springboot', 'C#', 'agile'], created_at: '2025-10-22' },
        {id: '5', email: 'devFront@gmail.com', descripcion: "ME caí en el baño e inventé el condensador de flujo", nombre: 'Nahuel', apellido: 'Castro', fecha_nacimiento: '2001-12-21', rol: 'front end', skills: ['javascript', 'angular', 'scrum'], created_at: '2025-10-22' },
    ]
export const GERENTES: Gerente[] = [
        {id: '1', email: 'gerentevivero@gmail.com', descripcion: `en /"el vivero feliz/" no maltratamos a ninguna vaca`, id_proyecto: '401' },
        {id: '2', email: 'gerentepanaderia@gmail.com', id_proyecto: '402' }
    ]
export const INSTITUCIONESEDUCATIVAS: InstitucionEducativa[] = [
        {id: '3', email: 'gerentepanaderia@gmail.com', descripcion: "Sin accidentes fatales desde 2024",nombre: 'ITFS11' }
    ]
