import { Component, OnInit } from '@angular/core';
import { BooksServiceService } from '../books-service.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent  {
  book: string[] =[];

  constructor(private service : BooksServiceService) {
    this.book = this.service.getBooks();
   }

   
}
