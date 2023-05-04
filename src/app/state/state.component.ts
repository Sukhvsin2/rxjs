import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, fromEvent, of} from 'rxjs';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  agents: Observable<string>;
  agentNames:string[] = [];
  names: Observable<string[]> = of([])

  constructor() { }

  ngOnInit(): void {
    this.agents = new Observable(
      function(observer){
        try {
          observer.next("Agent1")
          observer.next("Agent2")
          observer.next("Agent3")
        } catch (error) {
          observer.error(error)
        }
      }
    )
    this.getNames();
  }

  getNames(){
    this.agents.subscribe(data => {
      this.agentNames.push(data);
    })
  }

}
