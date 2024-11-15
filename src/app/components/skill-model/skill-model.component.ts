import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-skill-model',
  templateUrl: './skill-model.component.html',
  styleUrls: ['./skill-model.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SkillModelComponent {
  percentage: any;
  // constructor(@Inject(MAT_DIALOG_DATA) public data: { data: any },dialogRef: MatDialogRef<SkillModelComponent> ) {}
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { data: any },
    private dialogRef: MatDialogRef<SkillModelComponent> // Inject MatDialogRef
  ) {}
  skillData=this.data.data
  textfunction() {
    let number: any = document.getElementById("number");
    let counter = 0;
    const target = this.skillData.efficient; 
    
    const interval = setInterval(() => {
      if (counter >= target) {
        clearInterval(interval); 
      } else {
        counter += 1;
        number.innerHTML = this.skillData.name+ counter + "%"; 
      }
    }, 15); 
  }
  
  
  getStrokeDashoffset(): number {
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const percentage = this.skillData.efficient || 0;
    this.percentage=percentage
    return circumference - (percentage / 100) * circumference;
  }
  
  ngOnInit(): void {
    this.textfunction()
    this.dialogRef.afterClosed().subscribe(() => {
      this.skillData=null
    });
  }

}
