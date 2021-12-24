import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map,take } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
sub:Subscription
  constructor() { }

  ngOnInit(): void {
    const data=from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    
    const example = data.pipe(map(val => val + 2));  
    this.sub=example.subscribe(res=>console.log(res)) 

  }

}
