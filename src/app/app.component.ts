import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ambpersona';

  constructor(private router: Router) { }

  Listar(): any {
    this.router.navigate(['listar']);
  }

  Nuevo(): any {
    this.router.navigate(['add']);
  }


}
