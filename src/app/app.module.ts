import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HeaderComponent } from './static/header/header.component';
import { FooterComponent } from './static/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { BusquedaComponent } from './auditoria/busqueda/busqueda.component';
import { CrearPGPComponent } from './auditoria/crear-pgp/crear-pgp.component';
import { MasivaPGPComponent } from './auditoria/masiva-pgp/masiva-pgp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    BusquedaComponent,
    CrearPGPComponent,
    MasivaPGPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


