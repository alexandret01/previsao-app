import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Importando HttpClient
import { FormsModule } from '@angular/forms';  // Importando FormsModule
import { HttpClientModule } from '@angular/common/http';  // Importando HttpClientModule

@Component({
  selector: 'app-root',
  standalone: true,  // Componente standalone
  imports: [FormsModule, HttpClientModule],  // Importando FormsModule e HttpClientModule aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ticker: string = '';  // Variável para o ticker
  period: string = '';  // Variável para o period
  interval: string = '';  // Variável para o interval

  // Injeta o HttpClient no construtor
  constructor(private http: HttpClient) {}

  // Método para enviar a requisição POST
  submitForm() {
    const requestData = {
      ticker: this.ticker,
      period: this.period,
      interval: this.interval,
    };

    // Fazendo a requisição POST usando HttpClient
    this.http.post('/previsao', requestData).subscribe(response => {
      console.log(response);
    });    
  }
}
