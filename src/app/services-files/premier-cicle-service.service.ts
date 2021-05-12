import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremierCicleServiceService {

  constructor() { }

  getStudents() {
   return  [
            { "id": 1, "name":"gaby", "age": 41},
            { "id": 2, "name":"diane", "age": 33},
            { "id": 3, "name":"iris", "age": 35},
            { "id": 4, "name":"moi", "age": 40},
          ];
  }
}
