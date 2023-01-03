import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Exporta clase 
export class AppComponent {
  titulo ='Listado de Empleados';
  empleados:Empleado[]= [
    new Empleado("Juan","Díaz","Presidente",7500),
    new Empleado("José","Fernandez","Gerente",5500),
    new Empleado("María","Perez","Directora RRHH",3500),
    new Empleado("Ana","Sánchez","Administrativa",1500)
  ];

cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;

agregarEmpleado(){

  //creamos una variable y guardamos datos
  let miEmpleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);

  //Añadir dentro del array empleados
  this.empleados.push(miEmpleado);
}

}
