import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SkillModelComponent } from '../skill-model/skill-model.component';
import { SharedServiceService } from '../../common/shared-service.service';

interface Skill {
  name: string;
  percentage: number;
  counter: number;
  dashOffset: number; // New property for storing calculated dash offset
}

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.css']
})
export class SkillSetComponent {
  //   skills: Skill[] = [
  //     { name: 'Web UI Development', percentage: 90, counter: 0, dashOffset: 110 },
  //     { name: 'Web Functionality Development', percentage: 80, counter: 0, dashOffset: 20 },
  //     { name: 'Angular TS', percentage: 80, counter: 0, dashOffset: 10 },
  //     { name: 'React', percentage: 70, counter: 0, dashOffset: 120 },
  //     { name: 'Spring Boot', percentage: 75, counter: 0, dashOffset: 30 },
  //     { name: 'SQL Database', percentage: 75, counter: 0, dashOffset: 40 },
  //     { name: 'HTML', percentage: 90, counter: 0, dashOffset: 50 },
  //     { name: 'CSS', percentage: 90, counter: 0, dashOffset: 60 },
  //     { name: 'JavaScript', percentage: 90, counter: 0, dashOffset: 0 },
  //     { name: 'Core Java', percentage: 85, counter: 0, dashOffset: 0 },
  //     { name: 'JSP', percentage: 50, counter: 0, dashOffset: 0 },
  //     { name: 'Microservices', percentage: 40, counter: 0, dashOffset: 0 }
  //   ];
  //   intervalIds: any[] = [];

  //   ngOnInit(): void {
  //     this.startCounters();
  //   }

  //   ngOnDestroy(): void {
  //     this.intervalIds.forEach(intervalId => clearInterval(intervalId));
  //   }


  //   calculateDashOffset(percentage: number): number {
  //     const circleCircumference = 440;
  //     return circleCircumference - (circleCircumference * percentage) / 100;
  //   }
  //   startCounters(): void {
  //     this.skills.forEach((skill, index) => {
  //       skill.dashOffset = this.calculateDashOffset(skill.percentage); 
  //       const intervalId = setInterval(() => {
  //         if (skill.counter >= skill.percentage) {
  //           clearInterval(this.intervalIds[index]);
  //         } else {
  //           skill.counter += 1;
  //           skill.dashOffset = this.calculateDashOffset(skill.counter); 
  //         }
  //       }, 30);
  //       this.intervalIds.push(intervalId);
  //     });
  //   }

  skillList = {
    codeSkill: [
      { name: 'Angular', imgUrl: './assets/images/skills/angular.png', workExperience: '1+ year', trainingExperience: '8 months', efficient: 90, dashOffset: 110 },
      { name: 'Spring Boot', imgUrl: './assets/images/skills/springboot.png', workExperience: '1+ year', trainingExperience: '8 months', efficient: 85, dashOffset: 110 },
      { name: 'HTML', imgUrl: './assets/images/skills/html.png', workExperience: '1+ year', trainingExperience: '8 months', efficient: 95 },
      { name: 'CSS', imgUrl: './assets/images/skills/css.png', workExperience: '1+ year', trainingExperience: '8 months', efficient: 95 },
      { name: 'JavaScript', imgUrl: './assets/images/skills/js.png', workExperience: '1+ year', trainingExperience: '8 months', efficient: 90 },
      { name: 'Java', imgUrl: './assets/images/skills/java.png', workExperience: '1+ year', trainingExperience: '8 months', efficient: 80, dashOffset: 110 },
      { name: 'jsp', imgUrl: './assets/images/skills/jsp.png', workExperience: '6+ months', trainingExperience: '3 months', efficient: 50, dashOffset: 110 },
      { name: 'React', imgUrl: './assets/images/skills/react.png', workExperience: '1+ year', trainingExperience: '8 months', efficient: 53, dashOffset: 110 },
      { name: 'NodeJs', imgUrl: './assets/images/skills/nodeJs.png', workExperience: '1+ year', trainingExperience: '8 months', efficient: 53, dashOffset: 110 },
      { name: 'Sql', imgUrl: './assets/images/skills/sql.png', workExperience: '1+ year', trainingExperience: '8 months', efficient: 75, dashOffset: 110 },
    ],
    otherSkill: [
      { name: 'Bootstrap', imgUrl: './assets/images/skills/bootstrap.png', efficient: 80, workExperience: '1+ year', trainingExperience: '8 months' },
      { name: 'Angular material', imgUrl: './assets/images/skills/angularMat.png', efficient: 75, workExperience: '1+ year', trainingExperience: '3 months' },
      { name: 'Figma', imgUrl: './assets/images/skills/figma.png', efficient: 70, workExperience: '6 months', trainingExperience: '3 months' },
      { name: 'git', imgUrl: './assets/images/skills/git.png', efficient: 70, workExperience: '1+ year', trainingExperience: '1 months' },
      { name: 'PicsArt', imgUrl: './assets/images/skills/picsart.png', efficient: 95, workExperience: '4+ year', trainingExperience: '' },
      { name: 'Power Director', imgUrl: './assets/images/skills/powerdirector.png', efficient: 95, workExperience: '4+ year', trainingExperience: '' },


    ]
  }
  readonly dialog = inject(MatDialog);
  sharedService = inject(SharedServiceService); // Inject shared service

  openDialog(data: {}): void {
    const dialogRef = this.dialog.open(SkillModelComponent, {
      data: { data, styleMode: this.sharedService.getStyleMode() }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
