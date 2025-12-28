import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SharedServiceService } from 'src/app/common/shared-service.service';
import { SnackBarService } from 'src/app/services/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ResumeModalComponent } from '../resume-modal/resume-modal.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  cardData: any[] = [];
  currentProject: any;
  currentIndex = 0;

  showAllTechs = false;
  // Animation states: 'visible', 'entering', 'leaving'
  animState: 'visible' | 'entering' | 'leaving' = 'visible';
  isAnimating = false;

  @ViewChild('cardContainer') cardContainer!: ElementRef;

  constructor(
    private snackBarService: SnackBarService,
    private sharedService: SharedServiceService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.cardData = this.sharedService.getSharedData();
    // Start with the first project
    if (this.cardData && this.cardData.length > 0) {
      this.currentProject = this.cardData[0];
    }
  }

  // Mouse move handler for the cursor glow effect
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (!this.cardContainer) return;

    requestAnimationFrame(() => {
      const card = this.cardContainer.nativeElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  }

  nextProject() {
    if (this.isAnimating || !this.cardData || this.cardData.length === 0) return;

    this.isAnimating = true;

    // 1. Fade out current
    this.animState = 'leaving';

    // 2. Wait for fade out (500ms)
    setTimeout(() => {
      // Switch Data
      this.showAllTechs = false;
      this.currentIndex = (this.currentIndex + 1) % this.cardData.length;
      this.currentProject = this.cardData[this.currentIndex];

      // Prepare for entrance (opacity 0)
      this.animState = 'entering';

      // Short delay before entering (100ms)
      setTimeout(() => {
        // 3. Fade in new
        this.animState = 'visible';

        // Reset animation lock after transition (500ms)
        setTimeout(() => {
          this.isAnimating = false;
        }, 500);
      }, 100);

    }, 500);
  }

  prevProject() {
    if (this.isAnimating || !this.cardData || this.cardData.length === 0) return;

    this.isAnimating = true;
    this.animState = 'leaving';

    setTimeout(() => {
      this.showAllTechs = false;
      this.currentIndex =
        (this.currentIndex - 1 + this.cardData.length) % this.cardData.length;
      this.currentProject = this.cardData[this.currentIndex];
      this.animState = 'entering';

      setTimeout(() => {
        this.animState = 'visible';
        setTimeout(() => {
          this.isAnimating = false;
        }, 500);
      }, 100);
    }, 500);
  }

  openExternalLink(url: string): void {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  openResumeDialog() {
    this.dialog.open(ResumeModalComponent, {
      width: '400px',
      panelClass: 'resume-modal-panel',
      backdropClass: 'glass-backdrop'
    });
  }

  // Helper to get specific icons based on tech stack
  hasTech(tech: string): boolean {
    return this.currentProject?.usedTech?.some((t: string) => t.toLowerCase().includes(tech.toLowerCase()));
  }

  // Tech Icon Paths
  private techIcons: { [key: string]: string } = {
    'angular': 'M12 2.2l-10.4 3.7 1.6 13.9L12 21.8l8.8-2 1.6-13.9L12 2.2zm0 2.3l6.5 2.3-.9 8.2-5.6 1.3-5.6-1.3-.9-8.2 6.5-2.3z',
    'spring': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4-3h-2V8h2v6z',
    'java': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4-3h-2V8h2v6z',
    'sql': 'M12 3C7.58 3 4 4.34 4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6c0-1.66-3.58-3-8-3zm0 13c-3.53 0-6.4-1.07-7-2.5V11c.6 1.43 3.47 2.5 7 2.5s6.4-1.07 7-2.5v2.5c-.6 1.43-3.47 2.5-7 2.5zm0-5c-3.53 0-6.4-1.07-7-2.5V6c.6 1.43 3.47 2.5 7 2.5s6.4-1.07 7-2.5v2.5c-.6 1.43-3.47 2.5-7 2.5z',
    'default': 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z'
  };

  getTechIconPath(tech: string): string {
    const normalize = tech.toLowerCase();
    for (const key in this.techIcons) {
      if (normalize.includes(key)) {
        return this.techIcons[key];
      }
    }
    return this.techIcons['default'];
  }

  getDisplayedTechs(): string[] {
    if (!this.currentProject?.usedTech) return [];
    if (this.showAllTechs) {
      return this.currentProject.usedTech;
    }
    // Show first 3 by default
    return this.currentProject.usedTech.slice(0, 3);
  }

  toggleTechView(event: MouseEvent) {
    event.stopPropagation();
    this.showAllTechs = !this.showAllTechs;
  }

  // Get mapped bullet points (fake generation for demo if not in data)
  getBulletPoints(): string[] {
    if (!this.currentProject) return [];

    if (this.currentProject.isResume) {
      return [
        'Digital & PDF Formats',
        'Instant Email Delivery',
        'Full Professional History'
      ];
    }

    // If description is long, split it or generate features based on tech
    const base = [
      `Built using ${this.currentProject.usedTech[0] || 'Modern Tech'}`,
    ];

    if (this.currentProject.status) {
      base.push(`Status: ${this.currentProject.status}`);
    }

    if (this.currentProject.hind) {
      base.push(`Category: ${this.currentProject.hind}`);
    }
    return base;
  }
}
