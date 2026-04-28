import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //prendo i dati da un mock  
  //private jsonUrl = 'assets/users.json';

  //prendo i dati dall'API del backend
  private jsonUrl = 'http://localhost:7070/api/v1/users/all';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}