import { Component, OnInit, NgModule} from '@angular/core';
import { ServicesService } from '../../services.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  constructor(
    private Users: ServicesService
    ) { }
    datos: any = [];
    errorDatos: boolean;
    name: string;
    apellido: string;

  async ngOnInit() {
    console.log('llegoooo');
    await this.Users.getUsers().then((Users) => {
      this.datos = Users;
      console.log('datos correc ', this.datos);
    }).catch((e) => {
        this.errorDatos = true;
        console.log('datos dash ', this.errorDatos);
    });
  }
}
