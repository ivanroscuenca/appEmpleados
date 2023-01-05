//Creamos servicio que tendría que hacer consulta a BBDD

import { Empleado } from "./empleado.model";

export class EmpleadosService {
    empleados:Empleado[]= [
        new Empleado("Juan","Díaz","Presidente",7500),
        new Empleado("José","Fernandez","Gerente",5500),
        new Empleado("María","Perez","Directora RRHH",3500),
        new Empleado("Ana","Sánchez","Administrativa",1500)
      ];

      agregarEmpleadoServicio(empleado:Empleado){
         //Añadir dentro del array empleados
        this.empleados.push(empleado);
      }

}