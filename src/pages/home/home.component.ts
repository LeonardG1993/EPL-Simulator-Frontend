import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/services/team.service';
import { PredictService } from 'src/services/predict.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
