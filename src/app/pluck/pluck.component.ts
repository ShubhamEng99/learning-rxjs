import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {
users=[{
  name:"shubham",
  contact:1
},
{
  name:'vineet',
  contact:2
}]
  constructor() { }

  ngOnInit(): void {
    const obs=from(this.users);
    const data=obs.pipe(pluck('name'),toArray())
    data.subscribe(res=>{
      console.log(res)
    })
  }

}
