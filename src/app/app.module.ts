import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthComponent } from './calcul/auth.component';
import {ReactiveFormsModule} from '@angular/forms';
import { InputsComponent } from './inputs/inputs.component'

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    InputsComponent,
  ],
  imports: [
    BrowserModule ,
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
