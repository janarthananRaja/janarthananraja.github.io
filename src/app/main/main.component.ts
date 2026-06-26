import { Component, ElementRef, inject, OnInit, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResumeModalComponent } from '../components/resume-modal/resume-modal.component';
import { SharedServiceService } from '../common/shared-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {
  sharedService = inject(SharedServiceService);
  readonly dialog = inject(MatDialog);

  typingText: string = '';
  private roles: string[] = ['Web Developer', 'Angular Developer', 'Spring Boot Developer', 'Photo & Video Editor'];
  private currentRoleIndex: number = 0;
  private charIndex: number = 0;
  private isDeleting: boolean = false;

  // Layout Management
  currentStyle: 'cards' | 'list' = 'cards';
  
  // Project Category Management
  activeProjectCategory: 'Professional' | 'Personal' = 'Professional';
  
  // Theme Management
  isDarkMode: boolean = true;
  
  changeContent = ':-)';

  @ViewChild('home') homeSection!: ElementRef;
  @ViewChild('project') projectSection!: ElementRef;
  @ViewChild('skill') skillSection!: ElementRef;
  @ViewChild('contact') contactSection!: ElementRef;

  sectionRefs: any;
  isSkillSection = false;
  private spotlitElements: HTMLElement[] = [];

  cardData = [
    {
      hind: 'SPORTS BASED',
      name: 'SPORTS RULER WEB',
      imageUrl: '/assets/images/sportsruler.png',
      website: 'http://www.sportsruler.com/SR/home',
      description: 'SportsRuler is an endeavor to get all players of the Sports Eco system under one platform.',
      visible: true
    },
    {
      hind: 'SPORTS BASED',
      name: 'SPORTS RULER SCORING APP',
      imageUrl: '/assets/images/sportsrulerApp.png',
      website: 'http://www.sportsruler.com/SR/home',
      description: 'SportsRuler is an app designed for updating live cricket scores.',
      visible: true
    },
    {
      hind: 'COMPANY SITE',
      name: 'PRODIAN INFO TECH',
      imageUrl: '/assets/images/prodian.png',
      website: 'http://www.sportsruler.com/SR/home',
      description: "It's a company website for my current workplace.",
      visible: true
    },
    {
      hind: 'BANK BASED (UI LEVEL)',
      name: 'ANTI BRIBERY SYSTEM ',
      website: 'http://www.sportsruler.com/SR/home',
      imageUrl: '/assets/images/ABS.png',
      description: 'Anti-bribery management system for banking sector.',
      visible: true
    },
    {
      hind: 'BANK BASED (UI LEVEL)',
      name: 'COMPAINED OPERATION RATIO',
      website: 'http://www.sportsruler.com/SR/home',
      imageUrl: 'https://images.unsplash.com/photo-1506755855567-92ff770e8d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80',
      description: 'Operational ratio analysis tool for banks.',
      visible: true
    },
    {
      hind: 'BANK BASED (UI LEVEL)',
      name: 'RENEWAL RETURNTION CALLING SYSTEM',
      website: 'http://www.sportsruler.com/SR/home',
      imageUrl: '/assets/images/RRCS.png',
      description: 'Customer retention calling system.',
      visible: true
    }
  ];

  ngOnInit() {
    this.startTyping();
    this.loadTheme();
  }

  ngAfterViewInit() {
    this.sectionRefs = {
      home: this.homeSection,
      project: this.projectSection,
      skill: this.skillSection,
      contact: this.contactSection
    };
    this.observeSections();
    this.updateSpotlitElements();
  }

  private updateSpotlitElements() {
    // Collect all elements that should respond to the spotlight effect
    this.spotlitElements = Array.from(document.querySelectorAll('.magnetic-item, .btn-premium, .nav-link, .glass-card, .design-side-toggle')) as HTMLElement[];
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.spotlitElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);
    });
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem('jana-portfolio-theme');
    if (savedTheme === 'light') {
      this.isDarkMode = false;
      document.body.classList.add('light-theme');
      this.sharedService.setStyleMode('default');
    } else {
      this.isDarkMode = true;
      document.body.classList.remove('light-theme');
      this.sharedService.setStyleMode('futuristic');
    }
  }

  scrollToSection(section: string) {
    const targetSection = this.sectionRefs[section];
    if (targetSection) {
      targetSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleLayout() {
    this.currentStyle = this.currentStyle === 'cards' ? 'list' : 'cards';
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const mode = this.isDarkMode ? 'futuristic' : 'default';
    this.sharedService.setStyleMode(mode);
    localStorage.setItem('jana-portfolio-theme', this.isDarkMode ? 'dark' : 'light');

    if (this.isDarkMode) {
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
    }
    
    // Re-grab elements after theme toggle as some might have dynamic classes
    setTimeout(() => this.updateSpotlitElements(), 100);
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

  private observeSections() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          if (entry.target === this.skillSection.nativeElement) {
            this.isSkillSection = true;
          }
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.reveal-section');
    sections.forEach(s => observer.observe(s));
  }

  openResumeDialog() {
    const isDefault = this.sharedService.getStyleMode() === 'default';
    this.dialog.open(ResumeModalComponent, {
      width: '400px',
      panelClass: isDefault ? ['resume-modal-panel', 'light-theme-modal'] : 'resume-modal-panel',
      backdropClass: 'cdk-overlay-dark-backdrop'
    });
  }
}
