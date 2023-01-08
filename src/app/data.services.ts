import { HttpClient } from "@angular/common/http";
import { compileNgModule } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataServices{
    constructor(private httpClient:HttpClient){}
guardarEmpleados(empleados:Empleado[]){
this.httpClient.post('https://mis-clientes-8c9e6-default-rtdb.europe-west1.firebasedatabase.app/datos.json',empleados).subscribe(
    response =>console.log('Se han guardado los empleados: ' + response),
    error =>console.log('Error: '+error),
);
}

}