import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as moment from 'moment';
import { SharedServiceService } from 'src/app/common/shared-service.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnChanges {
  @Input() category: 'Professional' | 'Personal' = 'Professional';
  allCardData: any;
  cardData: any;

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
    }
  }



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
