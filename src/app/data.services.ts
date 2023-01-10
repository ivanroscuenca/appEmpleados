import { HttpClient } from "@angular/common/http";
import { compileNgModule } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { LoginService } from "./login.service";

@Injectable()
export class DataServices {
    constructor(private httpClient: HttpClient,private loginService:LoginService) { }

    //método obtener empleados base de datos
    cargarEmpleados() {
        const token=this.loginService.getIdToken();
        return this.httpClient.get('https://mis-clientes-8c9e6-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth='+token);
    }

    guardarEmpleados(empleados: Empleado[]) {
        const token=this.loginService.getIdToken();
        this.httpClient.put('https://mis-clientes-8c9e6-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth='+token, empleados).subscribe(
            response => console.log('Se han guardado los empleados: ' + response),
            error => console.log('Error: ' + error),
        );
    }

    actualizarEmpleado({ indice, empleado }: { indice: number; empleado: Empleado; }){
        const token=this.loginService.getIdToken();
        let url='https://mis-clientes-8c9e6-default-rtdb.europe-west1.firebasedatabase.app/datos/'+indice+'.json?auth='+token;
        this.httpClient.put(url, empleado).subscribe(
            response => console.log('Se han actualizado los empleados: ' + response),
            error => console.log('Error: ' + error),
        );
    }

    eliminarEmpleado(indice:number){
        const token=this.loginService.getIdToken();
        let url='https://mis-clientes-8c9e6-default-rtdb.europe-west1.firebasedatabase.app/datos/'+indice+'.json?auth='+token;
        this.httpClient.delete(url).subscribe(
            response => console.log('Se ha eliminado el empleado empleados: ' + response),
            error => console.log('Error: ' + error),
        );
    }

}