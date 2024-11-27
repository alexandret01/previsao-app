// src/app/services/previsao.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrevisaoService {

  private apiUrl = '/previsao';  // Apenas a URL do caminho relativo

  constructor(private http: HttpClient) { }

  getPrevisao(ticker: string, period: string, interval: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      ticker: ticker,
      period: period,
      interval: interval
    };

    return this.http.post(this.apiUrl, body, { headers: headers });
  }
}
