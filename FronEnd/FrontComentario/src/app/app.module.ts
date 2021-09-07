
//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//Componentes 
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AgregareditarcomentarioComponent } from './Components/agregareditarcomentario/agregareditarcomentario.component';
import { ListComentariosComponent } from './Components/list-comentarios/list-comentarios.component';
import { VerComentarioComponent } from './Components/ver-comentario/ver-comentario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregareditarcomentarioComponent,
    ListComentariosComponent,
    VerComentarioComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
