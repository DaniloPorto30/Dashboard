import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  img1: string = "https://static7.depositphotos.com/1001877/790/i/600/depositphotos_7908742-stock-photo-toolbox-with-tools-skrewdriver-hammer.jpg";
  img2: string = "https://s2.glbimg.com/56vdja0cxdCoUPWP7eehjSZgTmg=/0x0:1400x788/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/t/f/ZBcMRsSkOA0FB8TfRrfw/saiba-quais-sao-as-ferramentas-que-nao-podem-faltar-na-sua-casa.png";
  img3: string = "https://image.freepik.com/fotos-gratis/pessoa-usando-ferramentas-para-criar-palavra-de-carpintaria_23-2148640311.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
