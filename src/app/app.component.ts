import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 userObj = new User(null, null, null, null, null, null, null);
 onSubmit(userForm:object){
        console.log(userForm);
 }
}
