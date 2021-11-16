import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {

  img1: string = "https://mls1iejiacfa.i.optimole.com/-rMZmvQ.sMX2~24f5f/w:570/h:481/q:90/https://www.bten.com.br/wp-content/uploads/2020/06/solucoes-1.png";
  img2: string = "https://mls1iejiacfa.i.optimole.com/-rMZmvQ.sMX2~24f5f/w:570/h:481/q:90/https://www.bten.com.br/wp-content/uploads/2020/06/solucoes-2.png";
  img3: string = "https://mls1iejiacfa.i.optimole.com/-rMZmvQ.sMX2~24f5f/w:570/h:481/q:90/https://www.bten.com.br/wp-content/uploads/2020/06/solucoes-3.png";

  constructor() { }

  ngOnInit(): void {
  }

}
