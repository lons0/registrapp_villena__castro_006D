import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alumnos } from '../interfaces/alumnos';
import { Alumno } from '../interfaces/alumno';


@Injectable({
  providedIn: 'root'
})
export class ServQRService {

  constructor(private http:HttpClient) { }

  listarAlumnos():Observable<Alumnos>{
    return this.http.get<Alumnos>(`${environment.apiUrl}/alumnos`)
  }

  crearAlumno(newAlumno):Observable<Alumno>{
    return this.http.post<Alumno>(`${environment.apiUrl}/alumnos`,newAlumno)
  }

}
