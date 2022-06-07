import { Router } from '@angular/router';
import { ServiceService } from './../../Service/service.service';
import { Persona } from './../../Modelo/persona';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas: Persona[] | undefined;

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getPersonas().subscribe(data => this.personas = data);
  }

}
