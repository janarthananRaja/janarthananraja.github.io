import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  cardData:any = [
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
      description: "The Anti-Bribery System ensures users acknowledge their insurance company's terms and conditions by securely signing agreements. It promotes transparency and compliance, streamlining the acknowledgment process for both users and companies.",
      visible: true,
      duration:1 ,
      usedTech:['Angular','TypeScript','MatLap','Swal','Bootstrap','SpringBoot', 'Sql'] 

    },
    {
      hind:'BANK BASED (UI LEVEL)',
      name: 'COMPAINED OPERATION RATIO',
      website:'http://www.sportsruler.com/SR/home',
      imageUrl: './assets/images/COR.png',
      description: "The combined ratio is a financial metric that evaluates the relationship between claim-related losses and expenses relative to the premiums earned. It provides a clear measure of an insurance company’s profitability by assessing its efficiency in underwriting and managing expenses.",
      visible: true,
      duration:2,
      usedTech:['Angular','TypeScript','MatLap','Swal','Bootstrap','SpringBoot', 'Sql'] 
    },
    {
      hind:'BANK BASED (UI LEVEL)',
      name: 'RENEWAL RETURNTION CALLING SYSTEM',
      website:'http://www.sportsruler.com/SR/home',
      imageUrl: './assets/images/RRCS.png',
      description: "Renewal Retention Calling System (RRCS): A streamlined application designed to manage expiring insurance policies, minimize lapses, and maximize customer retention through seamless renewals and timely customer communication.",
      visible: true,
      duration:2,
      usedTech:['Jsp','Swal','Bootstrap','Java', 'Sql'] 
    },
    {
      hind:'FLIGHT INDUSTRIES',
      name: 'FLEXCOP PRO (FREIGHT PAY)',
      website:'http://www.sportsruler.com/SR/home',
      imageUrl: './assets/images/FCP-FP.png',
      description: "FlexCapPro is a B2B payment platform that simplifies transactions between buyers and suppliers, enabling payments via commercial cards. It benefits suppliers with early payouts and reduced tracking, while buyers enjoy discounts and minimized late payment risks. (Flight industries)",
      visible: true,
      duration:2,
      usedTech:['Angular','TypeScript','MatLap','Swal','Bootstrap','SpringBoot', 'PSql'] 
    },
  ];

  constructor() {}

  setSharedData(data: any): void {
    this.cardData = data;
  }

  getSharedData(): any {
    return this.cardData;
  }

  resetSharedData(): void {
    this.cardData = null;
  }
}
