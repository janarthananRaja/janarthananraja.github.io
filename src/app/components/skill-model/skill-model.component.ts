import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-skill-model',
  templateUrl: './skill-model.component.html',
  styleUrls: ['./skill-model.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SkillModelComponent {
  skillData = this.data.data;

  // Futuristic Animation properties
  radius = 60;
  circumference = 2 * Math.PI * this.radius;
  strokeDashoffset = this.circumference;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { data: any },
    private dialogRef: MatDialogRef<SkillModelComponent>
  ) { }

  ngOnInit(): void {
    const percentage = this.skillData.efficient || 0;

    // Animate Futuristic Ring
    const offset = this.circumference - (percentage / 100) * this.circumference;
    setTimeout(() => { this.strokeDashoffset = offset; }, 100);
    this.animateCounter("counterNumber");
  }

  animateCounter(elementId: string) {
    let numberElement: any = document.getElementById(elementId);
    let counter = 0;
    const target = this.skillData.efficient || 0;

    // Wait for DOM
    setTimeout(() => {
      numberElement = document.getElementById(elementId);
      if (!numberElement) return;

      const interval = setInterval(() => {
        if (counter >= target) {
          clearInterval(interval);
          numberElement.innerHTML = target + '%';
        } else {
          counter++;
          numberElement.innerHTML = counter + '%';
        }
      }, 20);
    }, 50);
  }

}
