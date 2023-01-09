//Creamos servicio que tendría que hacer consulta a BBDD

import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
//decorador injectable nos dice que se va a inyectar
@Injectable()
export class EmpleadosService  {
  eliminarEmpleado(indice: number) {
    this.empleados.splice(indice,1);
  }
  actualizarEmpleado(indice: number, empleado: Empleado) {
    let empleadoModificado = this.empleados[indice];

    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;
    this.DataService.actualizarEmpleado(indice,empleado);

  }
  encontrarEmpleado(indice: number) {
    let empleado:Empleado=this.empleados[indice];
    return empleado;
  }

  //necesitamos constructor para injectable
  constructor(private servicioVentanaEmergente:ServicioEmpleadosService,private DataService:DataServices){

  }
  setEmpleados(misEmpleados:Empleado[]){
    this.empleados=misEmpleados;
  }

  obtenerEmpleados(){
    return this.DataService.cargarEmpleados();
  }
  empleados:Empleado[]=[];

   /*empleados:Empleado[]= [
        new Empleado("Juan","Díaz","Presidente",7500),
        new Empleado("José","Fernandez","Gerente",5500),
        new Empleado("María","Perez","Directora RRHH",3500),
        new Empleado("Ana","Sánchez","Administrativa",1500)
      ];*/

      agregarEmpleadoServicio(empleado:Empleado){
         //llamar al servicio
         this.servicioVentanaEmergente.muestraMensaje('Persona que se va a agregar' + "\n" + 
        empleado.nombre + "\n"+ "salario: " + empleado.salario);
         //Añadir dentro del array empleados
        this.empleados.push(empleado);
        //utilizamos guardar en data base
        this.DataService.guardarEmpleados(this.empleados);

      }



}