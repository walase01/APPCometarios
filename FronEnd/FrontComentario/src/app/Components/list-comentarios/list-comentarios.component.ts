import { Component, OnInit } from '@angular/core';
import { comentario } from 'src/app/Interfaces/comentario';
import { ComentarioService } from 'src/app/Services/comentario.service';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {
  
  ListComentarios : comentario[] = [];

  constructor(private _comentarioService : ComentarioService) { }

  ngOnInit(): void {
    this.getComentarios();
  }

  getComentarios(){
    this._comentarioService.getListComentarios().subscribe(data =>(
      this.ListComentarios = data
    ), error => 
      console.log(error)
    );
  }

  EliminarComentario(id : any){
      this._comentarioService.deleteComentario(id).subscribe(data =>{
        this.getComentarios();
      },error => {console.log(error)});
  }

}
