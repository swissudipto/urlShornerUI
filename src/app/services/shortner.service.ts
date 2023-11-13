import { HttpClient } from '@angular/common/http';
import { Injectable ,isDevMode  } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ShortnerService {
  apiEndpoint : string = 'http://localhost:5000';
  constructor(private http:HttpClient) { 
    if(!isDevMode()){
      this.apiEndpoint = 'https://urlshortner-production-37d4.up.railway.app';
      console.log('ApiEndpoint : ' + this.apiEndpoint);
    }
  }

    getshorturl(url:string):Observable<any>{
      const body = {"url" : url};
      return this.http.post(`${this.apiEndpoint}/api/shortner`,body);
    }

    getVisitHistory(shortid:string):Observable<any>{
      return this.http.get(`${this.apiEndpoint}/api/getvistihistory/${shortid}`);
    }
}
