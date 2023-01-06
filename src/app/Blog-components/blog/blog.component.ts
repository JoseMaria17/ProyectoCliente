import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {
  detalles:string='no'
  blog:any[]=[];
  imgPrincipal!:string
  titulo!:string
  autor!:string
  fecha!:string
  contenido!:string
  contenido1!:string
  error:string=''

  constructor(private ruta:ActivatedRoute, private service: ServicioService){}

  ngOnInit(): void {
  let idBlog=this.ruta.snapshot.params['idBlog'];
  this.service.obtenerArchivoJson('blog').subscribe((response:any)=>{
     this.blog=response;

     if ( idBlog == null || idBlog == undefined || idBlog == "null" || idBlog == "undefined"){
      this.detalles='no'

    }else{
      this.detalles='si'
      let index = this.blog.findIndex(x => x.id === Number(idBlog));

        if(index==-1){
          this.error="El post no existe"
        }else{
          this.imgPrincipal=this.blog[index].imgPrincipal
          this.titulo=this.blog[index].titulo
          this.autor=this.blog[index].autor
          this.fecha=this.blog[index].fecha
          this.contenido=this.blog[index].contenido_p
          this.contenido1=this.blog[index].contenido_s

        }



    }


    })


}
}





