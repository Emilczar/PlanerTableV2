import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgDragDropModule } from 'ng-drag-drop';

import { AppComponent } from './app.component';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';
import { Table3Component } from './table3/table3.component';
import { GuestComponent } from './guest/guest.component';

import { DndService } from './service/dnd.service';
import { FileDbService } from './service/file-db.service';

@NgModule({
  declarations: [
    AppComponent,
    Table1Component,
    Table2Component,
    Table3Component,
    GuestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgDragDropModule.forRoot()

  ],
  providers: [FileDbService, DndService],
  bootstrap: [AppComponent]
})
export class AppModule { }
