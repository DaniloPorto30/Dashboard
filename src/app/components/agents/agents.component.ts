import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {

  img1: string = "https://mls1iejiacfa.i.optimole.com/-rMZmvQ.sMX2~24f5f/w:316/h:316/q:90/https://www.bten.com.br/wp-content/uploads/2018/01/afonso-neto-founder.png";
  img2: string = "https://mls1iejiacfa.i.optimole.com/-rMZmvQ.sMX2~24f5f/w:316/h:316/q:90/https://www.bten.com.br/wp-content/uploads/2020/06/fernando-vale-founder.jpg";
  img3: string = "https://mls1iejiacfa.i.optimole.com/-rMZmvQ.sMX2~24f5f/w:316/h:316/q:90/https://www.bten.com.br/wp-content/uploads/2020/06/samuel-pereira-founder.jpg";
  img4: string = "https://mls1iejiacfa.i.optimole.com/-rMZmvQ.sMX2~24f5f/w:316/h:316/q:90/https://www.bten.com.br/wp-content/uploads/2020/06/vinni-dos-santos-founder.png.png";

  constructor() { }

  ngOnInit(): void {
  }

}
