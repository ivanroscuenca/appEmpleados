import { HttpClient } from "@angular/common/http";
import { compileNgModule } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataServices {
    constructor(private httpClient: HttpClient) { }

    //método obtener empleados base de datos
    cargarEmpleados() {
        return this.httpClient.get('https://mis-clientes-8c9e6-default-rtdb.europe-west1.firebasedatabase.app/datos.json');
    }

    guardarEmpleados(empleados: Empleado[]) {
        this.httpClient.put('https://mis-clientes-8c9e6-default-rtdb.europe-west1.firebasedatabase.app/datos.json', empleados).subscribe(
            response => console.log('Se han guardado los empleados: ' + response),
            error => console.log('Error: ' + error),
        );
    }

    actualizarEmpleado(indice:number,empleado:Empleado){
        let url='https://mis-clientes-8c9e6-default-rtdb.europe-west1.firebasedatabase.app/datos/'+indice+'.json';
        this.httpClient.put(url, empleado).subscribe(
            response => console.log('Se han actualizado los empleados: ' + response),
            error => console.log('Error: ' + error),
        );
    }

}