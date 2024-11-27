import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Importando HttpClientModule
import { AppComponent } from './app.component';  // Importando o componente

@NgModule({
  declarations: [AppComponent],  // Declarando o AppComponent
  imports: [BrowserModule, HttpClientModule],  // Importando o HttpClientModule
  providers: [],  // Nenhum provider específico
  bootstrap: [AppComponent]  // Inicializando com o AppComponent
})
export class AppModule {}
