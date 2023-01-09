import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  titulo = 'Listado de Empleados';
  constructor(private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) {
    //this.empleados=this.empleadosService.empleados;
  }
  ngOnInit(): void {
    //this.empleados = this.empleadosService.empleados;
    this.empleadosService.obtenerEmpleados().subscribe(misEmpleados=>{
      this.empleados=Object.values(misEmpleados);
      this.empleadosService.setEmpleados(this.empleados);
    });
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
    this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);

    //llamamos al servicio
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);

  }
}
