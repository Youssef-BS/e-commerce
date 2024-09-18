import { Component} from '@angular/core';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']

})


export class AuthComponent {
  
  email : string = '' ;
  password : string = '' ;

  onSubmit = () => {
    console.log(`Email: ${this.email}, Password: ${this.password}`) ;
    this.email = '' ;
    this.password = '' ;
  }

}