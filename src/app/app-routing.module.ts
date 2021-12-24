import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToarrayComponent } from './toarray/toarray.component';
import { CustomComponent } from './custom/custom.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { RetryComponent } from './retry/retry.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'fromevent',component:FromEventComponent},
  {path:'interval',component:IntervalComponent},
  {path:'offrom',component:OfFromComponent},
  {path:'toarray',component:ToarrayComponent},
  {path:'custom',component:CustomComponent},
  {path:'map',component:MapComponent},
  {path:'pluck',component:PluckComponent},
  {path:'retry',component:RetryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
