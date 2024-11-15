import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SkillSetComponent } from './components/skill-set/skill-set.component';
import { ProjectComponent } from './components/project/project.component';
import { SkillModelComponent } from './components/skill-model/skill-model.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SkillSetComponent,
    ProjectComponent,
    SkillModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
