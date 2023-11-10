import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ShortnerService {

  constructor(private http:HttpClient) { }

    getshorturl(url:string):Observable<any>{
      const body = {"url" : url};
      return this.http.post('http://localhost:5000/api/shortner',body);
    }

    getVisitHistory(shortid:string):Observable<any>{
      return this.http.get(`http://localhost:5000/api/getvistihistory/${shortid}`);
    }
}
