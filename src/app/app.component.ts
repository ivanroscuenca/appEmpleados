import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpleadosService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Exporta clase 
export class AppComponent implements OnInit {
  titulo ='Listado de Empleados';
//inyectamos servicio a través de un contructor
constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){
//this.empleados=this.empleadosService.empleados;

}
  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
  }


  empleados:Empleado[]= [];

cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;

agregarEmpleado(){

  //creamos una variable y guardamos datos
  let miEmpleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);

  //usamos el servicio
  this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);

  //llamamos al servicio
  this.empleadosService.agregarEmpleadoServicio(miEmpleado);
 
}

}
