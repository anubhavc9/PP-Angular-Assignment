import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  
  @Input() public category: any;
  @Input() public image: any;
  @Input() public values: any;
  @Input() public side: any;

  constructor() { }

  ngOnInit(): void {
  }

}
