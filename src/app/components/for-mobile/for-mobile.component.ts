import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/common/shared-service.service';

@Component({
  selector: 'app-for-mobile',
  templateUrl: './for-mobile.component.html',
  styleUrls: ['./for-mobile.component.css']
})
export class ForMobileComponent {
  currentSlide = 1;
  constructor(private sharedService: SharedServiceService) {}
  cardData:any
  selectedCardName: string=''
  selectedCardDesc:any;
  displayedText: string = '';
  typingSpeed: number = 50;
  typingInterval: any; 

  ngOnInit(): void {
    this.cardData = this.sharedService.getSharedData();
    this.selectedCardName= this.cardData[0].name;
    this.selectedCardDesc= this.cardData[0].description;
    this.startTypewriterAnimation(this.selectedCardDesc)
  }
  changeSlide(slideNumber: number): void {
    this.currentSlide = slideNumber;
  }
  onCardSelect(cardName: string,cardDesc:any): void {
    this.selectedCardName = cardName;
    this.selectedCardDesc = cardDesc;
    this.startTypewriterAnimation(cardDesc);
  }
  startTypewriterAnimation(text: string): void {
    this.displayedText = '';
    let index = 0;
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
    this.typingInterval = setInterval(() => {
      if (index < text.length) {
        this.displayedText += text[index];
        index++;
      } else {
        clearInterval(this.typingInterval);
      }
    }, this.typingSpeed);
  }
}