import { Persona } from './../../Modelo/persona';
import { Router } from '@angular/router';
import { ServiceService } from './../../Service/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  modelPersona = new Persona();

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  Guardar(persona: Persona) {
    this.service.createPersona(persona).subscribe(data => {
      alert('Se agregó correctamente');
      this.router.navigate(['listar']);
    });
  }
}
