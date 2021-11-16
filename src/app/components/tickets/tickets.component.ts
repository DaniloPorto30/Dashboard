import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  img1: string = "https://mls1iejiacfa.i.optimole.com/-rMZmvQ.sMX2~24f5f/w:262/h:111/q:90/https://www.bten.com.br/wp-content/uploads/2018/01/selos.png";
  constructor() { }

  ngOnInit(): void {
  }

}
