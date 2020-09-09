import { Iinfo } from './../interface/info.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendMailServiceService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://dry-temple-03099.herokuapp.com/';

  private baseUrlDev = 'http://localhost:3000/';

  sendEmail(obj: Iinfo): Observable<Iinfo> {
    return this.http.post<Iinfo>('https://dry-temple-03099.herokuapp.com/sendFormData', obj);
  }
  sendQuotationRequest(obj: Iinfo): Observable<Iinfo> {
    return this.http.post<Iinfo>(this.baseUrl + 'quotationRequest', obj);
  }
}
