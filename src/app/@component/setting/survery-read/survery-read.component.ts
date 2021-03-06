import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/@shared/apiservice.service';
import { APIENUM } from 'src/app/@shared/enum';
import { SharedService } from 'src/app/@shared/shared/shared.service';
import { ColumnSetting } from 'src/app/models/layout.model';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-survery-read',
  templateUrl: './survery-read.component.html',
  styleUrls: ['./survery-read.component.scss']
})
export class SurveryReadComponent extends BaseComponent implements OnInit {

  routePage ="../edit";
  apis='surveyquestion'
  projectSettings: ColumnSetting[] = [

    {
      primaryKey: "Title",
      header: "Title",

    },
    {
      primaryKey: "Description",
      header: "Description",

    },
    {
      primaryKey: "DepartmentID",
      header: "DepartmentID",
       routerParams:true

    },
    {
      primaryKey: "ID",
      header: "ID",
      //routerParams:true




    }




  ];

  constructor(private shared: SharedService,public api: ApiserviceService){
    super(api);
  }

  ngOnInit() {
    this.shared.getInfo().subscribe((res)=>{
      console.log(res);
      if(res){
        this.read(APIENUM.SQ);
      }
    })
    this.read(APIENUM.SQ);
  }

}
// DateCreated: "2021-03-18 12:16:13"
// DepartmentID: "DPT1900009"
// Description: ""
// ID: "1"
// PostedUser: "Admin"
// Status: "Active"
// Title: "Staff Are Clear In Their Verbal And Written Communication"
