import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregareditarcomentarioComponent } from './Components/agregareditarcomentario/agregareditarcomentario.component';
import { ListComentariosComponent } from './Components/list-comentarios/list-comentarios.component';
import { VerComentarioComponent } from './Components/ver-comentario/ver-comentario.component';

const routes: Routes = [
  {path : "" , component : ListComentariosComponent},
  {path : "agregar", component : AgregareditarcomentarioComponent},
  {path : "editar/:id",component : AgregareditarcomentarioComponent},
  {path : "ver/:id", component : VerComentarioComponent},
  {path : "**", redirectTo: '',pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
