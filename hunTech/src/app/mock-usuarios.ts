import { Desarrollador } from "./models/users/desarrollador";
import { Gerente } from "./models/users/gerente";
import { InstitucionEducativa } from "./models/users/institucion-educativa";

export const DESARROLLADORES: Desarrollador[] = [
        {id: '4', email: 'devBack@gmail.com', descripcion: `Estudio hace 2 años en el IFTS11 y quiero dominar el mundo
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cum voluptates dignissimos adipisci magni eaque, amet alias quas voluptatem soluta! Rerum est sit quisquam dignissimos quas eveniet iusto ab exercitationem.
Sequi obcaecati aliquam, eum itaque ad corrupti nulla quidem? Quis ipsam voluptatibus quibusdam! Fuga dicta quo culpa accusantium, corrupti, sequi illum sed, obcaecati saepe nisi alias rem! Enim, itaque nulla.
Voluptatum nesciunt accusamus maxime molestiae dolore corporis, aut ex nemo nihil cupiditate maiores necessitatibus eligendi libero iste perferendis quidem? Odit cupiditate recusandae voluptas non sequi repellendus velit inventore minus maiores?
Placeat, quasi odit magni sapiente reiciendis dignissimos incidunt quae nisi ea ex nemo laboriosam suscipit molestiae veniam odio deserunt! Cumque repellendus blanditiis non asperiores vitae voluptatem, dolore iure labore dicta!
Explicabo voluptatibus tempora, debitis sint minima provident consectetur quisquam repudiandae doloribus quaerat tenetur architecto cupiditate? Autem velit provident magni itaque pariatur, facere asperiores nam explicabo doloribus voluptatem consequatur incidunt nihil?`, nombre: 'Mati', apellido: 'Melgarejo', fecha_nacimiento: '2001-12-20', rol: 'back end', skills: ['java', 'springboot', 'C#', 'agile'], created_at: '2025-10-22' },
        {id: '5', email: 'devFront@gmail.com', descripcion: "ME caí en el baño e inventé el condensador de flujo", nombre: 'Nahuel', apellido: 'Castro', fecha_nacimiento: '2001-12-21', rol: 'front end', skills: ['javascript', 'angular', 'scrum'], created_at: '2025-10-22' },
    ]
export const GERENTES: Gerente[] = [
        {id: '1', email: 'gerentevivero@gmail.com', descripcion: `en "el vivero feliz" no maltratamos a ninguna vaca`, id_proyecto: '401' },
        {id: '2', email: 'gerentepanaderia@gmail.com', id_proyecto: '402' }
    ]
export const INSTITUCIONESEDUCATIVAS: InstitucionEducativa[] = [
        {id: '3', email: 'gerentepanaderia@gmail.com', descripcion: "Sin accidentes fatales desde 2024",nombre: 'ITFS11' }
    ]
