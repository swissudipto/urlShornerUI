import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShortnerComponent } from './body/shortner/shortner.component';
import { VisithistoryComponent } from './body/visithistory/visithistory.component';

const routes: Routes = [
  {path: '',component:ShortnerComponent},
  {path: 'Shortner',component:ShortnerComponent},
  {path: 'VisitHistory',component:VisithistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
