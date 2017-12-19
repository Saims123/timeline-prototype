import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  public date: string;

  constructor() { 
    this.date = new Date().toJSON();
  }

  ngOnInit() {

    



  }

}
