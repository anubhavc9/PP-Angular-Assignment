import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  technical_skills = [
    {
      category: 'Programming Languages',
      image: '../../../assets/images/2.jpg',
      values: [
        "Python", "JavaScript", "TypeScript", "C++", "Java", "Go", "C"
      ],
      side: 'left',
    },
    {
      category: 'Web Development - Frameworks, Technology & Tools',
      image: '../../../assets/images/1.jpg',
      values: [
        "ReactJS & Redux", "AngularJS", "NextJS", "REST API", "Express.js", "Node.js", "jQuery", "Flask"
      ],
      side: 'right',
    },
    {
      category: 'DevOps',
      image: '../../../assets/images/4.jpg',
      values: [
        "Git & GitHub", "Docker", "Kubernetes", "AWS", "Ansible", "Jenkins"
      ],
      side: 'left',
    },
    {
      category: 'Databases',
      image: '../../../assets/images/5.jpg',
      values: [
        "MySQL", "MongoDB", "PostgreSQL"
      ],
      side: 'right',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
