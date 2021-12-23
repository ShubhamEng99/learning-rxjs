import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
msg=''
sub:Subscription
timesub:Subscription
  constructor() { }

  ngOnInit(): void {
    const val=interval(1000);
    const time=timer(5000,1000);//takes 2 arguements due time and delay

  this.sub=  val.subscribe(res=>{
      this.msg='message'+res;
      if(res>=5){
        this.sub.unsubscribe()
      }
    })
   this.timesub= time.subscribe(res=>{
      console.log(res)
      if(res>=5){
        this.timesub.unsubscribe()
      }
    })
    
  }

}
