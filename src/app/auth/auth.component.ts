import { Component, signal , computed} from '@angular/core';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']

})


export class AuthComponent {
  

  lastName = signal('') ;
  
  getLastName =computed(this.lastName) ;
  
  theLastName () {
    
  }
}
