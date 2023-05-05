import { Component, OnInit} from '@angular/core';
import { Observable, of} from 'rxjs';
import { StateService } from './state.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  agents: Observable<string>;
  agentNames:string[] = [];
  names: Observable<string[]> = of([])

  products$: Observable<any[]>;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.init();
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
    this.products$ = this.stateService.getProducts()
  }

  getNames(){
    this.agents.subscribe(data => {
      this.agentNames.push(data);
    })
  }

}
