import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SharedServiceService } from 'src/app/common/shared-service.service';

@Component({
  selector: 'app-for-mobile',
  templateUrl: './for-mobile.component.html',
  styleUrls: ['./for-mobile.component.css']
})
export class ForMobileComponent implements OnInit, OnChanges {
  @Input() category: 'Professional' | 'Personal' = 'Professional';
  allCardData: any;
  cardData: any;
  currentSlide = 1;
  selectedCardName: string = '';
  selectedCardDesc: any;
  displayedText: string = '';
  typingSpeed: number = 50;
  typingInterval: any;

  constructor(private sharedService: SharedServiceService) {}

  ngOnInit(): void {
    this.allCardData = this.sharedService.getSharedData();
    this.filterData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category'] && !changes['category'].firstChange) {
      this.filterData();
    }
  }

  filterData(): void {
    if (this.allCardData) {
      this.cardData = this.allCardData.filter((item: any) => item.category === this.category);
      if (this.cardData && this.cardData.length > 0) {
        this.selectedCardName = this.cardData[0].name;
        this.selectedCardDesc = this.cardData[0].description;
        this.startTypewriterAnimation(this.selectedCardDesc);
      } else {
        this.selectedCardName = '';
        this.displayedText = 'No projects found.';
      }
      this.currentSlide = 1;
    }
  }

  changeSlide(slideNumber: number): void {
    this.currentSlide = slideNumber;
  }

  onCardSelect(cardName: string, cardDesc: any): void {
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