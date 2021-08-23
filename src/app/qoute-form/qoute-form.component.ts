
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Qoute } from '../qoute.ts';

@Component({
  selector: 'app-qoute-form',
  templateUrl: './qoute-form.component.html',
  styleUrls: ['./qoute-form.component.scss']
})
export class QouteFormComponent implements OnInit {
newQuote=new Qoute (0,"" ,"",0,0,"",new Date());
 @Output() addQuote = new EventEmitter<Qoute>();
 submitQuote(){
   this.addQuote.emit(this.newQuote);
 }
  constructor() { }


  ngOnInit(): void {
  }

}
