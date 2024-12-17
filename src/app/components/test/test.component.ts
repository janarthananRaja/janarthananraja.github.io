import { Component } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  cardData = [
    {
      hind:'SPORTS BASED',
      name: 'SPORTS RULER WEB',
      imageUrl: './assets/images/sportsruler.png',
      website:'http://www.sportsruler.com/SR/home',
      description: 'SportsRuler is an endeavor to get all players of the Sports Eco system under one platform. It can help record scores, compute statistics, provide analytics just like how professionals would get access to data and information, every single passionate person can too.',
      visible: true,
      duration:10,
      usedTech:['Angular','TypeScript','MatLap','Bootstrap','SpringBoot', 'Sql','picsArt'] 
    },
    {
      hind:'SPORTS BASED',
      name: 'SPORTS RULER SCORING APP',
      imageUrl: './assets/images/sportsrulerApp.png',
      website:'http://www.sportsruler.com/SR/home',
      description: 'SportsRuler is an app designed for updating live cricket scores. It allows users to record match scores, compute statistics, and provide real-time analytics. Whether you’re a professional or a passionate cricket fan, SportsRuler helps you update the score and keep track of the game with ease.',
      visible: true,
      duration:10 ,
      usedTech:['Angular','TypeScript','MatLap','Bootstrap','SpringBoot', 'Sql'] 

    },
    {
      hind:'COMPANY SITE',
      name: 'PRODIAN INFO TECH',
      imageUrl: './assets/images/prodian.png',
      website:'http://www.sportsruler.com/SR/home',
      description: "It's a company website for my current workplace, developed using Angular, TypeScript, and Spring Boot. In this site, I have incorporated common technologies such as Angular Material, Bootstrap, and shared services for efficient and reusable components.",
      visible: true,
      duration:1 ,
      usedTech:['Angular','TypeScript','MatLap','Bootstrap'] 

    },
    {
      hind:'BANK BASED (UI LEVEL)',
      name: 'ANTI BRIBERY SYSTEM ',
      website:'http://www.sportsruler.com/SR/home',
      imageUrl: './assets/images/ABS.png',
      description: 'Morgan has collected ants since they were six years old and now has many dozen ants but none in their pants.',
      visible: true,
      duration:1 ,
      usedTech:['Angular','TypeScript','MatLap','Swal','Bootstrap','SpringBoot', 'Sql'] 

    },
    {
      hind:'BANK BASED (UI LEVEL)',
      name: 'COMPAINED OPERATION RATIO',
      website:'http://www.sportsruler.com/SR/home',
      imageUrl: 'https://images.unsplash.com/photo-1506755855567-92ff770e8d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80',
      description: 'SportsRuler is an app designed for updating live cricket scores. It allows users to record match scores, compute statistics, and provide real-time analytics. Whether you’re a professional or a passionate cricket fan, SportsRuler helps you update the score and keep track of the game with ease.',
      visible: true,
      duration:2,
      usedTech:['Angular','TypeScript','MatLap','Swal','Bootstrap','SpringBoot', 'Sql'] 
    },
    {
      hind:'BANK BASED (UI LEVEL)',
      name: 'RENEWAL RETURNTION CALLING SYSTEM',
      website:'http://www.sportsruler.com/SR/home',
      imageUrl: './assets/images/RRCS.png',
      description: 'Adrian has collected flies since they were six years old and now has many dozen flies but none in their pants.',
      visible: true,
      duration:2,
      usedTech:['Jsp','Swal','Bootstrap','Java', 'Sql'] 

    },
  ];



  currentSlide = 1; // Tracks the current slide

  changeSlide(slideNumber: number): void {
    this.currentSlide = slideNumber;
    // Toggle 'blue' background based on the slide number
    if (slideNumber === 1) {
      document.body.classList.add('blue');
    } else {
      document.body.classList.remove('blue');
    }
  }
  
}
