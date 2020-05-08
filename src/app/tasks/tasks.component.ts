import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Subjects } from '../subjects.model'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  subjects:Subjects[];
  subSelected:Number;
  showcs583:boolean=true;
  showswe632:boolean=true;
  showcs550:boolean=true;

  constructor() { }

  ngOnInit(): void {
    this.subjects=[
      {id:1,name:"All Subjects"},
      {id:2,name:"swe632"},
      {id:3,name:"cs583"},
      {id:4,name:"cs550"}
    ];
    this.subSelected=1;
    console.log(this.subjects);
    console.log(this.subSelected)
  }

  onChangeModel(subSelected){
    console.log(this.subSelected);
    if(this.subSelected==1){
      this.showswe632=true;
      this.showcs583=true;
      this.showcs550=true;
    }else if(this.subSelected==2){
      this.showswe632=true;
      this.showcs583=false;
      this.showcs550=false;
    }else if(this.subSelected==3){
      this.showswe632=false;
      this.showcs583=true;
      this.showcs550=false;
    }else{
      this.showswe632=false;
      this.showcs583=false;
      this.showcs550=true;
    }
    
  }

}
