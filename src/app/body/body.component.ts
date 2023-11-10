import { Component } from '@angular/core';
import { ShortnerService } from '../services/shortner.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  generateddurl:string = "";
  inputUrl:string = "";
  constructor(private shortner : ShortnerService){  
  }
  getShortUrl(url:string){
    if(url=="") return alert("URL cannot be empty");
    this.shortner.getshorturl(url).subscribe({
      next: (response) => {
        console.warn(`Response is ${response}`);
        this.generateddurl = `http://localhost:5000/${response}`;
        this.inputUrl = "";
      },
      error : (response) => {
        console.warn(`Error Occured = ${response.error.error.toString()}`);
        this.generateddurl = response.error.error.toString();
      } 
    });
  }
}
