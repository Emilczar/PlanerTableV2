import { Component, OnInit } from '@angular/core';
import { DndService } from '../service/dnd.service';

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.scss']
})
export class Table3Component implements OnInit {

  constructor( public dnd: DndService) { }

  ngOnInit() {
  }

}
