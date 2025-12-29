import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ChangeDetectionStrategy, } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ResumeModalComponent } from '../components/resume-modal/resume-modal.component';

import { SharedServiceService } from '../common/shared-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  sharedService = inject(SharedServiceService); // Inject shared service
  typingText: string = '';
  private roles: string[] = ['Web Developer', 'Angular Developer', 'Spring Boot Developer', 'Photo & Video Editor'];
  private currentRoleIndex: number = 0;
  private charIndex: number = 0;
  private isDeleting: boolean = false;
  Styles = ['cards', 'list']
  currentStyle: any = 'cards';
  changeContent = ':-)'
  @ViewChild('home', { static: false }) homeSection!: ElementRef;
  @ViewChild('project', { static: false }) projectSection!: ElementRef;
  @ViewChild('skill', { static: false }) skillSection!: ElementRef;
  @ViewChild('contact', { static: false }) contactSection!: ElementRef;



  cardData = [
    {
      hind: 'SPORTS BASED',
      name: 'SPORTS RULER WEB',
      imageUrl: '/assets/images/sportsruler.png',
      website: 'http://www.sportsruler.com/SR/home',
      description: 'SportsRuler is an endeavor to get all players of the Sports Eco system under one platform. It can help record scores, compute statistics, provide analytics just like how professionals would get access to data and information, every single passionate person can too.',
      visible: true
    },
    {
      hind: 'SPORTS BASED',
      name: 'SPORTS RULER SCORING APP',
      imageUrl: '/assets/images/sportsrulerApp.png',
      website: 'http://www.sportsruler.com/SR/home',
      description: 'SportsRuler is an app designed for updating live cricket scores. It allows users to record match scores, compute statistics, and provide real-time analytics. Whether you’re a professional or a passionate cricket fan, SportsRuler helps you update the score and keep track of the game with ease.',
      visible: true
    },
    {
      hind: 'COMPANY SITE',
      name: 'PRODIAN INFO TECH',
      imageUrl: '/assets/images/prodian.png',
      website: 'http://www.sportsruler.com/SR/home',
      description: "It's a company website for my current workplace, developed using Angular, TypeScript, and Spring Boot. In this site, I have incorporated common technologies such as Angular Material, Bootstrap, and shared services for efficient and reusable components.",
      visible: true
    },
    {
      hind: 'BANK BASED (UI LEVEL)',
      name: 'ANTI BRIBERY SYSTEM ',
      website: 'http://www.sportsruler.com/SR/home',
      imageUrl: '/assets/images/ABS.png',
      description: 'Morgan has collected ants since they were six years old and now has many dozen ants but none in their pants.',
      visible: true
    },
    {
      hind: 'BANK BASED (UI LEVEL)',
      name: 'COMPAINED OPERATION RATIO',
      website: 'http://www.sportsruler.com/SR/home',
      imageUrl: 'https://images.unsplash.com/photo-1506755855567-92ff770e8d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80',
      description: 'SportsRuler is an app designed for updating live cricket scores. It allows users to record match scores, compute statistics, and provide real-time analytics. Whether you’re a professional or a passionate cricket fan, SportsRuler helps you update the score and keep track of the game with ease.',
      visible: true
    },
    {
      hind: 'BANK BASED (UI LEVEL)',
      name: 'RENEWAL RETURNTION CALLING SYSTEM',
      website: 'http://www.sportsruler.com/SR/home',
      imageUrl: '/assets/images/RRCS.png',
      description: 'Adrian has collected flies since they were six years old and now has many dozen flies but none in their pants.',
      visible: true
    },
    // {
    //   hind:'BANK BASED (UI LEVEL)',
    //   name: 'REURN OF EQUITY',
    //   website:'http://www.sportsruler.com/SR/home',
    //     imageUrl: 'https://images.unsplash.com/photo-1506755855567-92ff770e8d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80',
    //   description: 'Adrian has collected flies since they were six years old and now has many dozen flies but none in their pants.',
    //   visible: true
    // },
    // Add more cards as needed
  ];
  readonly dialog = inject(MatDialog);
  isProjectOpen = false;
  isdialogOpen: boolean = false;
  sectionRefs: any;
  isSkillSection = false;


  ngOnInit() {
    this.startTyping();
  }
  ngAfterViewInit() {
    // Map each section name to its corresponding ElementRef
    this.sectionRefs = {
      home: this.homeSection,
      project: this.projectSection,
      skill: this.skillSection,
      contact: this.contactSection,
    };
    this.observeSkillSection();

  }
  openExternalLink(url: string): void {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  scrollToSection(section: string) {
    const targetSection = this.sectionRefs[section];
    if (targetSection) {
      targetSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
  changeStyle() {
    const currentIndex = this.Styles.indexOf(this.currentStyle);
    const nextIndex = (currentIndex + 1) % this.Styles.length;
    this.currentStyle = this.Styles[nextIndex];

    // Sync with Shared Service Style Mode
    // 'cards' -> 'futuristic', 'list' -> 'default'
    this.sharedService.setStyleMode(this.currentStyle === 'cards' ? 'futuristic' : 'default');
  }
  changeText(text: any) {
    if (text != '') {
      this.changeContent = text
    } else { this.changeContent = ':-)' }
  }
  private startTyping() {
    const currentRole = this.roles[this.currentRoleIndex];
    if (this.isDeleting) {
      this.typingText = currentRole.substring(0, this.charIndex--);
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      }
    } else {
      this.typingText = currentRole.substring(0, this.charIndex++);
      if (this.charIndex === currentRole.length) {
        this.isDeleting = true;
      }
    }

    setTimeout(() => this.startTyping(), this.isDeleting ? 100 : 150);
  }
  private observeSkillSection() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.isSkillSection) {
            this.isSkillSection = true;
            // alert('You have reached the Skills section!');
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    observer.observe(this.skillSection.nativeElement);
  }
  openResumeDialog() {
    this.dialog.open(ResumeModalComponent, {
      width: '400px',
      panelClass: 'resume-modal-panel',
      backdropClass: 'glass-backdrop'
    });
  }
}

export class DialogContentExampleDialog { }
