import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SkillSetComponent } from './components/skill-set/skill-set.component';
import { ProjectComponent } from './components/project/project.component';
import { SkillModelComponent } from './components/skill-model/skill-model.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './components/contact/contact.component';
import { TestComponent } from './components/test/test.component';
import { FormsModule } from '@angular/forms';
import { ForMobileComponent } from './components/for-mobile/for-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SkillSetComponent,
    ProjectComponent,
    SkillModelComponent,
    ContactComponent,
    TestComponent,
    ForMobileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
