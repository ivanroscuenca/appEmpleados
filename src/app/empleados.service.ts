//Creamos servicio que tendría que hacer consulta a BBDD

import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
//decorador injectable nos dice que se va a inyectar
@Injectable()
export class EmpleadosService  {

  //necesitamos constructor para injectable
  constructor(private servicioVentanaEmergente:ServicioEmpleadosService){

  }

    empleados:Empleado[]= [
        new Empleado("Juan","Díaz","Presidente",7500),
        new Empleado("José","Fernandez","Gerente",5500),
        new Empleado("María","Perez","Directora RRHH",3500),
        new Empleado("Ana","Sánchez","Administrativa",1500)
      ];

      agregarEmpleadoServicio(empleado:Empleado){
         //llamar al servicio
         this.servicioVentanaEmergente.muestraMensaje('Persona que se va a agregar' + "\n" + 
        empleado.nombre + "\n"+ "salario: " + empleado.salario);
         //Añadir dentro del array empleados
        this.empleados.push(empleado);

      }

}