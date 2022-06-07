import { Persona } from './../Modelo/persona';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  Url: string = 'http://localhost:8080/personas';

  constructor(private http: HttpClient) { }

  getPersonas() {
    return this.http.get<Persona[]>(this.Url);
  }
}
