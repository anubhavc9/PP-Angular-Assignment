import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent implements OnInit {
  public name: string;
  public intro: string;

  constructor() {
    this.name = `Anubhav Kandiyal`;
    // this.intro = `I'm an aspiring Full-Stack Web Developer looking for an entry-level position in a dynamic organization that values my analytical and technical skills and provides scope for updating my knowledge. I seek a company that will help me contribute to its development while concurrently aiding my personal growth.`;
    this.intro = `I'm a Software Developement Engineer, currently working as a Frontend Developer at AgroStar, Pune. I work on building highly scalable & responsive web apps.`;
  }

  ngOnInit(): void {}
}
