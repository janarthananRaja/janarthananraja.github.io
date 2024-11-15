import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  cardData = [
    {
      hind:'SPORTS BASED',
      name: 'SPORTS RULER WEB',
      imageUrl: '/assets/images/sportsruler.png',
      website:'http://www.sportsruler.com/SR/home',
      description: 'SportsRuler is an endeavor to get all players of the Sports Eco system under one platform. It can help record scores, compute statistics, provide analytics just like how professionals would get access to data and information, every single passionate person can too.',
      visible: true
    },
    {
      hind:'SPORTS BASED',
      name: 'SPORTS RULER SCORING APP',
      imageUrl: '/assets/images/sportsrulerApp.png',
      website:'http://www.sportsruler.com/SR/home',
      description: 'SportsRuler is an app designed for updating live cricket scores. It allows users to record match scores, compute statistics, and provide real-time analytics. Whether you’re a professional or a passionate cricket fan, SportsRuler helps you update the score and keep track of the game with ease.',
      visible: true
    },
    {
      hind:'COMPANY SITE',
      name: 'PRODIAN INFO TECH',
      imageUrl: '/assets/images/prodian.png',
      website:'http://www.sportsruler.com/SR/home',
      description: "It's a company website for my current workplace, developed using Angular, TypeScript, and Spring Boot. In this site, I have incorporated common technologies such as Angular Material, Bootstrap, and shared services for efficient and reusable components.",
      visible: true
    },
    {
      hind:'BANK BASED (UI LEVEL)',
      name: 'ANTI BRIBERY SYSTEM ',
      website:'http://www.sportsruler.com/SR/home',
      imageUrl: '/assets/images/ABS.png',
      description: 'Morgan has collected ants since they were six years old and now has many dozen ants but none in their pants.',
      visible: true
    },
    {
      hind:'BANK BASED (UI LEVEL)',
      name: 'COMPAINED OPERATION RATIO',
      website:'http://www.sportsruler.com/SR/home',
      imageUrl: 'https://images.unsplash.com/photo-1506755855567-92ff770e8d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80',
      description: 'SportsRuler is an app designed for updating live cricket scores. It allows users to record match scores, compute statistics, and provide real-time analytics. Whether you’re a professional or a passionate cricket fan, SportsRuler helps you update the score and keep track of the game with ease.',
      visible: true
    },
    {
      hind:'BANK BASED (UI LEVEL)',
      name: 'RENEWAL RETURNTION CALLING SYSTEM',
      website:'http://www.sportsruler.com/SR/home',
      imageUrl: '/assets/images/RRCS.png',
      description: 'Adrian has collected flies since they were six years old and now has many dozen flies but none in their pants.',
      visible: true
    },
  ];

  openExternalLink(url: string): void {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
 
  enableCardVisibility(index: number) {
    setTimeout(() => {
      this.cardData[index].visible = false;
    }, 100);
  }
  diableCardVisibility(index: number) {
    setTimeout(() => {
      this.cardData[index].visible = true;
    }, 100);
  }

}
