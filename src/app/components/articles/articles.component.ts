import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  img1: string = "https://mls1iejiacfa.i.optimole.com/-rMZmvQ.sMX2~24f5f/w:469/h:410/q:90/https://www.bten.com.br/wp-content/uploads/2020/06/01.png";
  img2: string = "https://mls1iejiacfa.i.optimole.com/-rMZmvQ.sMX2~24f5f/w:469/h:410/q:90/https://www.bten.com.br/wp-content/uploads/2020/06/02.png";
  img3: string = "https://mls1iejiacfa.i.optimole.com/-rMZmvQ.sMX2~24f5f/w:469/h:410/q:90/https://www.bten.com.br/wp-content/uploads/2020/06/03.png";
  constructor() { }

  ngOnInit(): void {
  }

}
