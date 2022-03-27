import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      cardNo: 'card-1', 
      title: 'React Meals', 
      desc: 'A full-stack MERN web application for ordering food online', 
      front: 'ReactJS', 
      back: 'Node.js/Express, MongoDB, Jest, React Testing Library', 
      href: 'https://www.github.com/anubhavc9/Food-Order-App'
    },
    {
      cardNo: 'card-2', 
      title: 'My Messenger', 
      desc: 'A real-time messaging web application using Socket.IO, a JavaScript library that enables real-time bi-directional communication between clients and servers', 
      front: 'HTML, CSS', 
      back: 'Node.js, Socket.IO', 
      href: 'https://github.com/anubhavc9/My-WhatsApp'
    },
    {
      cardNo: 'card-3', 
      title: 'Typing Speed Test App', 
      desc: 'A GUI application that displays a sample text & measures the users relevant statistics such a', 
      front: 'Tkinter', 
      back: 'Python', 
      href: 'https://github.com/anubhavc9/My-WhatsApp'
    },
    {
      cardNo: 'card-4', 
      title: 'Typing Speed Test App', 
      desc: 'A GUI application that displays a sample text & measures the users relevant statistics such a', 
      front: 'Tkinter', 
      back: 'Python', 
      href: 'https://github.com/anubhavc9/My-WhatsApp'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
