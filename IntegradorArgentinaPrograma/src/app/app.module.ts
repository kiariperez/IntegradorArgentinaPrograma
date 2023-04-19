import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoArgentinaComponent } from './components/logo-argentina/logo-argentina.component';
import { RedesComponent } from './components/redes/redes.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgentinaComponent,
    RedesComponent,
    BannerComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EstudiosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
