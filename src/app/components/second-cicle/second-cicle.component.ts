import { Component, OnInit } from '@angular/core';
import { PremierCicleServiceService } from 'src/app/services-files/premier-cicle-service.service';

@Component({
  selector: 'app-second-cicle',
  templateUrl: './second-cicle.component.html',
  styleUrls: ['./second-cicle.component.css']
})
export class SecondCicleComponent implements OnInit {

  public students_second_cicle = [] as any;

  constructor(private _students_scd_cicle: PremierCicleServiceService) { }

  ngOnInit(): void {
        this.students_second_cicle = this._students_scd_cicle.getStudents();
  }

}
