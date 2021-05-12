import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremierCicleServiceService {

  constructor() { }

  getStudents() {
   return  [
            { "id": 1, "name":"gaby", "age": 41, "status": "single", "personality":"Introvert"},
            { "id": 2, "name":"diane", "age": 33, "status": "married", "personality":"Protector"},
            { "id": 3, "name":"iris", "age": 35, "status": "single", "personality":"Extrovert"},
            { "id": 4, "name":"moi", "age": 40, "status": "single", "personality":"Altruistic"},
          ];
  }
}
