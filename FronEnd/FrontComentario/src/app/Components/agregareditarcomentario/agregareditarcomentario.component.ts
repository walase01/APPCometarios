import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { comentario } from 'src/app/Interfaces/comentario';
import { ComentarioService } from 'src/app/Services/comentario.service';

@Component({
  selector: 'app-agregareditarcomentario',
  templateUrl: './agregareditarcomentario.component.html',
  styleUrls: ['./agregareditarcomentario.component.css']
})
export class AgregareditarcomentarioComponent implements OnInit {
  
  agregarComentario : FormGroup;

  constructor(private _fb : FormBuilder , private _comentarioService : ComentarioService, private _router : Router) { 
    this.agregarComentario = this._fb.group({
      titulo : ['',Validators.required],
      creador : ['',Validators.required],
      fechaCreacion : ['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  Agregar(){
    const comentario : comentario = {
      titulo : this.agregarComentario.get('titulo')?.value,
      creador : this.agregarComentario.get('creador')?.value,
      texto : this.agregarComentario.get('texto')?.value,
      fechaCreacion : new Date()
      
    };
    
    this._comentarioService.saveComentario(comentario).subscribe(data => {
      this._router.navigate(['/']);
    },error => console.log(error));
  }

}
