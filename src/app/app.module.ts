import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, HeaderComponent , HomeComponent , FooterComponent, ContainerComponent, ProductComponent],
  imports: [BrowserModule, FormsModule], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
