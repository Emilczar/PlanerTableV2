import { Component, OnInit } from '@angular/core';
import { DndService } from '../service/dnd.service';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss']
})
export class Table2Component implements OnInit {

  constructor(public dnd: DndService) { }

  ngOnInit() {
  }

}
