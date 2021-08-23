
import { Component, OnInit } from '@angular/core';
import { Qoute} from '../qoute.ts';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

    quotes: Qoute[] = [
      new Qoute(1, 'this is a quote', 'Hope', 3, 4, 'This is the Description' , new Date()),
      new Qoute(1, 'this is a quote', 'Hope', 3, 4, 'This is the Description' , new Date()),
      new Qoute(1, 'this is a quote', 'Hope', 3, 4, 'This is the Description' , new Date()),
      new Qoute(1, 'this is a quote', 'Hope', 3, 4, 'This is the Description' , new Date())
    ]
  // quote: any;
    
    toggleDetails (index: any){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;

    }
    deleteQuote(isDelete: any, index: any){
      if(isDelete){
        let toDelete = confirm('Are you sure you want to delete quote' + index);
        if(toDelete){
          this.quotes.splice(index,1);
          

        }
      }
    }
    addUpvote(isUpvote: any, index: any){
      if(isUpvote){
        let toUpvote = confirm ('like this vote?');
        if(toUpvote){
          this.quotes[index].upvote +=1;
        }
      }
    }
    addNewQuote(quote: any ){
      quote.id = this.quotes.length + 1;
      this.quotes.push(quote)
    }
    
  constructor() { }

  ngOnInit(): void {
  }

}
