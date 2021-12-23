import { refsToArray } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { toArray, take } from 'rxjs/operators';

@Component({
  selector: 'app-toarray',
  templateUrl: './toarray.component.html',
  styleUrls: ['./toarray.component.css']
})
export class ToarrayComponent implements OnInit {
sub:Subscription
  constructor() { }

  ngOnInit(): void {
    const source = interval(1000);
    this.sub=source.pipe(take(5),toArray()).subscribe(res=>{
      console.log(res)
    })
  }

}
