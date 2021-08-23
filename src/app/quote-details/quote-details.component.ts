import { Qoute } from '../qoute.ts';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.scss']
})
export class QuoteDetailsComponent implements OnInit {

  @Input()
  quote!: Qoute;
  @Output()isDelete = new EventEmitter <boolean>();
  @Output() isUpvote = new EventEmitter <boolean>();
  quoteDelete(deleteIs :boolean){
    this.isDelete.emit(deleteIs)
  }
  upvote(upvoteIs :boolean){
    this.isUpvote.emit(upvoteIs)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
