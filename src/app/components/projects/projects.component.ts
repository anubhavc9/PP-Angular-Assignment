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
      title: 'My Messenger',
      desc: 'A real-time messaging web application using Socket.IO, a JavaScript library that enables real-time bi-directional communication between clients and servers',
      front: 'HTML, CSS',
      back: 'Node.js, Socket.IO',
      tech: '',
      href: 'https://joyful-hotteok-a3957a.netlify.app/'
    },
    {
      cardNo: 'card-2',
      title: 'My Todo List App',
      desc: 'A simple todo list Angular application that uses REST APIs to communicate with a Node.js/Express.js backend',
      front: 'AngularJS',
      back: 'Node.js/Express & PostgreSQL',
      tech: '',
      href: 'https://my-todo-list-frontend.herokuapp.com/'
    },
    {
      cardNo: 'card-3',
      title: 'Food Order App - React Meals',
      desc: 'A full-stack MongoDB, Express, ReactJS, NodeJS (MERN) web application for ordering food online',
      front: 'ReactJS',
      back: 'Node.js/Express, MongoDB, Jest, React Testing Library',
      tech: '',
      href: 'https://react-food-order-app-iota.vercel.app/'
    },
    {
      cardNo: 'card-4',
      title: 'Meetups Manager',
      desc: 'A full-stack Next.js application for managing meetups. Uses File-Based Routing, Server-Side Rendering & Incremental Static Generation for better perfomance & SEO',
      front: '',
      back: '',
      tech: 'Next.js, MongoDB',
      href: 'https://meetups-manager.vercel.app/'
    },
    {
      cardNo: 'card-5',
      title: 'Typing Speed Test App',
      desc: 'A GUI application that displays a sample text & measures the users relevant statistics such as typing speed, accuracy etc.',
      front: '',
      back: '',
      tech: 'Python, Tkinter',
      href: 'https://github.com/anubhavc9/typing-speed-test'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
