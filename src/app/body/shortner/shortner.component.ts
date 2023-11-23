import { Component } from '@angular/core';
import { ShortnerService } from 'src/app/services/shortner.service';

@Component({
  selector: 'app-shortner',
  templateUrl: './shortner.component.html',
  styleUrls: ['./shortner.component.css']
})
export class ShortnerComponent {
  generateddurl:string = "";
  inputUrl:string = "";
  constructor(private shortner : ShortnerService){  
  }
  getShortUrl(url:string){
    if(url=="") return alert("URL cannot be empty");
    this.shortner.getshorturl(url).subscribe({
      next: (response) => {
        console.warn(`Response is ${response}`);
        this.generateddurl = `https://urlshortner-production-37d4.up.railway.app/${response}`;
        this.inputUrl = "";
      },
      error : (response) => {
        console.warn(`Error Occured = ${response.error.error.toString()}`);
        this.generateddurl = response.error.error.toString();
      } 
    });
  }
}
