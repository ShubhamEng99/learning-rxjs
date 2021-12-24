import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const obs1=new Observable(observer=>{
      observer.next('data')
      observer.next('data')
    });
    const subject=new BehaviorSubject('');
    subject.next('data from behaviour subject');
    obs1.subscribe(res=>{
      console.log(res)
    })
  
    subject.subscribe(res=>{
      console.log(res)
    })
    
  }

}
