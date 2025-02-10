import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/common/shared-service.service';
import { SnackBarService } from 'src/app/services/snack-bar';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  constructor(private snackBarService: SnackBarService,private sharedService: SharedServiceService) {}


  cardData:any

  ngOnInit(): void {
    this.cardData = this.sharedService.getSharedData();
  }

  openExternalLink(url: string): void {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
  currentIndex = 0;

  calculateOrder(index: number): number {
    return (index - this.currentIndex + this.cardData.length) % this.cardData.length;
  }

  slideLeft(): void {
    this.currentIndex = (this.currentIndex - 1 + this.cardData.length) % this.cardData.length;
  }

  slideRight(): void {
    this.currentIndex = (this.currentIndex + 1) % this.cardData.length;
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
  openSnackBar(project:any,duration:any){
    this.snackBarService.openSnackBar(`I worked on ${project.toLowerCase()} as a team member for ${duration} months.`);
  }

}
