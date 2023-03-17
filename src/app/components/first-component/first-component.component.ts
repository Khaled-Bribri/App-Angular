import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit{
  list = [
    { 
      id: 1,
      subject: 'text 01',
      description: 'ceci est un test'
    },
    { 
      id: 2,
      subject: 'text 01',
      description: 'ceci est un test'
    },
    { 
      id: 3,
      subject: 'text 03',
      description: 'ceci est un test'
    }
  ]
  constructor() {}
    ngOnInit(): void {

    }
  
}
