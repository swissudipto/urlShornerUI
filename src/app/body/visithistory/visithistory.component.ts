import { Component } from '@angular/core';
import { ShortnerService } from 'src/app/services/shortner.service';

@Component({
  selector: 'app-visithistory',
  templateUrl: './visithistory.component.html',
  styleUrls: ['./visithistory.component.css']
})
export class VisithistoryComponent {
  shortid:string = "";
  numberOfClicks!:number;
  errorMassege:string='';

  constructor(private shortner:ShortnerService){
  }

  getVisithistory(shortid:string){
    if(shortid=="") return alert("Short Id cannot be empty");
    this.shortner.getVisitHistory(shortid).subscribe({
      next : (response) => {
        this.numberOfClicks = response.totalclicks;
        this.errorMassege = '';
        console.warn('watcher'+ this.numberOfClicks);
      },
      error : (response) => {
        console.warn('Error Occured :'+ response.error.error.toString());
        this.errorMassege = response.error.error.toString();
      }
    })
  }
}
