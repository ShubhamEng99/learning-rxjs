import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //Of
    const Of=of(1,2,3);
    Of.subscribe(res=>{
      console.log(res);
    })
    
const array = [10, 20, 30];
const result = from(array);

result.subscribe(x => console.log(x));
    
  }

}
