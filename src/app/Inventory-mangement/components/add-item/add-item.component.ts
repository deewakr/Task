import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
  providers:[MatDatepickerModule]
})
export class AddItemComponent implements OnInit {
  form!:FormGroup;
  Dataobj:any=[];

  constructor(private fb:FormBuilder,private router:Router,private activate:ActivatedRoute) { 
    this.form = this.fb.group({
      item_no:["",Validators.required],
      item_name:["",Validators.required],
      item_type:["",Validators.required],
      cost:["",Validators.required],
      date_added:["",Validators.required],
      active:["",Validators.required]
    })
  }

  ngOnInit(): void {
   let singlerec = this.activate.snapshot.queryParamMap.get('data');
   console.log(singlerec);
  }


  save(){
    if(this.form.valid){
      console.log(this.form.value);
      this.Dataobj.push(this.form.value);
      console.log("dataobj",this.Dataobj);
      localStorage.setItem('userdata',JSON.stringify(this.form.value));
      this.router.navigate([''])
       
      
    }else{
      this.form.markAllAsTouched();
    }

    // this.form.reset();
  }

}
