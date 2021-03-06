import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiserviceService } from 'src/app/@shared/apiservice.service';
import { APIENUM } from 'src/app/@shared/enum';
import { forkJoin } from 'rxjs';
import { IMyOptions } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-incre',
  templateUrl: './incre.component.html',
  styleUrls: ['./incre.component.scss']
})
export class IncreComponent implements OnInit {
  Increment:FormGroup;
  error:any;
  success:any;
  elements = [];
  searchText: string = '';
  previous: string;
  message: Boolean=false;
  loading:Boolean=true;
  messages: string;
  emp;
  sg;
  ds;
  public myDatePickerOptions: IMyOptions = {
    // Your options
  };
  optionsSelect: { value: string; label: string; }[];
  constructor(

    private _fb:FormBuilder,
    private Api:ApiserviceService

  ) { }

  ngOnInit() {
this.load();
  }

  load(){
    this.optionsSelect = [
      { value: 'promotion', label: 'Promotion' },
      { value: 'increment', label: 'Increment' },
      { value: 'incrementpromotion', label: 'Increment and Promotion' },
      ];
    this.loadEvent();
    this.Increment= this._fb.group({
      EmployeeID:['',[Validators.required]],
      Type:['',[Validators.required]],
      SalaryGroup:['',[Validators.required]],
      Description:['',[Validators.required]],
      PreviousDsg:['',[Validators.required]],
      CurrentDsg:['',[Validators.required]],
      IncrementPromotionDate:['',[Validators.required]],
    });
    this.Api.Read(APIENUM.INCR)
    .subscribe((res:any)=>{
      this.loading = false;
      this.elements=res.records;
    }, (err: any) => {
      this.loading = false;
      this.messages = err.error.message;
      this.message = true;
    })
  }

  get EmployeeID(){
    return this.Increment.get('EmployeeID')as FormControl;
  }


  get Type(){
    return this.Increment.get('Type')as FormControl;
  }


  get SalaryGroup(){
    return this.Increment.get('SalaryGroup')as FormControl;
  }


  get Description(){
    return this.Increment.get('Description')as FormControl;
  }


  get PreviousDsg(){
    return this.Increment.get('PreviousDsg')as FormControl;
  }


  get CurrentDsg(){
    return this.Increment.get('CurrentDsg')as FormControl;
  }


  get IncrementPromotionDate(){
    return this.Increment.get('IncrementPromotionDate') as FormControl;
  }



  loadEvent(){

    let event = [this.Api.Read(APIENUM.EMP),this.Api.Read(APIENUM.SAG),this.Api.Read(APIENUM.DES)];

forkJoin(event).subscribe((res:any)=>{
  console.log(res);
  this.emp =  res[0].records;
  this.sg= res[1].records;
 this.ds=res[2].records;

})


  }

  createIncrement(){

    this.Increment.disable();
    let value = {Status:"Active",...this.Increment.value};
    this.Api.Create(APIENUM.INCR,value).subscribe((res:any)=>{
      this.success=res.message;
      this.load();

   },err=>{
     this.error=err.error.message;
     this.Increment.enable();


   },()=>{
     setTimeout(()=>{
       this.success='';
       this.error='';
       this.Increment.reset();
       this.Increment.enable();
     },500);
     this.load();


   })

  }

}
