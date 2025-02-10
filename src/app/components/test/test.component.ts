import { Component } from '@angular/core';
import * as moment from 'moment';
import { SharedServiceService } from 'src/app/common/shared-service.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  constructor(private sharedService: SharedServiceService) {}

  cardData:any

  ngOnInit(): void {
    this.cardData = this.sharedService.getSharedData();
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
