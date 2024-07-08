import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { QuocGia } from '../model/QuocGia.model';
import { Tinh } from '../model/Tinh.model';
import { Huyen } from '../model/Huyen.model';
import { Xa } from '../model/Xa.model';
@Injectable({
  providedIn: 'root'
})
export class QuocGiaService {
  
  private apiUrl = 'https://localhost:7053/api/QuocGia'; 
  http = inject (HttpClient);
  constructor() { }

  getQuocGias(): Observable<QuocGia[]> {
    return this.http.get<QuocGia[]>(this.apiUrl);
    
  }

  getQuocGiaById(id: number): Observable<QuocGia> {
    return this.http.get<QuocGia>(`${this.apiUrl}/${id}`);
  }

  createQuocGia(QuocGia: QuocGia): Observable<QuocGia> {
    return this.http.post<QuocGia>(this.apiUrl, QuocGia);
  }

  updateQuocGia(QuocGia: QuocGia): Observable<QuocGia> {
    return this.http.put<QuocGia>(`${this.apiUrl}/${QuocGia.id}`, QuocGia);
  }

  deleteQuocGia(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
 
}
export class TinhService {
    
  private apiUrl = 'https://localhost:7053/api/Tinh'; 
  http = inject (HttpClient);
  constructor() { }

  getTinhs(): Observable<Tinh[]> {
    return this.http.get<Tinh[]>(this.apiUrl+"/Tinh");
    
  }

  getTinhById(id: number): Observable<Tinh> {
    return this.http.get<Tinh>(`${this.apiUrl}/${id}`);
  }

  createTinh(Tinh: Tinh): Observable<Tinh> {
    return this.http.post<Tinh>(this.apiUrl, Tinh);
  }

  updateTinh(Tinh: Tinh): Observable<Tinh> {
    return this.http.put<Tinh>(`${this.apiUrl}/${Tinh.id}`, Tinh);
  }

  deleteTinh(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
 
}
export class HuyenService {
  
  private apiUrl = 'https://localhost:7053/api/Huyen'; // Example URL, replace with actual API URL
  http = inject(HttpClient);
  
  constructor() { }

  getHuyens(): Observable<Huyen[]> {
    return this.http.get<Huyen[]>(this.apiUrl);
  }

  getHuyenById(id: number): Observable<Huyen> {
    return this.http.get<Huyen>(`${this.apiUrl}/${id}`);
  }

  createHuyen(huyen: Huyen): Observable<Huyen> {
    return this.http.post<Huyen>(this.apiUrl, huyen);
  }

  updateHuyen(huyen: Huyen): Observable<Huyen> {
    return this.http.put<Huyen>(`${this.apiUrl}/${huyen.id}`, huyen);
  }

  deleteHuyen(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
export class XaService {
  
  private apiUrl = 'https://localhost:7053/api/Xa'; // Example URL, replace with actual API URL
  http = inject(HttpClient);
  
  constructor() { }

  getXas(): Observable<Xa[]> {
    return this.http.get<Xa[]>(this.apiUrl);
  }

  getXaById(id: number): Observable<Xa> {
    return this.http.get<Xa>(`${this.apiUrl}/${id}`);
  }

  createXa(xa: Xa): Observable<Xa> {
    return this.http.post<Xa>(this.apiUrl, xa);
  }

  updateXa(xa: Xa): Observable<Xa> {
    return this.http.put<Xa>(`${this.apiUrl}/${xa.id}`, xa);
  }

  deleteXa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
