import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {
  indice: number;

  constructor(private router: Router, private route: ActivatedRoute, private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) {

  }
  accion: number;

  ngOnInit(): void {
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);
    this.empleados = this.empleadosService.empleados;
    this.indice = this.route.snapshot.params['id'];
    let empleado: Empleado = this.empleadosService.encontrarEmpleado(this.indice);
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;

  }

  volverHome() {

    this.router.navigate([""]);

  }

  empleados: Empleado[] = [];
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
  /*
    actualizaEmpleado() {
  
      //creamos una variable y guardamos datos
      let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
  
      //usamos el servicio
      //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
  
      //llamamos al servicio
      this.empleadosService.actualizarEmpleado(this.indice,miEmpleado);
  
      this.router.navigate(['']);
  
    }

    eliminaEmpleado(){
      this.empleadosService.eliminarEmpleado(this.indice);
  
      this.router.navigate(['']);
    }
*/
  actualizaEmpleado() {

    if (this.accion == 1) {
      let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

      this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);

      this.router.navigate(['']);
    } else {
      this.empleadosService.eliminarEmpleado(this.indice);

      this.router.navigate(['']);
    }



  }

}
