import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  constructor(private router:Router, private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService){

  }
    ngOnInit(): void {
      this.empleados = this.empleadosService.empleados;
    }
  
    volverHome(){
  
      this.router.navigate([""]);
  
    }
  
    empleados: Empleado[] = [];
    cuadroNombre: string = "";
    cuadroApellido: string = "";
    cuadroCargo: string = "";
    cuadroSalario: number = 0;
  
    agregarEmpleado() {
  
      //creamos una variable y guardamos datos
      let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
  
      //usamos el servicio
      //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
  
      //llamamos al servicio
      this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  
      this.router.navigate([""]);
  
    }
}
