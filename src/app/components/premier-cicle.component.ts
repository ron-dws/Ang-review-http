import { Component, OnInit } from '@angular/core';
import { PremierCicleServiceService } from '../services-files/premier-cicle-service.service';

@Component({
  selector: 'app-premier-cicle',
  templateUrl: './premier-cicle.component.html',
  styleUrls: ['./premier-cicle.component.css']
})
export class PremierCicleComponent implements OnInit {

  public students_premier_cicle  = [] as any;

  constructor(private _students_pr_cicle: PremierCicleServiceService) { }

  ngOnInit(): void {
    this.students_premier_cicle = this._students_pr_cicle.getStudents();
  }

}
