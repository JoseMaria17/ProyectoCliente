import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './Blog-components/blog/blog.component';
import { HomeComponent } from './Home-components/home/home.component';
import { MainComponent } from './Servicios-components/main/main.component';
import { ServiciosComponent } from './Servicios-components/servicios/servicios.component';
import { ConocenosComponent } from './Conocenos-components/conocenos/conocenos.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'blog/:idBlog',
    component:BlogComponent
  },

  {
    path:'blog',
    component:BlogComponent

  },

  {
    path:'servicios',
    component:MainComponent
  },

  {
    path:'conocenos',
    component:ConocenosComponent
  },
  {
    path:'carrito',
    component:CarritoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
