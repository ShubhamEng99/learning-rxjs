import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToarrayComponent } from './toarray/toarray.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'fromevent',component:FromEventComponent},
  {path:'interval',component:IntervalComponent},
  {path:'offrom',component:OfFromComponent},
  {path:'toarray',component:ToarrayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
