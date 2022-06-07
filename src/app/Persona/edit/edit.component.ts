import { Persona } from './../../Modelo/persona';
import { ServiceService } from './../../Service/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  persona = new Persona()

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem('id');
    this.service.getPersonaId(+id).subscribe(data => {
      this.persona = data;
    })
  }

  Actualizar(persona: Persona) {
    this.service.updatePersona(persona).subscribe(data => {
      this.persona = data;
      alert('Actualizado con éxito');
      this.router.navigate(['listar']);
    })
  }

}
