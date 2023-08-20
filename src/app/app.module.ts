import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './Home-components/home/home.component';
import { SliderComponent } from './Home-components/slider/slider.component';
import { TarjetasComponent } from './Blog-components/tarjetas/tarjetas.component';
import { SwiperModule } from 'swiper/angular';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './Blog-components/blog/blog.component';
import { ConocenosComponent } from './Conocenos-components/conocenos/conocenos.component';
import { ServiciosComponent } from './Servicios-components/servicios/servicios.component';
import { MainComponent } from './Servicios-components/main/main.component';
import { CarritoService } from './servicios/carrito.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CarritoComponent } from './carrito/carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SliderComponent,
    MainComponent,
    FooterComponent,
    BlogComponent,
    ConocenosComponent,
    ServiciosComponent,
    TarjetasComponent,
    CarritoComponent



  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    SwiperModule,
  ],

  providers: [CookieService],
  bootstrap: [AppComponent]
})

export class AppModule { }
