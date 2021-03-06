import { element } from 'protractor';
import { Component, OnInit, ViewChild, HostListener, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/@shared/apiservice.service';
import { APIENUM } from 'src/app/@shared/enum'
import { MdbTableDirective } from 'ng-uikit-pro-standard';
import swal from 'sweetalert2';


@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  elements = []    
  elementID = []   
  headElements = ['Employee','Salary Grade', 'Total Amount Due'];
  searchText: string = '';
  dated: string = new Date().toJSON().slice(0, 10)
  previous: string;
  message: Boolean=false;
  loading:Boolean=true;
  messages: string;
  maxVisibleItems: number = 8;
  show: Boolean; 
  displaySide: Boolean = false;
  date: string = '';
  myForm1: FormGroup;
  Leave:FormGroup;
  error:any;
  leave:any=null;
  statusValue: string = '';
  leaveHistory:any;
  @Input() title: string;
  success:any;
  constructor(
    private _fb:FormBuilder,
    private service:ApiserviceService
  ) { }
  @HostListener('input') oninput() {
    this.searchItems();
  }

  ngOnInit() {
    this.myForm1 = this._fb.group({
      Month: [this.date, Validators.required]
    });
    this.loadEvent();
  }

  view(){
    this.show = !this.show ;
  }

loadEvent(){
    let value = {EmployeeID :  sessionStorage.getItem('EmpID')
   
}
this.service.populateApprove({
  Month: this.dated
}, APIENUM.PAYROLL).subscribe((res:any)=>{
        this.loading = false;
        this.error = false;
        console.log(this.elements);
        this.elements = res.records;
        this.elements.forEach(element => {
          this.elementID.push(element.SalarySlipID)
        })
        this.mdbTable.setDataSource(this.elements);
        this.elements = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
      }, (err: any) => {
        this.loading = false;
        this.error = true;
        this.messages = err.error.message;
        this.message = true;
        this.elements = [];
      })
}
hitApi() {
  this.dated = this.myForm1.value['Month']
      this.service.populateApprove(this.myForm1.value, APIENUM.PAYROLLM)
        .subscribe((res: any) => {
          this.loading = false;
          this.error = false;
          this.messages = "";
          this.message = false;
          this.elements = res.records;
          this.mdbTable.setDataSource(this.elements);
          this.elements = this.mdbTable.getDataSource();
          this.previous = this.mdbTable.getDataSource();
        }, (err: any) => {
          this.loading = false;
          this.error = true;
          this.messages = err.error.message;
          this.message = true;
          this.elements = [];
        })
    }
searchItems() {
  const prev = this.mdbTable.getDataSource();

  if (!this.searchText) {
    this.mdbTable.setDataSource(this.previous);
    this.elements = this.mdbTable.getDataSource();
  }

  if (this.searchText) {
    this.elements = this.mdbTable.searchLocalDataBy(this.searchText);
    this.mdbTable.setDataSource(prev);
  }
}

reademployee(el){
  this.displaySide=true;
 this.leave=el;
 
}
 updateSalary(el){
   let value={
    
    Status: el,
    Note: "Okay.",
    SalarySlipIDs: this.elementID
};
   this.service.App(APIENUM.PAYROLL,value).subscribe((res:any)=>{

    this.success=res.message;
    swal.fire({
      title: res.message,position: "center",
      icon: 'success',
      showConfirmButton: false,
      timer: 3500,
      showCloseButton: true 
     })

   },err=>{
    this.error=err.error.message;
    swal.fire({
      position: 'center',
      icon: 'error',
      title: err.error.message,
      showConfirmButton: true,
      timer: 3500,
  
     })
     console.log(el)
  })


  this.loadEvent();

 }
}


