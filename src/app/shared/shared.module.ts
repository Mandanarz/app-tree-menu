import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { TreeMenuComponent } from './components/tree-menu/tree-menu.component';
 
@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TreeMenuComponent],
  providers: [],
  exports: [TreeMenuComponent]
})
export class SharedModule { }