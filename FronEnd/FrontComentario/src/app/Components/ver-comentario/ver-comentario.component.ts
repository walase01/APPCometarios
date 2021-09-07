import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { comentario } from 'src/app/Interfaces/comentario';
import { ComentarioService } from 'src/app/Services/comentario.service';

@Component({
  selector: 'app-ver-comentario',
  templateUrl: './ver-comentario.component.html',
  styleUrls: ['./ver-comentario.component.css']
})
export class VerComentarioComponent implements OnInit {
  
  id: number;
  comentario : comentario | undefined;
  constructor(private aRoute : ActivatedRoute , private comentarioService : ComentarioService) { 
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getcomentario();
  }

  getcomentario(){
    return this.comentarioService.getListComentario(this.id).subscribe(data=>{
        this.comentario = data;
    },
    error => console.log(error));
  }

}
