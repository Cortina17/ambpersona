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

  createPersona(persona: Persona) {
    return this.http.post<Persona>(this.Url, persona)
  }

  getPersonaId(id: number) {
    return this.http.get<Persona>(this.Url + '/' + id)
  }

  updatePersona(persona: Persona) {
    return this.http.put<Persona>(this.Url + '/' + persona.id, persona)
  }

  deletePersona(persona: Persona) {
    return this.http.delete<Persona>(this.Url + '/' + persona.id);
  }
}
