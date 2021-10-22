import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksServiceService {

  getBooks() {
    return ["C", "C++", "Java", "Python"];
  }
}
