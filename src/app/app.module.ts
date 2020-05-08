import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RemindersComponent } from './reminders/reminders.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { TasksComponent } from './tasks/tasks.component';
import { HeadingComponent } from './heading/heading.component';
import { BooksComponent } from './books/books.component';
import { Swe632Component } from './swe632/swe632.component';


const appRoutes: Routes = [
  {path:'',component:LoginComponent},

  {path:'dashboard',component:DashboardComponent},
  {
    path:'tasks',component:TasksComponent
  },
  {
    path:'courses',component:CoursesComponent
  },
  {
    path:'swe632',component:Swe632Component
  },
  {
    path:'discussion',component:DiscussionComponent
  },
  {
    path:'books',component:BooksComponent
  },

  // {
  //   path: '', component: HeaderComponent,outl, children: [

  //       { path: 'dashboard', component: DashboardComponent },
  //       { path: 'tasks', component: TasksComponent, children:[{
  //         path:'discussion',component:DiscussionComponent
  //       }] },
  //       { path: 'courses', component: CoursesComponent },
  //     ]
  // },





]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RemindersComponent,
    HeaderComponent,
    CoursesComponent,
    DiscussionComponent,
    TasksComponent,
    HeadingComponent,
    BooksComponent,
    Swe632Component
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
