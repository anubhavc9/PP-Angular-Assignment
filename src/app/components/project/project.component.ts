import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() public cardNo: any;
  @Input() public title: any;
  @Input() public desc: any;
  @Input() public front: any;
  @Input() public back: any;
  @Input() public href: any;


  constructor() { }

  ngOnInit(): void {
  }

}
