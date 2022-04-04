import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactInfo = [
    {key: 'Phone', value: '+91 93543-87396', link: ''},
    {key: 'WhatsApp', value: '+91 88009-69322', link: ''},
    {key: 'Email', value: 'anubhavc9@gmail.com', link: ''},
    {key: 'GitHub', value: 'github.com/anubhavc9', link: 'https://www.github.com/anubhavc9'},
];
  constructor() {}

  ngOnInit(): void {
  }

}
